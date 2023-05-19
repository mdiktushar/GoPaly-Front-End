import React from "react";

const AddToy = () => {
  const addToyHandler = (event) => {
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
    console.log(
      toy,
      photo,
      sellerName,
      email,
      category,
      price,
      rating,
      quantity,
      details
    );
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
              className="input input-bordered w-full max-w-xs"
            />
            {/* PhotoURL */}
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
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
              type="text"
              name="seller"
              placeholder="Seller Name"
              className="input input-bordered w-full max-w-xs"
            />
            {/* Email */}
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            {/* Category */}
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            {/* <input
              type="text"
              name="category "
              placeholder="Category "
              className="input input-bordered w-full max-w-xs"
            /> */}

            <select
              name="category"
              className="select select-ghost w-full max-w-xs"
              defaultValue={'others'}
            >
              <option value={`others`} disabled >
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
