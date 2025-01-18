import React from "react";
import { useForm } from "react-hook-form";
import { apiClient } from "../../utils/apiClient";
import { apiRoutes } from "../../utils/apiRoutes";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await apiClient.post(`${apiRoutes.createContact}`, data);

      if (response?.data?.success) {
        reset()
        alert(response?.data?.message);

      }
    } catch (error) {
      alert("something went wrong");
    }
  };

  return (
    <div className="md:py-3 p-2 md:px-10">
      <div className="flex justify-between flex-wrap md:p-8 p-3 mx-auto bg-gray-100 shadow-lg rounded-lg my-5">
        {/* Left Column: Contact Information */}
        <div className="w-full md:w-1/2 md:mb-0 mb-10">
          <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
          <p className="mb-6 text-gray-600 max-w-lg">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci
            molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
            sed malesuada et magna.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700 text-sm">
              <strong className="block">Address</strong>{" "}
              <p className="text-gray-700">Peer Gajju Shah Road </p>
              <p className="text-gray-700">Mandi Gobindgarh Punjab ,</p>
              <p className="text-gray-700">147301</p>
            </p>

            <p className="text-gray-700 text-sm">
              <strong className="block">Email</strong>{" "}
              <a
                href="mailto: bhaaratagrotech@gmail.com"
                className="text-gray-700 hover:underline"
              >
                bhaaratagrotech@gmail.com
              </a>
            </p>
            <p className="text-gray-700 text-sm">
              <strong className="block">Phone</strong>{" "}
              <a
                href="tel:+919815451819"
                className="text-sm  hover:underline mr-2 md:mr-4"
              >
                9814551819
              </a>
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:w-1/2 w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white w-full p-6 rounded-lg shadow-md space-y-6"
          >
            <div className="flex gap-4">
              {/* First Name */}
              <div className="w-full">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  {...register("first_name", {
                    required: "First Name is required",
                  })}
                  className="mt-1 block w-full py-2 outline-none bg-gray-100 px-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.first_name && (
                  <span className="text-red-500 text-sm">
                    {errors.first_name.message}
                  </span>
                )}
              </div>

              {/* Last Name */}
              <div className="w-full">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  {...register("last_name", {
                    required: "Last Name is required",
                  })}
                  className="mt-1 block w-full py-2 outline-none bg-gray-100 px-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.last_name && (
                  <span className="text-red-500 text-sm">
                    {errors.last_name.message}
                  </span>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="mt-1 block w-full py-2 outline-none bg-gray-100 px-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Phone
            <div>
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone_number"
                {...register("phone_number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
                className="mt-1 block w-full py-2 outline-none bg-gray-100 px-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.phone_number && (
                <span className="text-red-500 text-sm">
                  {errors.phone_number.message}
                </span>
              )}
            </div> */}

            <div className="flex gap-4">
               {/* Phone */}
            <div className="w-full">
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone_number"
                {...register("phone_number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
                className="mt-1  w-full py-2 outline-none bg-gray-100 px-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.phone_number && (
                <span className="text-red-500 text-sm">
                  {errors.phone_number.message}
                </span>
              )}
            </div>

              {/* Last Name */}
              <div className="w-full">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject", {
                    required: "subject is required",
                  })}
                  className="mt-1 block w-full py-2 outline-none bg-gray-100 px-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm">
                    {errors.subject.message}
                  </span>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="mt-1 block w-full py-2 outline-none bg-gray-100 px-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gray-600 text-white font-medium rounded-md shadow-sm hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.591763163374!2d76.2601021!3d30.673622200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391011f0840cf6eb%3A0xd500de31aee1131c!2sBharat%20Agro%20Tech!5e0!3m2!1sen!2sin!4v1736757553307!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, margin: "0 auto", borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
