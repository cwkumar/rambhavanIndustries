import type { PageLoad } from './$types';
import { showcase } from '$lib/data';

export const load = (() => {
    return { items: showcase };
}) satisfies PageLoad;
