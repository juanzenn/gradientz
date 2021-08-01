import React, { useState } from 'react';
import SearchBar from './SearchBar';

export default function SecondaryNavigation({ gradients, setGradients }) {
  const [searchInput, setSearchInput] = useState('');

  const handleInputSearch = event => {
    setSearchInput(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    const filterValue = searchInput.toLowerCase();
    if (filterValue === '') {
      setGradients(gradients);
      return;
    }
    const filteredArray = gradients.filter(gradient => {
      if (gradient.color.indexOf(filterValue) >= 0) {
        return true;
      }
      return null;
    });
    setGradients(filteredArray);
  };

  return (
    <nav className='flex flex-col lg:flex-row lg:justify-between gap-4 my-12 py-2'>
      <span className='w-full font-light text-gray-600 dark:text-gray-400 transition-colors duration-300'>
        Choose a gradient - export it for Tailwind or CSS
      </span>

      <SearchBar handleChange={handleInputSearch} handleSubmit={handleSearch} />
    </nav>
  );
}
