export default defineAppConfig({
  ui: {
    primary: 'teal',
    gray: 'neutral',
    formGroup: {
      help: 'text-xs mt-1 text-gray-500 dark:text-gray-400',
      error: 'text-xs mt-1 text-red-500 dark:text-red-400',
      label: {
        base: 'text-sm block font-medium text-gray-500 dark:text-gray-200',
      },
    },
    button: {
      rounded:
        'rounded-md transition-transform active:scale-x-[0.98] active:scale-y-[0.99]',
    },
    modal: {
      overlay: {
        background: 'bg-[rgba(0,8,47,.275)] saturate-50',
      },
      padding: 'p-0',
      rounded: 'rounded-t-2xl sm:rounded-xl',
      transition: {
        enterFrom: 'opacity-0 translate-y-full sm:translate-y-0 sm:scale-x-95',
        leaveFrom: 'opacity-100 translate-y-0 sm:scale-x-100',
      },
    },
    container: {
      constrained: 'max-w-2xl',
    },
    horizontalNavigation: {
      wrapper: 'relative w-full flex items-center justify-between',
      container: 'flex items-center min-w-0',
      inner: 'min-w-0',
      base: 'group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75',
      before:
        'before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50',
      after:
        'after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2',
      active:
        'text-gray-900 dark:text-white after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full',
      inactive:
        'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white',
      label: 'truncate relative',
      icon: {
        base: 'flex-shrink-0 w-5 h-5 relative',
        active: 'text-gray-700 dark:text-gray-200',
        inactive:
          'text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200',
      },
      avatar: {
        base: 'flex-shrink-0',
        size: '2xs',
      },
      badge: {
        base: 'flex-shrink-0 ml-auto relative rounded',
        color: 'gray',
        variant: 'solid',
        size: 'xs',
      },
    },
  },
});
