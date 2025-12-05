import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyProducts = () => {
  const [products, setProducts] = useState([]);

  const {user} = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:3000/my-products?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  console.log(products);
  

  return <div>my services</div>;
};

export default MyProducts;
