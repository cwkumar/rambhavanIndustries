import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { SECRET_STRIPE_KEY } from '$env/static/private';
import Stripe from 'stripe';
import type { CartItem } from '$lib/stores';

export const POST = (async ({ request }) => {
	const products: CartItem[] = await request.json();

       const line_items = products.map((product: CartItem) => {
               const finalPrice = product.salePrice === 0 ? product.price : product.salePrice;
               const roundedNumber = Math.round(finalPrice * 100);

               return {
                       price_data: {
                               currency: 'usd',
                               product_data: {
                                       name: product.name,
                                       images: [product.thumbnail]
                               },
                               unit_amount: roundedNumber
                       },
                       quantity: product.quantity
               };
       });

	try {
		const stripe = new Stripe(SECRET_STRIPE_KEY, {
			apiVersion: '2022-11-15'
		});

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			shipping_address_collection: { allowed_countries: ['US', 'CA'] },
			line_items,
			mode: 'payment',
			success_url: `${request.url}?success=true`,
			cancel_url: request.url,
			phone_number_collection: {
				enabled: true
			}
		});

		return json({ stripeSession: session });
	} catch (err) {
		console.log(err);
		return new Response(null);
	}
}) satisfies RequestHandler;
