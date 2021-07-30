const dev = process.env.NODE_ENV !== 'production';

const server = dev ? 'http://localhost:3000' : 'https://gradientz.vercel.app';

const fetchGradients = async () => {
  const res = await fetch(`${server}/gradients.json`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return res.json();
};

export { fetchGradients };
