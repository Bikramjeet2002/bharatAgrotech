import React from "react";
import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="mb-8 md:mb-0">
            <Link to={'/'}>
              <img
                alt="Your Company"
                src="/logo/Batlogo.png"
                className="size-20 px-1"
              />
            </Link>
            <h2 className="text-2xl font-bold mb-4">Bharat Agro Tech</h2>
            <p className="text-gray-400">
              We are dedicated to providing the best service to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-300 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonial"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Peer Gajju Shah Road </p>
            <p className="text-gray-400">Mandi Gobindgarh Punjab ,</p>
            <p className="text-gray-400">147301</p>
            <a
              href="mailto: bhaaratagrotech@gmail.com"
              className="text-gray-400 hover:underline"
            >
              Email: bhaaratagrotech@gmail.com
            </a>
            <br />
            <Link to="tel:9814551819" className="text-gray-400">
              Phone: 9814551819 , 
            </Link>
            <Link to="tel:9888503966" className="text-gray-400 ml-1">
                9888503966
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                to="https://www.facebook.com/bhaaratagrotech"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                to="https://wa.me/9814551819"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <WhatsApp className="w-6 h-6" />
              </Link>
              {/* <Link
                to="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link> */}
          
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Bharat Agro Tech. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
