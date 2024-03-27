import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    const lowerCaseNewCategory = newCategory.toLowerCase(); // Convertir a minúsculas
    // Convertir las categorías existentes a minúsculas para comparación
    const lowerCaseCategories = categories.map(category => category.toLowerCase());
    if (lowerCaseCategories.includes(lowerCaseNewCategory)) return; // No agregar si ya existe
    setCategories([newCategory, ...categories]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

        {categories.map(( category ) => (
              <GifGrid 
              key={ category } 
              category={ category }
              />
          ))
        }
    </div>
  );
};
