module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './app/**/*.{js,jsx,ts,tsx,vue}',
    './formkit.theme.ts', // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
  ],
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
