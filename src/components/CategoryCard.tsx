import React from 'react';

interface CategoryCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="relative group overflow-hidden rounded-sm shadow-md">
      {/* Image Container */}
      <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Text Overlay */}
      <div className="absolute bottom-8 left-10">
        <h3 className="text-white text-5xl font-medium group-hover:underline mb-2">{title}</h3>
        <p className="text-white text-xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
