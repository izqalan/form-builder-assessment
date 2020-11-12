module.exports = {
  eslint: {
    enable: false,
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
      ],
    },
  },
};
