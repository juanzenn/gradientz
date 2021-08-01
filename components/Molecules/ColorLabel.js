import React from 'react';

export default function ColorLabel({ color }) {
  function capitalize(str) {
    return str.split('')[0].toUpperCase() + str.slice(1);
  }

  return (
    <span
      className={`cursor-default inline-block py-1 px-3 mr-2 my-2 rounded-full text-sm tracking-wide bg-gray-300 text-gray-700 dark:bg-gray-500 dark:text-gray-900 transition-colors duration-300`}>
      {capitalize(color)}
    </span>
  );
}
