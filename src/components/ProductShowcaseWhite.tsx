import React from 'react';

const ProductShowcaseWhite: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-[10%] pt-0 pl-[15%]">
      {/* Left Side Images */}
      <div className="w-full md:w-1/2 text-left space-y-4">
        <h5 className="text-lg font-semibold uppercase text-gray-500">match colors</h5>
        <h2 className="text-5xl font-medium"> White wrap dress </h2>
        <p className="text-gray-800 text-xl font-light">
        At imperdiet dui accumsan sit amet nulla. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Lorem ipsum dolor sit amet, consect.
        </p>
        <button className="px-14 py-4 mt-16 bg-black text-white text-xl font-medium hover:bg-gray-800 transition">
          VIEW MORE
        </button>
      </div>


      {/* Right Side Text Content */}
     
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        {/* Main Image */}
        <div className="animate-shake-up-down">
          <img
            src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/h5-img4-637x850.jpg" // Replace with your actual image path
            alt="Main Dress"
            className="h-[110%] rounded-sm shadow-lg object-cover"
          />
        </div>
        {/* Floating Image */}
        <div className="absolute top-[30%] -right-28 w-3/5 animate-shake-up-down">
          <img
            src="https://esmee.qodeinteractive.com/wp-content/uploads/2021/07/h5-img5-415x415.jpg" // Replace with your actual image path
            alt="Floating Skirt"
            className="w-full h-auto rounded-sm shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcaseWhite;
