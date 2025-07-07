export default defineAppConfig({
  ui: {
    colors: {
      primary: 'teal',
      secondary: 'amber',
      neutral: 'stone',
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      error: 'red',
    },
    // Override button component to use primary color by default
    button: {
      defaultVariants: {
        color: 'primary',
      },
    },
  },
});
