import React, { useState } from "react";
import CustomModal from "../../components/CustomModal";
import { Cancel } from "@mui/icons-material";
import view from "../../review.json"

export default function ProfileCards() {
  const [open, setOpen] = useState(false);
  const review =view?.reviews

  const cards = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/clients/avatar.avif",
      description:
        "The attention to detail and user experience is outstanding. This product has transformed how our team works together. The interface is intuitive, and the features are exactly what we needed.",
    },
    {
      id: 2,
      name: "John Doe",
      image: "/clients/avatar.avif",
      description:
        "This product has exceeded expectations. It is easy to use, efficient, and incredibly reliable. I highly recommend it to anyone seeking great performance.",
    },
    {
      id: 3,
      name: "Alice Smith",
      image: "/clients/avatar.avif",
      description:
        "A fantastic solution for our needs! The features are exactly what we wanted, and the support team has been exceptional.",
    },
  ];

  return (
    
    <div className="sm:px-24 px-2">
      <CustomModal open={open}>
        <div className="bg-white w-full  md:w-[700px] rounded-lg p-5">
          <div className="flex justify-end">
            <Cancel
              onClick={() => setOpen(false)}
              className="cursor-pointer text-gray-500 hover:text-gray-700"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-gray-100 w-full h-40 md:h-auto flex items-center justify-center">
              Video from the client
            </div>
            <div className="flex flex-col w-full gap-4">
              <img
                className="rounded-lg w-full h-40 object-cover"
                src="/testimonial/c1.jpg"
                alt="Testimonial Image"
              />
              <img
                className="rounded-lg w-full h-40 object-cover"
                src="/testimonial/c1.jpg"
                alt="Testimonial Image"
              />
            </div>
          </div>
        </div>
      </CustomModal>
      <div className="mt-12">
        <div>
          <hr />
        </div>
        <div className="flex justify-center">
          {console.log(review)}
          <h1 className="font-semibold px-4 -top-5 bg-white relative text-gray-600 text-2xl">
            Testimonials
          </h1>
        </div>
        <p className="text-center text-gray-500">
          We take pride in being top manufacturers of Rotary Tiller Blades,
          Super Seeder Blades, and Harrow Discs in Punjab, INDIA
        </p>
      </div>
      <div className="grid grid-cols-1 mb-20 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-16 p-2 sm:p-6">
        {review.map((card) => (
          <div
            key={card.id}
            className="h-[370px] mx-auto shadow-xl  rounded-2xl p-6 "
          >
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 mb-4">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full rounded-full border-2 border-gray-500 object-fill"
                />
              </div>
              <h2 className="text-md font-semibold text-gray-800">
                {card.reviewer}
              </h2>
              <p className="text-gray-600 line-clamp-3 text-sm text-center mt-3 leading-relaxed">
                {card.description}
              </p>
              <button
                onClick={() => setOpen(true)}
                className="mt-6 px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition"
              >
                Show More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
