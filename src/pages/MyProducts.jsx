import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyProducts = () => {
  const [products, setProducts] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://backend-pawmart.vercel.app/my-products?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-error",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`https://backend-pawmart.vercel.app/delete/${id}`)
            .then((res) => {
              console.log(res.data);

              if (res.data.deletedCount) {
                const filterData = products.filter(
                  (product) => product?._id != id
                );
                setProducts(filterData);

                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
              // toast.success("Delete Successful!");
            })
            .catch((err) => {
              console.log(err);
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  console.log(products);

  return (
    <div className="mx-10">
      <title>My Listings</title>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Number</th>
              <th>Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Price</th>
              <th className="text-center">Delete/Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product, id) => {
              return (
                <tr>
                  <td className="text-center">
                    {" "}
                    <div>
                      <p>{id + 1}</p>
                    </div>
                  </td>
                  <td>
                    <div key={id} className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={product?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {product?.category}
                    <br />
                  </td>
                  <td>
                    {product?.location}
                    <br />
                  </td>
                  <td>${product.price}</td>
                  <td className="text-center">
                    <div className="flex justify-center items-center gap-2 whitespace-nowrap">
                      <button
                        onClick={() => handleDelete(product?._id)}
                        className="btn btn-error btn-xs"
                      >
                        Delete
                      </button>
                      <Link to={`/update-products/${product?._id}`}>
                        <button className="btn btn-primary btn-xs">Edit</button>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
