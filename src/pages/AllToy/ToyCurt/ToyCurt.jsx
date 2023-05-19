import React from "react";
import { Link } from "react-router-dom";

const ToyCurt = ({ Toy }) => {

    const {_id, photo, toy, sellerName, email, category, price, quantity, details, rating} = Toy
  return (
    <div className="card card-side bg-gray-300 text-gray-700 shadow-xl border">
      <figure>
        <img
          src={photo}
          className="object-cover h-48 w-96 rounded-lg ms-1"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toy}</h2>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCurt;
