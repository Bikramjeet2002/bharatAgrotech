import React from "react";
import { Link } from "react-router-dom";
import OurClients from "../../components/OurClients";
import items from "../../product.json";
import views from "../../review.json";

import HomeCard from "../../components/HomeCard";
import "aos/dist/aos.css";

const Home = () => {
  const review = views?.reviews;
  const blades = items?.products;
  const products = blades.slice(0, 2);
  const test = review.slice(0, 2);
  return (
    <>
      <div
        className="z-[-1] m-auto  h-[100dvh] 2xl:!h-[750px] w-full overflow-hidden object-cover sm:relative  -top-[110px] left-0 right-0 bottom-0   relative bg-cover bg-center"
        style={{
          backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/home/main1.jpg')`,
        }}
      >
        <div className="flex flex-col  justify-center align-middle items-center h-full text-white text-center px-4">
          <div>
            <h1 className=" md:flex  md:justify-center  w-full text-4xl md:text-5xl font-bold mb-4">
              WELCOME TO BHARAT AGRO TECH
            </h1>
            <h1 className=" flex   w-full text-4xl md:text-5xl font-bold mb-4"></h1>
          </div>
          <div>
            <p className="text-sm md:text-lg max-w-2xl">
              We are the manufacturer of Super Seeder Blades, Rotavator Blades,
              rotary tiller blades in Punjab, INDIA. Our European quality Rotary
              Tiller Blades are made with the world's high-performance steel,
              which ensures ploughing the toughest soil conditions.
            </p>
          </div>
        </div>
      </div>

      {/* swiper */}
      <div className="mb-10 px-12">
        <div>
          <hr />
        </div>
        <div className="flex justify-center">
          <h1 className="font-semibold px-4 -top-5 bg-white relative text-gray-600 text-2xl">
            Our Clients
          </h1>
        </div>
        <OurClients />
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
              <p data-aos="fade-up" data-aos-anchor-placement="top-center">
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
            {/* <div className="z-50"> 
              <Whatsapp/>
            </div> */}

            <Link
              to={"/about"}
              className="bg-[#FF5722] hover:bg-[#F4511E] text-white  font-bold py-3 px-8 rounded transition duration-300 ease-in-out w-fit"
            >
              READ MORE
            </Link>

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

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:pb-24 sm:pt-16 lg:max-w-7xl lg:px-8">
          <div className="mb-10 px-12">
            <div>
              <hr />
            </div>
            <div className="flex justify-center">
              <h1 className="font-semibold px-4 -top-5 bg-white relative text-gray-600 text-2xl">
                Our Products
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
              {products?.map((product) => (
                <HomeCard product={product} isRotate={false} />
              ))}
            </div>

            <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] items-center justify-center h-[360px] p-4 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Explore more!
              </h2>
              <p className="text-gray-600 text-center mb-4">
                Check out more products on our product page and find the perfect
                one for you!
              </p>
              <Link
                to="/product"
                className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition"
              >
                Go to Products Page
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 mx-auto md:px-20 px-4 py-12 w-full md:gap-24 gap-10">
        <div>
          <h1 className="text-center text-2xl font-semibold text-gray-600 md:text-start">
            Our Certifications
          </h1>
          <div className="sm:block hidden">
            <p className="mt-5 text-gray-600">
              We have a proficient team consisting of engineers and technocrats,
              who employ their years of experience and expertise to manufacture
              products that can provide the right impetus to the agricultural
              industry. We use innovative techniques in our production
              processes, which ensure that our range is available at competitive
              prices.Having a strong basein the agricultural field, our company
              is available to take care of the bulk order of any specifications
              and execute it in the most conducive manner.
            </p>
            <p className="mt-3 text-gray-600">
              We are the manufacturer of tractor cultivator shovels in Punjab,
              India. We are one of the manufacturerfor all kinds of steel
              shovels in our shovels crush the soil to make them smoother and
              ready for all sorts of cultivation. The Cultivator shovels that
              are made by us are uniquely produced to meet international quality
              of standards. These professionally made shovels are also ideal to
              be used in dry soil also.
            </p>
            <p className="mt-3 text-gray-600">
              We are the manufacturer of Super Seeder Blades, Rotavator Blades,
              rotary tiller blades in Punjab,India. Our European Quality Rotary
              Tiller Blades are made with world's high performance steel, which
              ensures ploughing the toughest soil conditions. Our Blades has
              been approved by many O.E manufactures and end users. These blades
              are manufactured under strict Heat-Treatment process to obtain
              high quality blades. The rotary tiller blade is the main part of
              rotary tiller machine and it is attached to a tractor for
              ploughing. The Rotavator Blades plays a major role in making of
              the soil .
            </p>
          </div>
        </div>
        <div>
          <img
            className="mx-0 w-full object-cover "
            src="/about/certificate.jpg"
            alt="..."
          />
        </div>
      </div>

      <div className="mt-20 px-12">
        <div>
          <hr />
        </div>
        <div className="flex justify-center">
          <h1 className="font-semibold px-4 -top-5 bg-white relative text-gray-600 text-2xl">
            Testimonials
          </h1>
        </div>
      </div>
      <div className="max-w-7xl  mx-auto px-4 pt-8 pb-12 grid grid-cols-1 md:grid-cols-5 gap-8  md:gap-26">
        <div className="md:col-span-1">
          <div className=" flex align-middle">
            <img className="w-6 h-6" src="/testimonial/feedback.png" alt="" />
            <h1 className="font-bold flex align-middle text-xs text-gray-600 m-1">
              CLIENT FEEDBACK
            </h1>
          </div>
          <div className="  font-bold text-gray-500">
            <h1 className="text-2xl"> Hear From </h1>
            <h1 className="text-3xl"> Clients</h1>
          </div>
        </div>

        {/* First Card */}
        <Link
          to={"/testimonial"}
          className="col-span-4 grid md:grid-cols-2 gap-4"
        >
          {test.map((t) => (
            <div
              key={t.id} // Ensure a unique key for each item
              className="flex bg-white min-h-[200px] rounded-lg shadow-lg border border-gray-300 overflow-hidden"
            >
              {/* Image Section */}
              <img
                className="w-1/2 object-cover"
                src={t.profile}
                alt="User Image"
              />
              {/* Feedback Section */}
              <div className="p-4 flex flex-col justify-center w-2/3">
                <h3 className="text-lg font-bold text-gray-800">
                  {t.reviewer}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{t.product}</p>
                <p className="text-gray-700 text-sm">{t.description}</p>
              </div>
            </div>
          ))}
        </Link>

        {/* Second Card */}
        {/* <div className="flex w-full md:col-span-2 min-h-[210px] bg-white border border-gray-300  rounded-lg shadow-lg overflow-hidden">
        
          <img
            className="w-1/3  object-cover"
            src="/testimonial/t2.jpg"
            alt="User Image"
          />
        
          <div className="p-4 flex flex-col justify-center w-2/3">
            <h3 className="text-lg font-bold text-gray-800">Jane Smith</h3>
            <p className="text-sm text-gray-600 mb-2">Farmer</p>
            <p className="text-gray-700 text-sm">
              "The rotary tiller blades from Bharat Agro Tech are unmatched.
              They cut through tough soil with ease. Excellent service and
              support!"
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
