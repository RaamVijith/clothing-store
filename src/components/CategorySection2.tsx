import React from 'react';
import img1 from '../assets/productzoom/home5-categorie4-800x677.jpg'
import img2 from '../assets/productzoom/home5-categorie5-800x677.jpg'
import CategoryCard2 from './CategoryCard2';

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
];

const CategorySection2: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
      {categories.map((category, index) => (
        <CategoryCard2
          key={index}
          imageSrc={category.imageSrc}
          title={category.title}
          subtitle={category.subtitle}
        />
      ))}
    </div>
  );
};

export default CategorySection2;
