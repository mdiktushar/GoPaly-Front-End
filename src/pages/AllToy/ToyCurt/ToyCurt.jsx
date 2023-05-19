import React from "react";
import { Link } from "react-router-dom";

const ToyCurt = ({ toy }) => {

    const {id, photo, toyName, seller, email, category, price, quantity, details, rating} = toy
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          className="object-cover h-48 w-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${id}`}><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCurt;
