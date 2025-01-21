import React from "react";
import items from "../../product.json";
import { Link, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const products = items.products;

  const product = products.filter((item) => item.id == id);
  const item = product[0];

  return (
    <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={item?.images[0]?.url} // Replace with the actual image URL
            alt="Rotavator Blade"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {item?.name}
          </h2>
          <h3 className="text-lg font-semibold text-gray-700 mb-6">
            {item?.shortDescription}
          </h3>

          {/* Specifications Table */}
          <table className="w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 font-semibold text-gray-700">
                  Specifications
                </th>
                <th className="border border-gray-300 px-4 py-2 font-semibold text-gray-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Design</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item?.specifications?.Design}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Type</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item?.specifications?.Type}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  {item?.specifications?.Available_Hole_Sizes
                    ? "Available Hole Sizes"
                    : "Available Set Weights"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item?.specifications?.Available_Hole_Sizes ||
                    item?.specifications?.Available_Set_Weights}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Flat Size</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item?.specifications?.Flat_Size}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Available Colors
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item?.specifications?.Available_Colors}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Packaging Per Box
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item?.specifications?.Packaging_Per_Box}
                </td>
              </tr> 
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Material Used
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item?.specifications?.Material_Used}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Overall Length
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item?.specifications?.Overall_Length}
                </td>
              </tr>
            </tbody>
          </table>

        <div className=" grid grid-cols-2 md:grid-cols-3 gap-2 mt-5 "> 
          <div className=" w-full">
          <Link to='https://wa.me/9814551819'
              type="submit"
              className="   py-2 px-4 bg-gray-600 text-white font-medium rounded-md shadow-sm hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              
          Whatsapp
            </Link>
            
          </div>
      
          <div className=" ">
          <Link to='tel:+919815451819'
              type="submit"
              className=" w-full  py-2 px-4 bg-gray-600 text-white font-medium rounded-md shadow-sm hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
             
                Call now
            </Link>
            
          </div>
        
        </div>

        <div>
    

        </div>


        </div>

       
      </div>
    </div>
  );
};

export default ProductDetailsPage;
