import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "lucide-react";

const HomeCard = ({ product, isRotate = true }) => {
  return (
    <div
      title={`${isRotate ? "Click To View Info" : ""}`}
      className={`shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[380px] bg-white ${
        isRotate ? "hover:rotate-1 transition-all duration-500" : ""
      } rounded-3xl p-3`}
    >
      <div key={product?.id} className="group">
        <div className="relative">
          <img
            alt={product?.imageAlt}
            src={product?.images[0].url}
            className="aspect-square !relative w-full h-fit rounded-2xl object-cover"
          />
          <div className="absolute p-8 rounded-2xl z-50 top-0 bottom-0 left-0 right-0 hover:bg-black/40">
            <div className="group-hover:flex flex-col h-full hidden items-end justify-between text-white">
              <Link to={`/product/${product?.id}`}>
                <ArrowRightCircle className="h-10 w-10 transition-all duration-1000 hover:-rotate-45"/>
              </Link>
              <div className="text-end">
                <h1 className="text-2xl">{product?.name}</h1>
                <p className="line-clamp-1 text-sm opacity-75">
                  {product?.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
