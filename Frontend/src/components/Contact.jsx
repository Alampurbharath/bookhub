import React from "react";

function Contact() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="font-semibold text-2xl mt-12">Contact Us</h1>
      <p className="mt-4">
        Please fill out the form below to get in touch with us.
      </p>
      <form className="mt-6">
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="font-semibold">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-md px-3 py-2 mt-2 outline-none"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="font-semibold">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md px-3 py-2 mt-2 outline-none"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="font-semibold">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="5"
            className="border border-gray-300 rounded-md px-3 py-2 mt-2 outline-none resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
