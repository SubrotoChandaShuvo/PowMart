import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const [product, setProduct] = useState([]);
  // const [serviceDetails, setServiceDetails]=useState(null)

  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigation = useNavigate;

  useEffect(() => {
    fetch(`https://backend-pawmart.vercel.app/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);


  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      product_name: form.product_name.value,
      product_id: form.product_id.value,
      quantity: Number(form.quantity.value || 1),
      product_price: Number(form.price.value),
      buyerName: form.buyerName.value,
      buyerEmail: form.buyerEmail.value,
      address: form.address.value,
      date: form.date.value,
      phone: form.phone.value,
      note: form.note.value,
    };

    axios
      .post("https://backend-pawmart.vercel.app/orders", formData)
      .then(() => {
        document.getElementById("my_modal_3")?.close();
        form.reset();

        Swal.fire({
          title: "Order placed successfully 🎉",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Failed to place order",
          text: "Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <div className="flex gap-20 items-center px-[145px] py-6">
      <img
        className="w-1/3 h-[300px] md:h-[500px] rounded-2xl my-5"
        src={product?.image}
        alt="product Image"
      />
      <div>
        <h1 className="text-xl lg:text-2xl">
          Product/Pet Name: {product?.name}
        </h1>
        <h4 className="font-semibold">Category: {product?.category}</h4>
        <p>Location: {product?.location}</p>
        <p className="text-blue-400">Price: ${product?.price}</p>

        
        <button
          className="btn btn-neutral transform transition-transform duration-300 hover:scale-102 mt-3"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Adapt/Order
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form
              className="fieldset  p-5 mt-5 rounded-2xl shadow shadow-gray-600"
              onSubmit={handleOrder}
            >
              <h1 className="text-xl font-bold">Adapt/Order Details</h1>
              <label className="text-[15px]">Product/Listing Name</label>
              <input
                defaultValue={product?.name}
                readOnly
                name="product_name"
                type="text"
                className="input w-full mb-2"
                
              />
              <label className="text-[15px]">Product/Listing ID</label>
              <input
                defaultValue={product?._id}
                readOnly
                name="product_id"
                type="text"
                className="input w-full mb-2"
                
              />
              <label className="text-[15px]">Quantity</label>
              <input
                defaultValue={1}
                readOnly={product?.category === "Pet"}
                name="quantity"
                type="number"
                className="input w-full mb-2"
                placeholder="Enter Quantity"
              />

              <label className="text-[15px]">Price</label>
              <input
                defaultValue={product?.price}
                readOnly
                name="price"
                type="number"
                className="input w-full mb-2"
                
              />
              <label className="text-[15px]">Buyer Name</label>
              <input
                defaultValue={user?.displayName}
                name="buyerName"
                type="text"
                className="input w-full "
                placeholder="Your Name"
              />
              <label className="text-[15px]">Buyer Email</label>
              <input
                defaultValue={user?.email}
                readOnly
                name="buyerEmail"
                type="email"
                className="input w-full mb-2"
                placeholder="Enter Your Email"
              />

              <label className="text-[15px]">Address</label>
              <input
                name="address"
                type="text"
                className="input w-full mb-2"
                placeholder="Enter Your Address"
              />
              <label className="text-[15px]">Date (pick up)</label>
              <input
                required
                name="date"
                type="date"
                className="input w-full mb-2"
                placeholder="Enter Date (pick up)"
              />
              <label className="text-[15px]">Phone</label>
              <input
                name="phone"
                required
                type="number"
                className="input w-full mb-2"
                placeholder="Enter Your Phone Number"
              />
              <div>
                <label className="text-[15px] block mb-1">
                  Additional Notes
                </label>
                <textarea
                  name="note"
                  required
                  className="w-full p-3 rounded-lg bg-white/20 border border-gray-300  focus:outline-none"
                  placeholder="Write Additional Notes Here"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary transform transition-transform duration-300 hover:scale-102"
              >
                Adapt/Order Now
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ServiceDetails;
