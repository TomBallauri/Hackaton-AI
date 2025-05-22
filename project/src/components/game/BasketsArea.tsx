import React from 'react';
import { CategoryType } from '../../types';
import Basket from './Basket';
import { categories } from '../../data/itemData';

interface BasketsAreaProps {
  categories: CategoryType[];
}

const BasketsArea: React.FC<BasketsAreaProps> = ({ categories: categoryTypes }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">Baskets</h3>
      
      <div className={`
        grid gap-4
        ${categoryTypes.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : 
          categoryTypes.length <= 4 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}
      `}>
        {categoryTypes.map((categoryType) => (
          <Basket 
            key={categoryType} 
            category={categories[categoryType]} 
          />
        ))}
      </div>
    </div>
  );
};

export default BasketsArea;