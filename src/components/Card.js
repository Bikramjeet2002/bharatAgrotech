import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "lucide-react";

const Card = ({ product, isRotate = true }) => {
  return (
    <div
      title="Click To View Info"
      className={`shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[360px] ${
        isRotate ? "hover:rotate-1 transition-all duration-500" : ""
      } rounded-lg p-3`}
    >
      <Link key={product?.id} to={`/product/${product?.id}`} className="group">
        <img
          alt={product?.imageAlt}
          src={product?.images[0].url}
          className="aspect-square w-full h-[70%] rounded-2xl bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
        />
        <div>
          <h3 className="mt-4 text-md font-semibold text-gray-700">
            {product?.name}
          </h3>
          <p className="line-clamp-1 text-gray-500">
            {product?.shortDescription}
          </p>
          <p className="mt-1 text-md font-medium inline-flex items-center text-gray-700">
            Rs{product?.price} (<StarIcon className="w-4 h-4" />
            {product?.rating})
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
