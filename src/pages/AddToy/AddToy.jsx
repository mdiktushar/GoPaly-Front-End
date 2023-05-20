import React, { useContext } from "react";
import { AuthContext } from "../../providers/FirebaseAuthProvider";
import { useNavigate } from "react-router-dom";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const addToyHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const toy = form.toy.value;
    const photo = form.photo.value;
    const sellerName = form.seller.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const addToy = {
      toy,
      photo,
      sellerName,
      email,
      category,
      price,
      rating,
      quantity,
      details,
    };

    await fetch(`${import.meta.env.VITE_ULR}/toy`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToy),
    })
      .then((req) => req.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Toy Added Successfully");
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
          onSubmit={addToyHandler}
          className="flex flex-col justify-center items-center"
        >
          <div className="form-control w-full max-w-xs text-center">
            <label className="label">
              {/* Toy Name */}
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              name="toy"
              placeholder="Toy Name"
              required
              className="input input-bordered w-full max-w-xs"
            />
            {/* PhotoURL */}
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              required
              type="text"
              name="photo"
              placeholder="PhotoURL"
              className="input input-bordered w-full max-w-xs"
            />
            {/* Seller Name */}
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              required
              type="text"
              name="seller"
              defaultValue={user?.displayName}
              placeholder="Seller Name"
              className="input input-bordered w-full max-w-xs"
            />
            {/* Email */}
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              required
              type="text"
              name="email"
              defaultValue={user.email}
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            {/* Category */}
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              className="select select-ghost w-full max-w-xs"
              defaultValue={"others"}
            >
              <option value={`others`} disabled>
                Toy Category
              </option>
              <option value={`mickey & friends`}>Mickey & Friends</option>
              <option value={`disney princess`}>Disney Princess</option>
              <option value={`hundred acre wood`}>Hundred Acre Wood </option>
            </select>

            {/* Price */}
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              required
              type="num"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
            />
            {/* Rating */}
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              required
              type="number"
              name="rating"
              placeholder="Rating"
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
              placeholder="Details"
            ></textarea>
            <br />
            <button type="submit" className="btn btn-outline btn-success">
              Success
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
