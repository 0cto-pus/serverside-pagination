import app from './app';

const start = () => {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
};

start();
