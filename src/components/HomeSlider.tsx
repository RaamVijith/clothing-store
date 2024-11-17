import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideData {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  index: number;
  total: number;
}

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideData[] = [
    {
      image: 'https://cdn.shopify.com/s/files/1/0163/1548/2212/files/how-to-make-a-mask-look-chic-on-nye-the-low-updo_600x600.jpg?v=1609357762', // Replace with your image path
      subtitle: 'NEW LOOK BOOK',
      title: 'Shop now',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit. Proin gravida nibh vel velit auctor aliquet.',
      index: 1,
      total: 3
    },
    {
      image: 'https://www.ccvmode.com/blog/wp-content/uploads/2022/10/comment-accessoiriser-sa-tenue.png', // Replace with your image path
      subtitle: 'UNIQUE DESIGNS',
      title: 'Accessories',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit. Proin gravida nibh vel velit auctor aliquet.',
      index: 2,
      total: 3
    },
    {
      image: 'https://www.instyle.com/thmb/mBCPAq2-Xjj2aPdIkv36nQd0-6Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/052623-style-tips-lead-051015daa6224e0b834cf55b2082f158.jpg', // Replace with your image path
      subtitle: 'FALL COLLECTION',
      title: 'New look',
      description: 'Lorem ipsum dolor sit amet, adipiscing elit. Proin gravida nibh vel velit auctor aliquet.',
      index: 3,
      total: 3
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden mb-10">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="min-w-full h-full relative bg-[#f5f5f5]"
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg ">    
                  <p className="text-xl tracking-widest uppercase mb-2">{slide.subtitle}</p>
                  <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal mb-4">{slide.title}</h2>
                  <p className="text-lg sm:text-2xl text-gray-700 font-light pb-6">{slide.description}</p>
                  <button className="bg-black text-white px-12 py-4 uppercase text-xl tracking-wider hover:bg-gray-900 transition-colors">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
            
            {/* Slide Counter */}
            <div className="absolute bottom-8 right-8 text-sm">
              {slide.index} / {slide.total}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:bg-black/5 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-black/5 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default HomeSlider;