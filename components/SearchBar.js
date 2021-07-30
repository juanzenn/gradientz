import React from 'react';

export default function SearchBar({ handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className='w-full flex justify-end'>
      <input
        onChange={handleChange}
        type='text'
        name='search'
        id='search'
        placeholder='What color are you looking for?'
        className='w-2/3 font-light text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4 py-2 rounded-l-md shadow-xl focus:outline-none focus:border focus:border-primary-800 transition-colors duration-300'
      />
      <button
        type='submit'
        className='font-bold px-4 py-2 bg-primary-800 text-white tracking-wide rounded-r-md shadow-xl hover:bg-primary-700 transition-all border border-primary-800'>
        Search
      </button>
    </form>
  );
}
