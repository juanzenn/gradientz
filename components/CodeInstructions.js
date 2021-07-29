import { useState } from 'react';

export default function CodeInstructions({ css }) {
  const [selected, setSelected] = useState('css');

  let someNode;

  let tailwindConfig = `theme: {
    extend: {
      backgroundImage: theme => ({
      'custom-gradient': "background-image: ${css}",         
      })
    }
  }`;

  switch (selected) {
    case 'css':
      someNode = (
        <p class='block max-h-72 text-lg overflow-y-scroll font-light tracking-wide rounded-b-md overflow-hidden py-4 px-4 text-gray-800'>
          Copy the next snippet on the CSS selector you want to apply the
          gradient:
          <pre className='text-sm block max-w-xl overflow-x-scroll p-2 my-4 bg-gray-800 dark:bg-gray-600 text-white rounded-md shadow '>
            <code>background: {css}</code>
          </pre>
        </p>
      );
      break;
    case 'tailwind':
      someNode = (
        <p class='block max-h-72 text-lg overflow-y-scroll font-light tracking-wide rounded-b-md overflow-hidden py-4 px-4 text-gray-800'>
          Open your{' '}
          <span className='text-purple-800 font-mono'>tailwind.config.js</span>{' '}
          file and copy the next snippet:
          <pre className='text-sm block max-w-xl overflow-x-scroll p-2 my-4 bg-gray-800 dark:bg-gray-600 text-white rounded-md shadow '>
            <code className='class-json'>{tailwindConfig}</code>
          </pre>
          This will create a class{' '}
          <span className='text-purple-800 font-mono'>
            `bg-custom-gradient`
          </span>{' '}
          that you can apply on your elements. For more info, refer to{' '}
          <a
            className='underline text-gray-800 hover:text-purple-800 transition-none'
            href='https://tailwindcss.com/docs/background-image'>
            the Tailwind official docs.
          </a>
        </p>
      );
      break;
    case 'default':
      break;
  }

  return (
    <section className='hidden lg:block my-6'>
      <article className='flex flex-col shadow-2xl'>
        <div className='bg-gray-100 rounded-t-md overflow-hidden'>
          <ul className='flex'>
            <li
              className={
                selected == 'css'
                  ? 'tracking-wide cursor-pointer w-full text-center p-4 bg-gray-400 text-white'
                  : 'tracking-wide cursor-pointer w-full text-center p-4 hover:bg-gray-300'
              }
              onClick={() => setSelected('css')}>
              CSS
            </li>
            <li
              className={
                selected == 'tailwind'
                  ? 'tracking-wide cursor-pointer w-full text-center p-4 bg-gray-400 text-white'
                  : 'tracking-wide cursor-pointer w-full text-center p-4 hover:bg-gray-300'
              }
              onClick={() => setSelected('tailwind')}>
              Tailwind
            </li>
          </ul>
        </div>

        <div className='max-h-full'>{someNode}</div>
      </article>
    </section>
  );
}
