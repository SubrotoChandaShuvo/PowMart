// import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const ShopByCategory = () => {

  const categories = [
  {
    type: "Pet",
    title: "Pets (Adoption)",
    icon: "🐶",
    image:
      "https://i.pinimg.com/1200x/78/05/8e/78058e978c558f8fb4d8c6ccf5a17685.jpg",
  },
  {
    type: "Food",
    title: "Pet Food",
    icon: "🍖",
    image:
      "https://i.pinimg.com/1200x/93/de/0e/93de0e934ff405e8a0096044e2801aca.jpg",
  },
  {
    type: "Accessories",
    title: "Accessories",
    icon: "🧸",
    image:
      "https://i.pinimg.com/1200x/13/54/3f/13543f5e433eaa744acde16c94ce07c0.jpg",
  },
  {
    type: "Care Products",
    title: "Pet Care",
    icon: "💊",
    image:
      "https://i.pinimg.com/1200x/13/2c/ea/132cea1b60a23aaaa6b8bc1ee7db1fa6.jpg",
  },
];

  return (
    


    <div className="w-full flex flex-col items-center py-10">
      <h3
          className="text-2xl md:text-4xl lg:text-4xl font-bold text-center pb-2
               bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
               bg-clip-text text-transparent"
        >
        Shop by Category</h3>
      <p className="text-gray-500 mb-10">
        Find everything your pet needs in one place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4">
        {categories.map((cat, i) => (
        <Link to={`/filter/${cat?.type}`}>
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <img
              src={cat.image}
              className="w-full h-56 object-cover group-hover:scale-105 duration-300"
              alt={cat.title}
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold flex items-center gap-2">
                <span className="text-3xl">{cat.icon}</span> {cat.title}
              </span>
            </div>
          </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default ShopByCategory;