export default function GradientContainer(props) {
  const { gradient, openModal, relatedGradients } = props;

  return (
    <article className='rounded-lg overflow-hidden shadow-lg bg-gray-50 dark:bg-gray-800 transition-colors duration-300'>
      <header>
        <figure
          className={`w-full h-56 cursor-pointer hover:brightness-105`}
          style={{
            background: `linear-gradient(${gradient.deg}deg, ${gradient.stops})`,
          }}
          onClick={() => {
            relatedGradients(gradient.color, gradient.title);
            openModal(gradient);
          }}></figure>
      </header>
      <main className='p-4 flex flex-col'>
        <h2 className='font-bold text-2xl tracking-tight mb-2 dark:text-gray-200 transition-colors duration-300'>
          {gradient.title}
        </h2>
        <button
          onClick={() => {
            openModal(gradient);
          }}
          className='w-max text-lg font-light tracking-wide px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600/80 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300'>
          Select
        </button>
      </main>
    </article>
  );
}
