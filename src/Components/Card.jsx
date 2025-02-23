import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <Link href="recepie/1" >
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Nature scene"
          />
          <div className="absolute bottom-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
            Location
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-gray-600 mb-4">
            Fusce orci purus, efficitur vel eros eu, cursus pretium urna.
            Integer efficitur lorem vitae augue auctor aliquam. Aliquam erat
            volutpat. Aliquam mollis ac mi sit amet fringilla.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-800">$299</span>
            <a
              href="#"
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
