import React from "react";

const FeedBack = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h2 className="text-5xl font-semibold text-gray-600 text-center">
        Feedback
      </h2>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">What is your Email?</span>
        </label>
        <input
          type="Email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <textarea className="textarea" placeholder="Feedback"></textarea>
        <br />
      </div>
      <button className="btn btn-wide">Submit</button>
    </div>
  );
};

export default FeedBack;
