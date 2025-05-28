// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      // pick a valid runtime: nodejs16.x or nodejs20.x
      runtime: 'nodejs20.x',
      // you can also set memory, maxDuration, etc.
    })
  }
};

export default config;
