import type { PageLoad } from './$types';
import { showcase } from '$lib/data';
import { error } from '@sveltejs/kit';

export const load = (({ params }) => {
    const product = showcase.find((p) => p.slug === params.slug);
    if (!product) {
        throw error(404, { message: 'Couldnt load this page' });
    }
    return {
        ...product,
        images: [product.imageUrl, product.hoverImage].filter(Boolean),
        details: '',
        related_products: [],
        expand: { related_products: [] }
    };
}) satisfies PageLoad;
