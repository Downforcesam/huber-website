export default defineAppConfig({
  ui: {
    // Color aliases that map to Tailwind colors
    colors: {
      primary: 'teal', // Maps to our custom teal scale
      secondary: 'amber', // Maps to our custom amber scale
      neutral: 'stone', // For backgrounds and text
      success: 'emerald', // For success states
      info: 'sky', // For info states
      warning: 'amber', // For warning states
      error: 'red', // For error states
    },
  },
});
