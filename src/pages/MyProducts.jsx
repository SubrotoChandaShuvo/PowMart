import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const MyProducts = () => {
  const [products, setProducts] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/my-products?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  console.log(products);

  return (
    <div className="mx-25">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Number</th>
              <th>Name</th>
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
                    {product?.location}
                    <br />
                  </td>
                  <td>${product.price}</td>
                  <td className="text-center">
                    <div className="flex justify-center items-center gap-2 whitespace-nowrap">
                      <button className="btn btn-error btn-xs">Delete</button>
                      <Link to={`/update-products/${product?._id}`}><button className="btn btn-primary btn-xs">Edit</button></Link>
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
