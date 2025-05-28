import type { PageServerLoad } from './$types';
import { products, carouselItems, showcase } from '$lib/data';

export const load = (async () => {
  // Ensure both products and carousel items are sent
  return { products, carouselItems, showcase };
}) satisfies PageServerLoad;
