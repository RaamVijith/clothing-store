import React from 'react';
import img1 from '../assets/productzoom/home5-categorie.jpg'
import img2 from '../assets/productzoom/home5-categorie2.jpg'
import img3 from '../assets/productzoom/home5-categorie3.jpg'

import CategoryCard from './CategoryCard';

const categories = [
  {
    imageSrc: img1,
    title: 'Elegance',
    subtitle: 'Accessories',
  },
  {
    imageSrc: img2,
    title: 'Classic',
    subtitle: 'Fashion',
  },
  {
    imageSrc: img3,
    title: 'Trendy',
    subtitle: 'Clothes',
  },
];

const CategorySection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          imageSrc={category.imageSrc}
          title={category.title}
          subtitle={category.subtitle}
        />
      ))}
    </div>
  );
};

export default CategorySection;
