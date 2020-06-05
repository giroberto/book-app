import reactPlugin from 'vite-plugin-react';

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  proxy: {
    '/api': {
      target: 'https://www.goodreads.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
};

module.exports = config;
