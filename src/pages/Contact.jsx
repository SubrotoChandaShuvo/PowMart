import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Message received!",
      text: "Thanks for contacting PowMart. We’ll get back to you soon.",
      icon: "success",
      confirmButtonColor: "#2563eb",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact With Us
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Have any question, feedback, or need support? We’d love to hear from you!
        </p>

       
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

         
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

       
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-blue-500"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

         
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all"
          >
            Send Message
          </button>
        </form>

        
        <div className="mt-10 text-center">
          <p className="text-gray-600">📍 Sylhet, Bangladesh</p>
          <p className="text-gray-600">📞 +880 1234-567890</p>
          <p className="text-gray-600">✉️ support@powmart.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
