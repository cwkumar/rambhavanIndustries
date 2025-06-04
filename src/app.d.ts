
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
               interface Locals {
                       // add custom locals if needed in the future
               }
		// interface PageData {}
		// interface Platform {}
	}

	declare module 'svelte-carousel';
}

export {};
