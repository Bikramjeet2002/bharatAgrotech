import React from "react";
import items from "../../product.json";
import { Link, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const products = items.products;

  const product = products.find((item) => item.id == id);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Product Image Section */}
        <div className="w-full  md:w-1/2 p-4 flex justify-center items-center">
          <img
            src={product.images[0]?.url || "https://via.placeholder.com/400"}
            alt={product.name}
            className="object-cover shadow-lg rounded-lg w-full max-h-[600px]"
          />
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h2>
          <p className="text-lg text-gray-700 mb-6">{product.shortDescription}</p>

          {/* Specifications Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="border border-gray-300 px-4 py-2">Specification</th>
                  <th className="border border-gray-300 px-4 py-2">Details</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key}>
                    <td className="border border-gray-300 px-4 py-2 capitalize">{key.replace(/_/g, ' ')}</td>
                    <td className="border border-gray-300 px-4 py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="grid gril col-1 md:grid-cols-3 gap-4 mt-6">
            <Link
              to="https://wa.me/9814551819"
              className="flex items-center justify-center p-2 md:px-1 lg:p-3 bg-green-600 text-white font-medium md:text-md lg:font-medium rounded-lg shadow-md hover:bg-green-700 transition "
            >
              <div className= "items-center "><i className="fa-brands fa-whatsapp text-lg mr-2"></i> WhatsApp</div>
            </Link>
            <Link
              to="tel:+919815451819"
              className=" flex items-center  justify-center p-2 lg:p-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              <i className="fa-solid fa-phone text-lg mr-2"></i> Call Now
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center p-2 md:p-3 bg-gray-600 text-white font-medium rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              <i className="fa-solid fa-envelope text-lg mr-2"></i> Inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
