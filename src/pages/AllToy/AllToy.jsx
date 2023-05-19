import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ToyCurt from "./ToyCurt/ToyCurt";

const AllToy = () => {
  const data = useLoaderData();
  let temp = data.slice(0, 20);
  const [toys, setToys] = useState(temp);
  // console.log(data);
  const showAllHandler = () => {
    setToys(data);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2 className="text-5xl">All Toys</h2>
      <div className="flex">
        <input
          type="text"
          placeholder="Type here"
          className="input w-full max-w-xs"
        />
        <button className="btn btn-square btn-outline">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      
    {
      
        toys.map(toy => <ToyCurt key={toy._id} toy={toy} />)
    }

      <button onClick={showAllHandler} className="btn btn-info">
        Show ALL
      </button>
    </div>
  );
};

export default AllToy;
