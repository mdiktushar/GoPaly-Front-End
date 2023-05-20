import React from "react";
import { Link } from "react-router-dom";

const MyToy = ({ myToy, deleteHandler }) => {
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
  } = myToy;
  return (
    <>
      <tr className="border-b">
        <td className="bg-white">
          <label>
            <button
              onClick={() => deleteHandler(_id)}
              className="btn btn-ghost btn-xs"
            >
              X
            </button>
          </label>
        </td>
        <td className="bg-white">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={myToy?.photo} alt={toy} />
              </div>
            </div>
          </div>
        </td>
        <td className="bg-white">
          <p>{toy}</p>
        </td>
        <td className="bg-white"><p>{category}</p></td>
        <td className="bg-white"><p>{quantity}</p></td>
        <td className="bg-white"><p>{details}</p></td>
        <td className="bg-white">
          <p>{price}</p>
          <br />
        </td>
        <th className="bg-white">
            <Link to={`/update/${_id}`}><button className="btn btn-success">Update</button></Link>
        </th>
      </tr>
    </>
  );
};

export default MyToy;
