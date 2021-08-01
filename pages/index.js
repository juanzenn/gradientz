import path from 'path';
import { promises as fs } from 'fs';

import Head from 'next/head';
import Link from 'next/link';

import { useState } from 'react';

import GradientContainer from '../components/GradientContainer';
import GradientModal from '../components/GradientModal';

import SecondaryNavigation from '../components/SecondaryNavigation/SecondaryNavigation';

export async function getStaticProps(context) {
  const publicDir = path.join(process.cwd(), 'public');
  const filePath = path.join(publicDir, 'gradients.json');

  const gradients = await fs.readFile(filePath, 'utf8');
  const gradientsData = JSON.parse(gradients);

  return {
    props: { gradientsData },
  };
}
export default function Home({ gradientsData }) {
  const [gradients, setGradients] = useState(gradientsData);

  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [relatedGradients, setRelatedGradients] = useState([]);

  const selectRelated = (color, title) => {
    const relatedList = [];

    color.forEach(color => {
      gradients.map(gradient => {
        if (gradient.title !== title && gradient.color.indexOf(color) >= 0) {
          relatedList.push(gradient);
        }
      });
    });

    setRelatedGradients(relatedList);
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
        <meta
          name='title'
          content='Gradientz | Gradients for web apps & websites'
        />
        <meta
          name='description'
          content="Beautiful gradients designed and crafted to spark your website's look. Learn how to use them, where, and why you should care about gradients."
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://gradientz.vercel.app/' />
        <meta
          property='og:title'
          content='Gradientz | Gradients for web apps & websites'
        />
        <meta
          property='og:description'
          content="Beautiful gradients designed and crafted to spark your website's look. Learn how to use them, where, and why you should care about gradients."
        />
        <meta property='og:image' content='/cover.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://gradientz.vercel.app/' />
        <meta
          property='twitter:title'
          content='Gradientz | Gradients for web apps & websites'
        />
        <meta
          property='twitter:description'
          content="Beautiful gradients designed and crafted to spark your website's look. Learn how to use them, where, and why you should care about gradients."
        />
        <meta property='twitter:image' content='/cover.png' />
        <link rel='icon' href='/favicon.ico' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <div className='dark:bg-gray-900 bg-white transition-colors duration-300'>
        <main className='container mx-auto px-4 lg:px-12'>
          <header className='py-6'>
            <h1 className='font-bold text-6xl text-gray-900 dark:text-gray-100 tracking-tight transition-colors duration-300'>
              Gradient<span className='text-primary-800'>z</span>
            </h1>
            <p className='font-light text-lg text-gray-600 dark:text-gray-200 tracking-normal transition-colors duration-300'>
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

          <SecondaryNavigation
            setGradients={setGradients}
            gradients={gradientsData}
          />

          {/* Main section with the gradients */}
          {gradients.length === 0 ? (
            <div
              style={{ minHeight: '50vh' }}
              className='w-full text-3xl font-light text-gray-800 dark:text-gray-200 transition-colors duration-300'>
              Theres is no gradients with that color...
            </div>
          ) : (
            <section className='space-y-6 lg:space-y-0 lg:grid grid-cols-3 gap-6 pt-6 pb-24'>
              {gradients.map((gradient, index) => (
                <GradientContainer
                  key={`gradient-${index}`}
                  gradient={gradient}
                  openModal={handleOpenModal}
                  relatedGradients={selectRelated}
                />
              ))}
            </section>
          )}
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
