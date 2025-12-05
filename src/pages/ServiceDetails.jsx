import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
  // const [serviceDetails, setServiceDetails]=useState(null)

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, [id]);

  // console.log(service);

  const [isBook, setBook] = useState(false);

  const handleBookForm = () => {
    setBook(!isBook);
  };

  const handleBook = () => {
    toast.success("Service Booking Successful! 🎉");
    setBook(!isBook);
  };

  return (
    <div className="flex gap-20 items-center px-[145px] py-6">
      <img
        className="w-1/3 h-[300px] md:h-[500px] rounded-2xl my-5"
        src={service?.image}
        alt="Service Image"
      />
      <div>
        <h1 className="text-xl lg:text-2xl">Product/Pet Name: {service?.name}</h1>
        <h4 className="font-semibold">Category: {service?.category}</h4>
        <p>Location: {service?.location}</p>
        <p className="text-blue-400">Price: ${service?.price}</p>
        <button
          onClick={handleBookForm}
          className="btn btn-neutral transform transition-transform duration-300 hover:scale-102 mt-3"
        >
          {!isBook ? "Book Service" : "Cancel Booking"}
        </button>
        {isBook && (
          <form className="fieldset  p-5 mt-5 rounded-2xl shadow shadow-gray-600">
            <h1 className="text-xl font-bold">For Booking The Service</h1>
            <label className="text-[15px]">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full "
              placeholder="Your Name"
            />
            <label className="text-[15px]">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full mb-2"
              placeholder="Enter Your Email"
            />
            <p
              onClick={handleBook}
              className="btn btn-primary transform transition-transform duration-300 hover:scale-102"
            >
              Book Now
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
