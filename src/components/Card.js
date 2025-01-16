import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "lucide-react";

const Card = ({ product, isRotate=true }) => {
  return (
    <div title="Click To View Info" className={`shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[360px] ${isRotate ? "hover:rotate-1 transition-all duration-500": ""} rounded-lg p-3`}>
      <Link key={product.id} href={product.href} className="group">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="aspect-square w-full h-[70%] rounded-2xl bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
        />
        <div>
          <h3 className="mt-4 text-md font-semibold text-gray-700">
            {product.name}
          </h3>
          <p className="line-clamp-1 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            exercitationem quibusdam, a rem deleniti reprehenderit qui aliquid
            voluptate repudiandae iure eius, optio iusto nemo explicabo harum,
            praesentium esse autem eligendi. Assumenda nesciunt exercitationem
            beatae sequi consequatur. Non repellat eligendi, qui odit veritatis
            quidem esse omnis at necessitatibus ea tempora quibusdam commodi
            tenetur sit, porro nostrum ullam eos vitae adipisci blanditiis.
          </p>
          <p className="mt-1 text-md font-medium inline-flex items-center text-gray-700">
            {product.price} (<StarIcon className="w-4 h-4" />
            4.0)
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
