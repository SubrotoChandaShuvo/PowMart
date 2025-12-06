import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateProducts = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [category, setCategory] = useState(product?.category || "");
  const navigation = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3000/listings/${id}`).then((res) => {
      setProduct(res.data);
      setCategory(res.data?.category || "Pet");
    });
  }, [id, setProduct]);

  console.log(product);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = form.email.value;

    const formData = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
      createdAt: product?.createdAt,
    };

    axios.put(`http://localhost:3000/update/${id}`, formData)
    .then(res=>{
        console.log(res);
        toast.success("Pet/Product Updated Successfully 🎉");
        navigation('/my-products')
    })
    .catch(err=>{
        console.log(err);
        
    })
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
        <title>Update Listings</title>
      <h2 className="text-2xl font-bold mb-6 text-center">Update Listing</h2>

      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Product / Pet Name</label>
          <input
            defaultValue={product?.name}
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-lg bg-white/20 border border-gray-300 focus:outline-none"
            placeholder="Enter name"
          />
        </div>

        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/20 border border-gray-300 focus:outline-none"
        >
          <option value="Pet">Pet</option>
          <option value="Food">Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Care Products">Care Products</option>
        </select>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            defaultValue={product?.price}
            type="number"
            name="price"
            className="w-full p-3 rounded-lg bg-white/20 border border-gray-300  focus:outline-none"
            required
            placeholder="Enter price"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            defaultValue={product?.location}
            type="text"
            name="location"
            required
            className="w-full p-3 rounded-lg bg-white/20 border border-gray-300  focus:outline-none"
            placeholder="City, Area"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            defaultValue={product?.description}
            name="description"
            required
            className="w-full p-3 h-28 rounded-lg bg-white/20 border border-gray-300  focus:outline-none"
            placeholder="Write details here"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Image (URL)</label>
          <input
            defaultValue={product?.image}
            type="text"
            name="image"
            className="w-full p-3 rounded-lg bg-white/20 border border-gray-300  focus:outline-none"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            defaultValue={product?.date}
            type="date"
            name="date"
            className="w-full p-3 rounded-lg bg-white/20 border border-gray-300  focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            value={user?.email}
            type="email"
            name="email"
            readOnly
            className="w-full p-3 rounded-lg bg-white/20 border border-gray-300  focus:outline-none opacity-70"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProducts;
