import React, { useState, useEffect } from "react";
import img from '../assets/productzoom/h5-img3.jpg';

interface Testimonial {
  id: number;
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Cursus in hac habitasse platea dictumst. Eu augue ut lectus arcu bibendum at. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis.",
    author: "Gwynn Cadogan",
  },
  {
    id: 2,
    text: "Purus semper eget duis at tellus. Commodo odio aenean sed adipiscing diam donec adipiscing.",
    author: "Morgan Hart",
  },
  {
    id: 3,
    text: "Quam vulputate dignissim suspendis. At in tellus integer feugiat scelerisque varius morbi enim nunc.",
    author: "Sophia Bennett",
  },
];

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);


  return (
    <div
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white mb-[20vh]"
      style={{
        backgroundImage: `url(${img})`,      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center px-6">
        <p className="text-sm uppercase tracking-wide text-gray-300">Gold Collection</p>
        <h2 className="text-3xl sm:text-5xl font-normal mb-20">Testimonials</h2>
        <p className="text-lg italic mb-4">{testimonials[current].text}</p>
        <p className="font-light text-2xl">{testimonials[current].author}</p>
        
        <div className="flex justify-center space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
