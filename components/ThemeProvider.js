import React, { useState } from 'react';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme}>
      {children}

      <button
        className='fixed bottom-3 right-3 bg-primary-600 text-white p-4'
        onClick={() =>
          theme == `light` ? setTheme(`dark`) : setTheme(`light`)
        }>
        Change Theme
      </button>
    </div>
  );
}
