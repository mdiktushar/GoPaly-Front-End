import React from "react";
import { useLoaderData } from "react-router";
import useTitle from "../../hooks/useTitle";

const Details = () => {
  const Toy = useLoaderData();

  const {
    _id,
    photo,
    toy,
    sellerName,
    email,
    category,
    price,
    quantity,
    details,
    rating,
  } = Toy;

  useTitle(`${toy} Details`);

  return (
    <div className="hero min-h-screen shadow-xl text-gray-700">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{toy}</h1>
          <p className="py-6">{details}</p>
          <p>Seller: {sellerName} </p>
          <p>Category: {category} </p>
          <p>Quantity: {quantity} </p>
          <p>Email: {email} </p>
          <p>Price: {price}</p>
          <p>Ratings: {rating} </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
