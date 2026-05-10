import axios from "axios";
import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => {
        setMyOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(myOrders);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("My Orders", 14, 20);

    // Prepare table headers
    const tableColumn = [
      "No.",
      "Product Name",
      "Price",
      "Phone",
      "Location",
      "Quantity",
      "Total Price",
      "Date",
    ];

    const tableRows = myOrders.map((order, index) => [
      index + 1,
      order.product_name,
      `$${order.product_price}`,
      order.phone,
      order.address,
      order.quantity,
      `$${order.product_price * order.quantity}`,
      new Date(order.date).toLocaleString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save("my_orders.pdf");
  };

  return (
    <div>
      <h3
        className="animate__animated animate-pulse text-2xl md:text-4xl lg:text-4xl font-bold text-center py-6
               bg-linear-to-r from-blue-500 via-purple-500 to-pink-500
               bg-clip-text text-transparent"
      >
        My Orders
      </h3>

      <div className="overflow-x-auto">
        <table className="table table-xs mx-0 md:mx-8">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Quantity</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.product_name}</td>
                <td>{order.product_price}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.quantity}</td>
                <td>
                  {new Date(order.date).toLocaleString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-8">
        <button
          onClick={exportPDF}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default MyOrders;
