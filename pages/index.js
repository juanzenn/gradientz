import Head from 'next/head';
import Link from 'next/link';

function GradientContainer(props) {
  return (
    <article className='rounded-lg overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-800'>
      <header>
        <figure
          className={`w-full h-56`}
          style={{
            background: props.bg,
          }}></figure>
      </header>
      <main className='p-4 flex flex-col'>
        <h2 className='font-bold text-2xl tracking-tight mb-2 dark:text-gray-200'>
          {props.title}
        </h2>
        <button className='w-max text-lg font-light tracking-wide px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600/80 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'>
          Select
        </button>
      </main>
    </article>
  );
}

export default function Home() {
  const gradients = [
    {
      title: 'Mango Fun',
      bg: 'linear-gradient(180deg, #FF7E07 0%, #FF370C 100%)',
    },
    {
      title: 'Lemon Lime',
      bg: 'linear-gradient(180deg, #FFEC3E 0%, #3FCB6F 100%)',
    },
    {
      title: 'Antartic',
      bg: 'linear-gradient(180deg, #A4FAFF 0%, #227AAB 100%)',
    },
    {
      title: 'Passion Fruit',
      bg: 'linear-gradient(180deg, #F73D24 0%, #830202 100%)',
    },
    {
      title: 'Purple Trouble',
      bg: 'linear-gradient(180deg, #8D46A6 0%, #B80771 100%)',
    },
    {
      title: 'Psychedelic Fiesta',
      bg: 'linear-gradient(180deg, #00FFFF 0%, #827AFF 51.56%, #FA00FF 100%)',
    },
  ];

  return (
    <>
      <Head>
        <title>Gradientz</title>
        <meta
          name='description'
          content='Beautiful gradients design and crafted for Tailwind and CSS. Come pick some!'
        />
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
              <GradientContainer title={gradient.title} bg={gradient.bg} />
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
