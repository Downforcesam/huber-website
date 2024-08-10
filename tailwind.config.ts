module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './app/**/*.{js,jsx,ts,tsx,vue}',
  ],
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
