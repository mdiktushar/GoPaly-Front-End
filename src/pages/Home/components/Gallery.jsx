import React from "react";
import mikey from '../../../assets/img/mikey.jpg'
import snow from '../../../assets/img/snow.jpg'

const Gallery = () => {
  return (
    <div className="mt-20">
        <h2 className="text-5xl font-semibold text-gray-600 text-center">Gallery</h2>
        <hr  className="mb-5"/>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
        <img
          src={`https://ae01.alicdn.com/kf/H66f7c9be009148958e23bed5ea3c3004x.jpg_640x640Q90.jpg_.webp`}
          alt=""
        />
        <img
          src={`https://ae01.alicdn.com/kf/Hd79713902ca244bb91bf2e8f9715269eZ.jpg_640x640Q90.jpg_.webp`}
          alt=""
        />
        <img
          src={`https://ae01.alicdn.com/kf/H9837ac3aa66e4c6ab6bf9417960aa25cS.jpg_640x640Q90.jpg_.webp`}
          alt=""
        />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-4 gap-2 place-items-center">
        <img
          src={mikey}
          alt=""
        />
        <img
          src={snow}
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
