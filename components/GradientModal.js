import { useState } from 'react';
import { useSpring, animated as a, to } from 'react-spring';
import CodeInstructions from './CodeInstructions';

import { Cross } from 'akar-icons';

export default function GradientModal(props) {
  const {
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

  const gradientString = `linear-gradient(${degree}deg, ${gradient.stops})`;

  return (
    <section
      className={
        'fixed top-0 w-screen h-screen bg-gray-900/50 dark:bg-gray-900/50  backdrop-filter backdrop-blur-sm grid items-center transition-colors duration-300'
      }>
      <a.article
        style={{
          transform: o.to(o => `scale(${o})`),
        }}
        className='overflow-x-hidden mx-auto relative w-full h-full lg:w-10/12 lg:h-5/6 bg-white dark:bg-gray-900 lg:rounded-lg flex flex-col-reverse lg:flex-row shadow-lg transition-colors duration-300'>
        <button
          className='absolute right-6 top-4'
          onClick={() => {
            setDegree(180);
            closeModal();
            setTimeout(() => {
              clearData();
            }, 100);
          }}>
          <Cross
            className='dark:text-white hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300'
            size={20}
          />
        </button>

        <section
          className='w-full h-full'
          style={{
            background: gradientString,
          }}></section>
        <section className='w-full overflow-y-scroll p-4'>
          {/* Start of the section */}
          <header>
            <h2 className='font-bold text-2xl lg:text-4xl text-gray-900 dark:text-gray-100 tracking-tight mb-2 transition-colors duration-300'>
              {gradient.title}
            </h2>
            <p className='font-light text-lg text-gray-600 dark:text-gray-200 tracking-normal mb-4 transition-colors duration-300'>
              {gradient.description}
            </p>
          </header>
          <section className='space-x-4 mb-6'>
            <label className='font-bold text-xl tracking-tight text-gray-900 dark:text-gray-100 transition-colors duration-300'>
              Angle
            </label>
            <input
              type='number'
              value={degree}
              min='0'
              max='360'
              name='angle-text'
              className='font-light px-4 py-2 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border border-gray-300 rounded-md focus:ring focus:outline-none transition-colors duration-300'
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

          <CodeInstructions css={gradientString} />

          <section>
            <h2 className='font-bold text-xl lg:text-2xl text-gray-900 dark:text-gray-100 tracking-tight mb-2 transition-colors duration-300'>
              Related
            </h2>
            <div className='grid grid-cols-3 justify-items-center gap-4'>
              {relatedGradients.length <= 0 ? (
                <p className='font-light text-lg text-gray-600 dark:text-gray-200 tracking-normal mb-4 transition-colors duration-300'>
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
