import React from 'react';
import { CategoryType } from '../../types';
import Basket from './Basket';
import { categories } from '../../data/itemData';

interface BasketsAreaProps {
  categories: CategoryType[];
}

const BasketsArea: React.FC<BasketsAreaProps> = ({ categories: categoryTypes }) => {
  return (
    <div className="flex flex-row gap-8 justify-center items-end w-full">
      {categoryTypes.map((categoryType) => (
        <Basket 
          key={categoryType} 
          category={categories[categoryType]} 
        />
      ))}
    </div>
  );
};

export default BasketsArea;