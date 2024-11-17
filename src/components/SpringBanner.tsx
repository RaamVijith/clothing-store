import img from '../assets/productzoom/h5-img7-scaled.jpg';

const SpringBanner = () => {
  return (
    <div className="relative w-full h-[35vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={img} // Make sure to place your image in the public/images folder
          alt="Purple leather accessories from spring collection"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Text Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <p className="text-sm md:text-base lg:text-lg tracking-widest uppercase mb-4">
          SPRING COLLECTION
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide max-w-3xl">
          50% off spring favorites
        </h1>
      </div>
    </div>
  );
};

export default SpringBanner;