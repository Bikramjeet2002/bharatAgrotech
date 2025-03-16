import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product, isRotate = true }) => {
  return (
    <div
      title="Click To View Info"
      className={`shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[360px] bg-gray-100 ${
        isRotate ? "hover:rotate-1 transition-all duration-500" : ""
      } rounded-lg p-3`}
    >
      <Link key={product?.id} to={`/product/${product?.id}`} className="group">
        <img
          alt={product?.imageAlt}
          src={product?.images[0].url}
          className="aspect-square w-full h-[65%] rounded-2xl shadow-sm border border-gray-300 bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
        />
        <div>
          <h3 className="mt-4 text-md font-semibold text-gray-700">
            {product?.name}
          </h3>
          <p className="line-clamp-2 mb-2 text-gray-500">
            {product?.shortDescription}
          </p>
          <Link to={`/product/${product?.id}`} className=" mt-3 bg-slate-600 hover:bg-slate-700 p-1 px-2   rounded-lg text-white">Show more</Link>
          {/* <p className="mt-1 text-md font-medium inline-flex items-center text-gray-700">
            <StarIcon className="w-4 h-4" />
            {product?.rating}
          </p> */}
        </div>
      </Link>
    </div>
  );
};

export default Card;
