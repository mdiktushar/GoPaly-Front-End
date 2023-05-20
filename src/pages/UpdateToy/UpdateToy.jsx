import React, { useContext } from "react";
import { AuthContext } from "../../providers/FirebaseAuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateToy = () => {
  const navigate = useNavigate()
  const Toy = useLoaderData();
  const {
    _id,
    photo,
    toy,
    price,
    quantity,
    details,
  } = Toy;

  const updateHandler = async(event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    await fetch(`${import.meta.env.VITE_ULR}/toy/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price: price,
    quantity: quantity,
    details: details
    }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
            alert("Toy Updated");
            navigate(`/mytoys`, { replace: true });
          }
      });
  };
  return (
    <div>
      <h2 className="text-center text-8xl">Add your Toy</h2>
      <hr className="mb-10" />

      <div>
        <form
          onSubmit={updateHandler}
          className="flex flex-col justify-center items-center"
        >
          <h3 className="text-4xl">{toy}</h3>
          <img src={photo} className="object-cover h-48 w-96 rounded-lg ms-1" />
          <div className="form-control w-full max-w-xs text-center">
            {/* Price */}
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              required
              type="num"
              name="price"
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
            />
            {/* Quantity */}
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              required
              type="number"
              name="quantity"
              defaultValue={quantity}
              placeholder="Quantity"
              className="input input-bordered w-full max-w-xs"
            />

            {/* Details */}
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea
              required
              className="textarea textarea-bordered h-24"
              name="details"
              defaultValue={details}
              placeholder="Details"
            ></textarea>
            <br />
            <button type="submit" className="btn btn-outline btn-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
