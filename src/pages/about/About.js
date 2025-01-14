import React from "react";
import AccordionAb from "../../components/AccordianAb";
import CustomModal from "../../components/CustomModal";

const About = () => {
  return (
    <div>
      <div className="py-12 relative ">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto bg">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Building Stronger Communities through Collaboration and
                  Empowerment
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Through collaborationperse perspectives and strengths are
                  leveraged to create inclusive environments where everyone has
                  the opportunity to thrive. This approach not only fosters
                  personal growth and achievement but also strengthens the
                  fabric of society.
                </p>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-gray-700 hover:bg-gray-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Contact Us
                </span>
              </button>
            </div>
            <img
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src="/about/about.jpg"
              alt="about Us image"
            />
          </div>
        </div>
      </div>
      <div className="py-5 relative ">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto bg">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <img
              className="lg:mx-0 w-full mx-auto h-[80%] rounded-3xl object-cover"
              src="/about/blades.jpg"
              alt="about Us image"
            />
            <div>
            <h2 className="text-gray-700 text-4xl  font-bold font-manrope leading-normal lg:text-start text-center">
                 Frequently Asked QA...?
                </h2>
                <p className="my-3 text-gray-700">Below, you'll find answers to the most frequently asked questions about our services. If you can’t find what you’re looking for, feel free to contact us.</p>
              {/* accordian */}
              <AccordionAb />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-3xl font-semibold my-10">
          Our Founders
        </h1>
        <div className="md:flex justify-around items-center my-8">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-gray-100 h-[200px] w-[200px] overflow-hidden border border-black-500 rounded-full">
              <img src="/founder/bikram.jpg" alt="" />
            </div>
            <h1 className="mt-4 text-2xl font-semibold">Ravinder Singh</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-gray-100 h-[200px] w-[200px] overflow-hidden  border border-black-500  rounded-full">
              <img src="/founder/bikram.jpg" alt="" />
            </div>
            <h1 className="mt-4 text-2xl font-semibold">Ajay Goyal</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-gray-100 h-[200px] w-[200px] overflow-hidden  border border-black-500  rounded-full">
              <img src="/founder/bikram.jpg" alt="" />
            </div>
            <h1 className="mt-4 text-2xl font-semibold">bikram</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
