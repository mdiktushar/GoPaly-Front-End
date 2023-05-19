import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ToyCurt from "./ToyCurt/ToyCurt";

const AllToy = () => {
  const data = useLoaderData();
  let temp = data.slice(0, 20);
  const [toys, setToys] = useState(temp);

  const showAllHandler = () => {
    setToys(data);
  };

  const search = (value) => {
    setToys(data)
    const filteredToys = toys.filter((toy) =>
      toy.toy.toLowerCase().includes(value.toLowerCase())
    );

    temp = filteredToys.slice(0, 20);

    setToys(temp)
  };

  const clearSearch = () => {
    setToys(temp)
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2 className="text-5xl">All Toys</h2>
      <div className="flex">
        <input
          type="text"
          placeholder="Type here"
          className="input w-full max-w-xs"
          onChange={(e) => search(e.target.value)}
        />
        <button className="btn btn-square btn-outline">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button onClick={clearSearch} className="btn btn-square btn-outline">
          Clear
        </button>
      </div>

      {toys.map((toy) => (
        <ToyCurt key={toy._id} Toy={toy} />
      ))}

      <button onClick={showAllHandler} className="btn btn-info">
        Show ALL
      </button>
    </div>
  );
};

export default AllToy;
