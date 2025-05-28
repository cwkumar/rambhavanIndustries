<script lang="ts">
  import type { Product, CarouselItem, ShowSection } from '$lib/data';
  import Carousel from '$lib/components/Carousel.svelte';
  import ProductItem from '$lib/components/ProductItem.svelte';
  export let data: {
    products: Product[];
    carouselItems: CarouselItem[];
    showcase: ShowSection[];
  };
  console.log(data);
</script>

<svelte:head>
  <title>Rambhavan Industries</title>
</svelte:head>

<!-- Carousel Section -->
<section>
  <Carousel items={data.carouselItems} />
</section>

<!-- Product Grid -->
<div class="mx-3 md:mx-10">
	<section class="text-gray-800 text-center lg:text-left lg:px-32 lg:py-5">
		<div class="grid lg:grid-cols-2 gap-6 xl:gap-12 justify-center items-center">
			<div class="mb-3 lg:mb-0">
				<h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">About Us</h1>
			</div>
			<div class="mb-6 lg:mb-0 flex flex-col justify-center">
				<p class="text-gray-500 text-lg">
					Ram Bhavan Industry is involved in linking the abundant skilled workers of North Bihar
          to attractive domestic and international markets by providing the oppurtunities to
          manufacture high quality products at scale and high efficiency. It is confident
          to serve its market  and stakeholder in a professional and effective manner.
				</p>
			</div>
		</div>
	</section>

  <h2 class="text-center font-extrabold text-6xl pt-20 pb-12 uppercase">Best Seller</h2>
    <div class="grid gap-12 grid-cols-2 lg:grid-cols-4">
        {#each data.showcase as section}
            <ProductItem
              title={section.name}
              image={section.imageUrl}
              hoverImage={section.hoverImage}
              price={section.price}
              salePrice={section.sale_price}
              link={`/sections/${section.slug}`}
            />
            {/each}
    </div>
</div>
<br /><br />
