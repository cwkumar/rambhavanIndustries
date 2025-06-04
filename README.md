# SwiftMarket

E-Commerce solution built with SvelteKit and Stripe for payments, providing better performance and faster development time.

You can try a demo at https://swiftmarket.vercel.app/

## Getting Started

### Clone the repo

```bash
git clone https://github.com/SwiftMarket/swiftmarket-sveltekit.git
cd swiftmarket-sveltekit
```

### Setting up SvelteKit
Install dependencies

```bash
pnpm install
```

Create .env file

```bash
cp .env.example .env
```

Set the `PUBLIC_STRIPE_KEY` and `SECRET_STRIPE_KEY` variables with the values from your Stripe dashboard.

### Developing

Start the SvelteKit project with:

```bash
pnpm run dev
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Next steps

For more information, please visit our documentation.
