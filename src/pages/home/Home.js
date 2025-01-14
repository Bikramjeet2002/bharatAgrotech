import { Button } from "@headlessui/react";
import React from "react";
import Navbar from "../../components/Navbar";
import { Image } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className=" z-[-1] overflow-hidden object-cover sm:relative  -top-[110px] left-0 right-0 bottom-0   ">
        <img
          className="m-auto sm:h-[50dvh] lg:h-[100dvh] 2xl:!h-[750px] w-full"
          src="/home/main.jpg"
          alt=""
        />
      </div>

      {/* welcome tho the page
       */}

      <div>
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex-1 hidden sm:grid grid-cols-2 gap-4">
            
            <div className="h-[200px]">
              <img
                src="/home/t2.jpg"
                alt="Tractor in sunset"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="h-[200px]">
              <img
                src="/home/plow.jpg"
                alt="Warehouse"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="col-span-2 h-[250px]">
              <img
                src="/home/main.jpg"
                alt="Tractor in field"
                width={600}
                height={250}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-8 justify-center relative">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              WELCOME TO
              <span className="block text-[#FF5722]">BHARAT AGRO TECH</span>
            </h1>

            <div className="space-y-3 my-0 text-gray-600">
              <p>
                BHARAT AGRO TECH was established in 2020 by S. Ravinder Singh
                Padam with the support of Sh. Ajay Goyal, Sh. Gagandeep Jain and
                Sh. Tarsem Garg with a motive to bring ease to farmers in terms
                of availability of quality agricultural implements & to enhance
                farm yield & productivity of farmers. We have been consistently
                leading the market bringing innovation to the products.
              </p>

              <p>
                We are the manufacturer of tractor cultivator shovels in Punjab,
                INDIA. We are one of the manufacturer for all kinds of steel
                shovels in INDIA. Our shovels crush the soil to make them
                smoother and ready for all sorts of cultivation. The cultivator
                shovels that are made by us are uniquely produced to meet
                international quality of standards. These professionally made
                shovels are also ideal to be used in dry soil also.
              </p>
            </div>

            <button className="bg-[#FF5722] hover:bg-[#F4511E] text-white  font-bold py-3 px-8 rounded transition duration-300 ease-in-out w-fit">
              READ MORE
            </button>

            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Decorative farm equipment illustration"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
