/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Fíjate que el nombre ha cambiado, ahora lleva arroba
    '@tailwindcss/postcss': {},
  },
};

export default config;