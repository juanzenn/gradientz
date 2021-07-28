import { useState } from 'react';
import { useSpring, animated as a, to } from 'react-spring';

import { Cross } from 'akar-icons';

export default function GradientModal(props) {
  const {
    modal,
    closeModal,
    gradient,
    clearData,
    relatedGradients,
    openModal,
    selectRelatedGradients,
  } = props;

  const { o } = useSpring({
    from: { o: 0.9 },
    o: 1,
  });

  const [degree, setDegree] = useState(180);

  const handleDegreeChange = event => {
    setDegree(event.target.value);
  };

  const gradiantString = `linear-gradient(${degree}deg, ${gradient.stops})`;

  return (
    <section
      className={
        'fixed top-0 w-screen h-screen bg-gray-900/50 dark:bg-gray-900/50  backdrop-filter backdrop-blur-sm grid items-center'
      }>
      <a.article
        style={{
          transform: o.to(o => `scale(${o})`),
        }}
        className='relative w-full h-full lg:w-10/12 lg:h-5/6 h- mx-auto bg-white dark:bg-gray-900 lg:rounded-lg flex flex-col-reverse lg:flex-row overflow-hidden shadow-lg'>
        <button
          className='absolute right-4 top-4'
          onClick={() => {
            setDegree(180);
            closeModal();
            setTimeout(() => {
              clearData();
            }, 100);
          }}>
          <Cross
            className='dark:text-white hover:text-gray-800 dark:hover:text-gray-200'
            size={20}
          />
        </button>
        <section
          className='w-full h-full'
          style={{
            background: gradiantString,
          }}></section>
        <section className='w-full h-full p-4'>
          {/* Start of the section */}
          <header>
            <h2 className='font-bold text-2xl lg:text-4xl text-gray-900 dark:text-gray-100 tracking-tight mb-2'>
              {gradient.title}
            </h2>
            <p className='font-light text-lg text-gray-600 dark:text-gray-200 tracking-normal mb-4'>
              {gradient.description}
            </p>
          </header>
          <section className='space-x-4 mb-6'>
            <label className='font-bold text-xl tracking-tight text-gray-900 dark:text-gray-100'>
              Angle -{' '}
            </label>
            <input
              type='number'
              value={degree}
              min='0'
              max='360'
              name='angle-text'
              className='font-light px-4 py-2 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border border-gray-300 rounded-md focus:ring focus:outline-none'
              onChange={handleDegreeChange}
            />
            <input
              type='range'
              value={degree}
              onChange={handleDegreeChange}
              name='angle-range'
              min='0'
              max='360'
            />
          </section>

          <section className='hidden lg:block mb-4'>
            <h3 className='font-bold text-sm tracking-wider mb-2 dark:text-gray-200'>
              Pick your code -{' '}
            </h3>
            <article className='flex flex-col shadow-2xl'>
              <div className='bg-gray-100 rounded-t-md overflow-hidden'>
                <ul className='flex'>
                  <li className='cursor-pointer w-full text-center p-4 hover:bg-gray-300'>
                    CSS
                  </li>
                  <li className='cursor-pointer w-full text-center p-4 hover:bg-gray-300'>
                    Tailwind
                  </li>
                </ul>
              </div>

              <div>
                <p class='bg-gray-800 dark:bg-gray-600 text-white p-4 rounded-b-md'>
                  background-image: {gradiantString}
                </p>
                <pre className='hidden'></pre>
              </div>
            </article>
          </section>

          <section>
            <h2 className='font-bold text-xl lg:text-2xl text-gray-900 dark:text-gray-100 tracking-tight mb-2'>
              Related
            </h2>
            <div className='grid grid-cols-3 justify-items-center gap-4'>
              {relatedGradients.length <= 0 ? (
                <p className='font-light text-lg text-gray-600 dark:text-gray-200 tracking-normal mb-4'>
                  No related gradients
                </p>
              ) : (
                relatedGradients.map((gradient, index) => (
                  <figure
                    key={`gradient-${index}`}
                    style={{
                      background: `linear-gradient(180deg, ${gradient.stops})`,
                    }}
                    className='h-24 w-full rounded-md cursor-pointer hover:brightness-110'
                    onClick={() => {
                      selectRelatedGradients(gradient.color, gradient.title);
                      openModal(gradient);
                    }}></figure>
                ))
              )}
            </div>
          </section>
        </section>
      </a.article>
    </section>
  );
}
