import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const RecentAdded = () => {
  const [newProd, setNewProd] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-pawmart.vercel.app/recent")
      .then((res) => {
        setNewProd(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(newProd);

return (
    <div className="my-8 ">
      <div className="mt-12 mb-4">
        <h3
          className="text-2xl md:text-4xl lg:text-4xl font-bold text-center pb-8
               bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
               bg-clip-text text-transparent"
        >
          Recently Added
        </h3>
      </div>

      <div className="px-8 md:px-10 lg:px-[110px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10">
          {newProd.map((service) => (
            <div
              key={service.id}
              className="card bg-base-100 md:w-90 lg:w-full pb-2 shadow-sm rounded-xl
            transform transition-transform duration-300 hover:scale-105"
            >
              <figure>
                <img
                  className="w-full h-[300px] object-cover"
                  src={service?.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service?.name}</h2>
                <div className="flex justify-between items-center w-full text-[13px]">
                  <span className="">
                    Price: $
                    {service?.price !== 0
                      ? service?.price
                      : "Free for Adoption"}
                  </span>
                </div>
                <div className="flex justify-between items-center w-full text-[13px]">
                  <span>Category: {service?.category}</span>
                  <span className="">Date: {service?.date}</span>
                </div>
                <div className="flex justify-between items-center w-full text-[13px]">
                  <span className="">Location: {service?.location}</span>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/details/${service?._id}`}>
                    <button className="btn btn-primary">View details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentAdded;
