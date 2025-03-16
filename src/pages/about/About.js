import React from "react";
import AccordionAb from "../../components/AccordianAb";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="py-12 relative ">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto bg">
          <div className="w-full justify-start items-center gap-20 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full md:order-1 order-2 flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <div>
                  <h2 className="text-gray-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Our Vision
               
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                To revolutionize the agricultural industry by offering reliable, durable, and cutting-edge tools that meet the needs of modern farmers. We aim to bring superior quality and productivity to every farm we serve.
                </p>
                <p className="text-gray-500 mt-5 text-base font-normal leading-relaxed lg:text-start text-center">
                Our experienced engineers and technocrats employ cutting-edge techniques and years of expertise to create products that enhance farming efficiency. The team's dedication ensures timely delivery of high-quality products at competitive prices.

                </p>
                </div>
              </div>
              <Link to='/contact' className="sm:w-fit w-full px-3.5 py-2 bg-gray-600 hover:bg-gray-800  rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Contact Us
                </span>
              </Link>
            </div>
            <img
              className="lg:mx-0 mx-auto md:order-2 order-1 w-full shadow-lg h-[80%] border border-black-3 rounded-3xl object-cover"
              src="/about/about1.jpg"
              alt="aboutUsimage"
            />
          </div>
        </div>
      </div>
      <div className="py-5 relative mb-8">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto bg">
          <div className="w-full justify-start items-center gap-20 grid lg:grid-cols-2 grid-cols-1">
            <img
              className="lg:mx-0 w-full shadow-lg mx-auto h-[80%] rounded-3xl object-cover"
              src="/about/blades.jpg"
              alt="aboutUsimage"
            />
            <div>
              <div className="flex align-middle  text-gray-700   ">
                <img className="w-7 h-7" src="/about/faq.png" alt="" />
                <h1 className="font-bold text-gray-600 ml-2">FAQs</h1>
              </div>
              <h2 className="text-gray-600 text-4xl  font-bold font-manrope leading-normal lg:text-start sm:text-center">
                Frequently Asked QA...?
              </h2>
              <p className="mt-3 mb-10 text-gray-500">
                Below, you'll find answers to the most frequently asked
                questions about our services.
              </p>
              {/* accordian */}
              <AccordionAb />
            </div>
          </div>
        </div>
      </div>
      <div>
        


        
        <div className="mb-10 px-12">
        <div>
          <hr />
        </div>
        <div className="flex justify-center">
          <h1 className="font-semibold px-4 -top-5 bg-white relative text-gray-600 text-2xl">
            Our Founders
          </h1>
        </div>
        </div>



        <div className="md:flex md:w-[70%] justify-around mx-auto items-center mt-8 mb-16">
          <div className="flex flex-col items-center justify-center sm:mb-1 mb-10">
            <div className="bg-gray-100 h-[200px] w-[200px] overflow-hidden border border-black-500 rounded-full">
              <img className="shadow-lg" src="/founder/Ravinder1.jpg" alt="" />
            </div>
            <h1 className="mt-4 text-gray-600  text-2xl font-semibold">Ravinder Singh</h1>
            <p className="text-gray-600 font-semibold">Proprieter</p>
          </div>
          <div className="flex flex-col  items-center justify-center mb-10 sm:mb-1">
            <div className="bg-gray-100 h-[200px] w-[200px] overflow-hidden  border border-black-500  rounded-full">
              <img src="/founder/ajay.jpg" alt="" />
            </div>
            <h1 className="mt-4 text-gray-600  text-2xl font-semibold">Ajay Goyal</h1>
            <p className="text-gray-600 font-semibold">Sales Head</p>
          </div>
          <div className="flex flex-col items-center justify-center sm:mb-1 mb-10">
            <div className="bg-gray-100 h-[200px] w-[200px] overflow-hidden  border border-black-500  rounded-full">
              <img src="/founder/Tarsem.jpg" alt="" />
            </div>
            <h1 className="mt-4 text-2xl text-gray-600  font-semibold">Tarsem Singh</h1>
            <p className="text-gray-600 font-semibold">Financial Advisor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
