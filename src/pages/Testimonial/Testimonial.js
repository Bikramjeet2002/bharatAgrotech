import React, { useState } from "react";
import CustomModal from "../../components/CustomModal";
import { Cancel } from "@mui/icons-material";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Developer",
    image: "/founder/bikram.jpg",
    detail:
      "The attention to detail and user experience is outstanding. This product has transformed how our team works together. The interface is intuitive and the features are exactly what we needed.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Developer",
    image: "/founder/bikram.jpg",
    detail:
      "I've tried many similar solutions, but this one stands out. The performance is exceptional and the support team is always ready to help. Highly recommend for any development team.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Developer",
    image: "/founder/bikram.jpg",
    detail:
      "I've tried many similar solutions, but this one stands out. The performance is exceptional and the support team is always ready to help. Highly recommend for any development team.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Developer",
    image: "/founder/bikram.jpg",
    detail:
      "I've tried many similar solutions, but this one stands out. The performance is exceptional and the support team is always ready to help. Highly recommend for any development team.",
  },
];

export default function Testimonials() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-50 py-10">
      <CustomModal open={open}>
        <div className="bg-white w-full h-full md:w-[800px] md:h-[500px] rounded-lg md:p-5 p-3">
          <div className="flex justify-end">
            <Cancel onClick={() => setOpen(false)} />
          </div>
          <div className=" flex  gap-3 justify-around">
            <div className="bg-gray-100 h-[400px] w-[50%]">
              Video from the client
            </div>
            <div className="flex-col">
              <div>csddfsvZ</div>
              <div>zXCVDS</div>
            </div>
          </div>
        </div>
      </CustomModal>
      <h2 className="text-2xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full md:w-[48%] lg:w-[45%] space-y-4"
          >
            <div className="w-[150px] h-[150px]">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-full h-full border border-gray-200"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
            <p className="text-gray-600 text-sm">{testimonial.detail}</p>
            <button
              onClick={() => setOpen(true)}
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              Show more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
