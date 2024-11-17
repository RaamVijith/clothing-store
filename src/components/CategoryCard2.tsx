import React from 'react';

interface CategoryCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

const CategoryCard2: React.FC<CategoryCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="relative group overflow-hidden rounded-sm shadow-md">
      {/* Image Container */}
      <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
        <img src={imageSrc} alt={title} className="w-full h-[90vh] object-cover" />
      </div>
      {/* Text Overlay */}
      <div className="absolute bottom-[40%] left-[30%]">
        <h3 className="text-white text-7xl font-medium group-hover:underline mb-2">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard2;
