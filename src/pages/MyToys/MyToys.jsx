import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/FirebaseAuthProvider";
import MyToy from "./MyToy/MyToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [url, setUrl] = useState(
    `${import.meta.env.VITE_ULR}/my-toys?email=${user.email}`
  );
  const [Toys, setToys] = useState([]);

  const deleteHandler = (id) => {
    const proceed = confirm("Are your sure you want ot delete?");
    if (proceed) {
      fetch(`${import.meta.env.VITE_ULR}/toy/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const normalHandler = () => {
    setUrl(`${import.meta.env.VITE_ULR}/my-toys?email=${user.email}`);
  };

  const ascendingHandler = () => {
    setUrl(`${import.meta.env.VITE_ULR}/my-toys/ascending?email=${user.email}`);
  };

  const descendingHandler = () => {
    setUrl(
      `${import.meta.env.VITE_ULR}/my-toys/descending?email=${user.email}`
    );
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [deleteHandler, normalHandler, ascendingHandler, descendingHandler]);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2 className="text-5xl border-b">My toys</h2>

      <div className="flex gap-2">
        <button onClick={normalHandler} className="btn btn-info">
          Normal
        </button>
        <button onClick={ascendingHandler} className="btn btn-success">
          Ascending
        </button>
        <button onClick={descendingHandler} className="btn btn-warning">
          Descending
        </button>
      </div>

      <table className="table w-full bg-white">
        <thead className="font-semibold bg-white">
          <tr className="bg-white">
            <th>Delete</th>
            <th>Image</th>
            <th>Toy</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Price</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {Toys.map((toy) => (
            <MyToy key={toy._id} myToy={toy} deleteHandler={deleteHandler} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
