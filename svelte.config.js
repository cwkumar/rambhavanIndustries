import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
  // … your existing preprocess / kit config …
  kit: {
    adapter: adapter({
      // force Node 18
      runtime: 'nodejs18.x'
    }),
    // … any other kit config …
  },

  preprocess: vitePreprocess()
};

export default config;
