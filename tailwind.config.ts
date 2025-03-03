import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      boxShadow: {
        'nav-item':
          '1px 1px 2px 0px rgba(255, 255, 255, 0.30), -1px -1px 2px 0px rgba(221, 221, 221, 0.50), -1px 1px 2px 0px rgba(221, 221, 221, 0.20) inset, 1px -1px 2px 0px rgba(221, 221, 221, 0.20) inset, -1px -1px 2px 0px rgba(255, 255, 255, 0.90) inset, 1px 1px 3px 0px rgba(221, 221, 221, 0.90) inset'
      },
      fontFamily: {
        // 'yu-mincho': ['Roboto', 'serif'],
        // noto: ['Noto Sans JP', 'serif'],
        // inter: ['Inter', 'serif']
      },
      colors: {
        background: 'var(--background)',
        'background-default': 'var(--color-background-default)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        black: 'var(--text-black)'
      }
    }
  },
  plugins: []
} satisfies Config;
