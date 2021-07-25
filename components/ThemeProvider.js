import React, { useState, useEffect } from 'react';

import { Sun, Moon } from 'akar-icons';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(``);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme) {
      setTheme(localStorageTheme);
    } else {
      localStorage.setItem('theme', `light`);
      setTheme(`light`);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div id='theme-wrapper' className={`${theme} theme-changer`}>
      {children}

      <button
        className='fixed bottom-4 right-2 lg:right-12 backdrop-filter backdrop-blur bg-gray-200/50 dark:bg-gray-800/50 text-black dark:text-white p-4 rounded-full shadow-2xl hover:brightness-105'
        onClick={() => {
          theme == `light` ? setTheme(`dark`) : setTheme(`light`);
        }}>
        {theme == `light` ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
}
