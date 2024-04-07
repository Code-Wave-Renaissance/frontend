const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-text': '#123456', // Define your custom text color
      },
    },
  },
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  darkMode: "media",
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require("@tailwindcss/typography"),
    flowbite.plugin(),
  ],
  daisyui: {
    styled: true,
    // TODO: Theme needs works
    themes: [
      {
        'solana': { 
          fontFamily: {
            display: ['PT Mono, monospace, poppins, roboto'],
            body: ['Inter, sans-serif, roboto, poppins'],
          },
          'primary': '#1d4ed8',           /* Primary color */
          'primary-focus': '#1e3a8a',     /* Primary color - focused */
          'primary-content': '#ffffff',   /* Foreground content color to use on primary color */

          'secondary': '#38bdf8',         /* Secondary color */
          'secondary-focus': '#0e7490',   /* Secondary color - focused */
          'secondary-content': '#ffffff', /* Foreground content color to use on secondary color */

          'accent': '#33a382',            /* Accent color */
          'accent-focus': '#2aa79b',      /* Accent color - focused */
          'accent-content': '#ffffff',    /* Foreground content color to use on accent color */

          'neutral': '#2b2b2b',           /* Neutral color */
          'neutral-focus': '#2a2e37',     /* Neutral color - focused */
          'neutral-content': '#000000',   /* Foreground content color to use on neutral color */

          'base-100': '#e0f2fe',          /* Base color of page, used for blank backgrounds */
          'base-200': '#bae6fd',          /* Base color, a little darker */
          'base-300': '#7dd3fc',          /* Base color, even more darker */
          'base-content': '#f9fafb',      /* Foreground content color to use on base color */

          'info': '#2094f3',              /* Info */
          'success': '#009485',           /* Success */
          'warning': '#ff9900',           /* Warning */
          'error': '#ff5724',             /* Error */
        },
      },
      // backup themes:
      // 'dark',
      // 'synthwave'
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
