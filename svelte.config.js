// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      // use Edge Functions for SSR
      runtime: 'edge'
    }),

    // ...any other SvelteKit config
  }
};

export default config;
