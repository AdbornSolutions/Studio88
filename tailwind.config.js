export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT: '#F5F2EC', deep: '#ECE7DE' },
        charcoal: { DEFAULT: '#20201E', soft: '#2A2926' },
        ink: '#161614',
        brass: { DEFAULT: '#A8844F', light: '#C9AB7A', deep: '#7E6136' },
        stone: { DEFAULT: '#8A857C', muted: '#5F5A52' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        250: '250ms',
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1200: '1200ms',
      },
    },
  },
};
