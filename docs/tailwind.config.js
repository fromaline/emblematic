/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100svh',
    }),
    minHeight: theme => ({
      0: '0',
      ...theme('spacing'),
      full: '100%',
      screen: '100svh',
    }),
    extend: {
      fontFamily: {
        sans: 'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
  },
}
