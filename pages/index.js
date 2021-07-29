import Head from 'next/head';
import Link from 'next/link';

import { useState } from 'react';

import GradientContainer from '../components/GradientContainer';
import GradientModal from '../components/GradientModal';

export default function Home() {
  const gradients = [
    {
      title: 'Mango Fun',
      description:
        'Go back to the bahamas and eat son mango, dance some bachata and relax.',
      stops: ['#ff7e07', '#ff370c'],
      deg: '180',
      color: 'blue',
    },
    {
      title: 'Lemon Lime',
      description: 'Fresh lemons for your cuba libre',
      stops: ['#ffec3e', '#3fcb6f'],
      deg: '180',
      color: 'blue',
    },
    {
      title: 'Antartic',
      description: 'Cold.',
      stops: ['#a4faff', '#227aab'],
      deg: '180',
      color: 'blue',
    },
    {
      title: 'Passion Fruit',
      description: 'Passion is color red like the passion fruit that is red?',
      stops: ['#f73d24', '#830202'],
      deg: '180',
      color: 'red',
    },
    {
      title: 'Purple Trouble',
      description:
        'If you see this color, you are going to have some trouble...',
      stops: ['#8d46a6', '#b80771'],
      deg: '180',
      color: 'red',
    },
    {
      title: 'Psychedelic Fiesta',
      description: "Don't do drugs, kis. Really.",
      stops: ['#00ffff', '#827aff', '#fa00ff'],
      deg: '180',
      color: 'green',
    },
  ];

  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [relatedGradients, setRelatedGradients] = useState([]);

  const selectRelated = (color, title) => {
    const list = gradients.filter(gradient => {
      if (color === gradient.color && title !== gradient.title) {
        return true;
      }
      return null;
    });
    console.log(list);
    setRelatedGradients(list);
  };

  const handleClearData = () => {
    setModalData({});
  };

  const handleCloseModal = () => {
    setModal(false);
    document.body.style.overflow = 'auto';
  };

  const handleOpenModal = gradient => {
    setModalData({
      title: gradient.title,
      description: gradient.description,
      stops: gradient.stops,
      deg: gradient.deg,
    });
    setModal(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <Head>

<title>Gradientz | Gradients for web apps & websites</title>
<meta name="title" content="Gradientz | Gradients for web apps & websites" />
<meta name="description" content="Beautiful gradients designed and crafted to spark your website's look. Learn how to use them, where, and why you should care about gradients." />


<meta property="og:type" content="website" />
<meta property="og:url" content="https://gradientz.vercel.app/" />
<meta property="og:title" content="Gradientz | Gradients for web apps & websites" />
<meta property="og:description" content="Beautiful gradients designed and crafted to spark your website's look. Learn how to use them, where, and why you should care about gradients." />
<meta property="og:image" content="/cover.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://gradientz.vercel.app/" />
<meta property="twitter:title" content="Gradientz | Gradients for web apps & websites" />
<meta property="twitter:description" content="Beautiful gradients designed and crafted to spark your website's look. Learn how to use them, where, and why you should care about gradients." />
<meta property="twitter:image" content="/cover.png" />
        <link rel='icon' href='/favicon.ico' />
    

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <div className='dark:bg-gray-900 bg-white'>
        <main className='container mx-auto px-4 lg:px-12'>
          <header className='py-6'>
            <h1 className='font-bold text-6xl text-gray-900 dark:text-gray-100 tracking-tight'>
              Gradient<span className='text-primary-800'>z</span>
            </h1>
            <p className='font-light text-lg text-gray-600 dark:text-gray-200 tracking-normal'>
              Beautiful gradients for Tailwind and CSS
            </p>
          </header>
          <section className='py-4 bg-primary-800 text-white flex flex-col items-center  rounded-md space-y-4 shadow-lg'>
            <p className='font-bold text-2xl tracking-tight'>
              Welcome to our beta
            </p>
            <p className='font-light max-w-3xl text-center px-2'>
              Gradientz is not only a gradient database. It aims to teach and
              educate it's users on how to use gradients. If you want to check
              out what others features are we planning on, go to our roadmap
            </p>
            <Link href='/'>
              <a className='block px-6 py-2 border border-white rounded hover:bg-white hover:text-primary-800 font-bold'>
                Roadmap
              </a>
            </Link>
          </section>
          <nav className='flex flex-col lg:flex-row lg:justify-between gap-4 my-12 py-2'>
            <span className='w-full font-light text-gray-600 dark:text-gray-400'>
              Choose a gradient - export it for Tailwind or CSS
            </span>
            <form className='w-full flex justify-end'>
              <input
                type='text'
                name='search'
                id='search'
                placeholder='What color are you looking for?'
                className='w-2/3 font-light text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-4 py-2 rounded-l-md shadow-xl focus:outline-none focus:border focus:border-primary-800'
              />
              <button
                type='submit'
                className='font-bold px-4 py-2 bg-primary-800 text-white tracking-wide rounded-r-md shadow-xl hover:bg-primary-700 transition-all border border-primary-800'>
                Search
              </button>
            </form>
          </nav>
          {/* Main section with the gradients */}
          <section className='space-y-6 lg:space-y-0 lg:grid grid-cols-3 gap-6 pt-6 pb-24'>
            {gradients.map(gradient => (
              <GradientContainer
                gradient={gradient}
                openModal={handleOpenModal}
                relatedGradients={selectRelated}
              />
            ))}
          </section>
        </main>
      </div>

      {modal ? (
        <GradientModal
          modal={modal}
          closeModal={handleCloseModal}
          gradient={modalData}
          clearData={handleClearData}
          relatedGradients={relatedGradients}
          openModal={handleOpenModal}
          selectRelatedGradients={selectRelated}
        />
      ) : null}
    </>
  );
}
