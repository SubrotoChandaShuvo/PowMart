import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const FilterPage = () => {
    const [services, setServices] = useState([]);

    const {category}=useParams();
    // console.log(category);
    

    useEffect(() => {
        fetch(`http://localhost:3000/listings/category/${encodeURIComponent(category)}`)
          .then((res) => res.json())
          .then((data) => setServices(data))
          .catch((err) => console.log(err));
      }, [category]);

      console.log(services);
      

    return (
        <div className="my-8 ">
      {/* <title>Pet and Supplies</title> */}
      <div className="mt-12 mb-4">
        <h3
          className="animate__animated animate__bounce text-2xl md:text-4xl lg:text-4xl font-bold text-center pb-8
               bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
               bg-clip-text text-transparent"
        >
          Welcome to filter
        </h3>
      </div>
      <div className="px-8 md:px-8 lg:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 ">
          {services.map((service) => (
            <button
              initial={{ scale: 0.6 }}
              animate={{
                scale: 1,
                transition: { duration: 0.8 },
              }}
              div
              key={service._id}
              className="card bg-base-100 md:w-90 shadow-sm
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
                  <span className="">Price: ${service?.price !== 0 ? service?.price :"Free for Adoption"}</span>
                </div>

                <div className="flex justify-between items-center w-full text-[13px]">
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
            </button>
          ))}
        </div>
      </div>
    </div>
    );
};

export default FilterPage;