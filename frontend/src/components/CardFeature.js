import React from "react";


const CardFeature = ({ image, name, price, category }) => {
  return (
    <div className="w-full min-w-[280px] bg-white shadow-2xl p-4 py-5 px-4">
      <div className="h-28">
        <img src={image} className="h-full" />
      </div>
    </div>
  );
};

export default CardFeature;
