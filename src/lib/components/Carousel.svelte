<script lang="ts">
  import Carousel from 'svelte-carousel';
  import CarouselDot from '$lib/components/CarouselDot.svelte';
  import { browser } from '$app/environment';
  import type { CarouselItem } from '$lib/data';

  export let items: CarouselItem[] = [];

  let carousel: any; // reference to Carousel instance
  console.log('Carousel items:', items);
</script>

<div class="w-full aspect-[1.9/3] md:aspect-[16/7.7]">
  {#if browser}
    <Carousel
      items={items}
      let:loaded
      let:currentPageIndex
      let:pagesCount
      let:showPage
      bind:this={carousel}
      autoplay
      autoplayDuration={5000}
      autoplayProgressVisible
      arrows={false}
    >
      <!-- Custom dots -->
      <div slot="dots" class="flex items-center justify-center gap-1 p-2">
        {#each Array(pagesCount) as _, pageIndex (pageIndex)}
          <CarouselDot
            active={currentPageIndex === pageIndex}
            number={pageIndex + 1}
            on:click={() => showPage(pageIndex)}
          />
        {/each}
      </div>

      <!-- Carousel slides -->
      {#each items as item, index (item.id)}
        <div class="relative">
          {#if loaded.includes(index)}
            <img
              src={item.imageUrl}
              alt={item.title}
              width="2000"
              height="1000"
              draggable="false"
              class="w-full object-cover aspect-[2/3] md:aspect-[16/7]"
            />
          {/if}

          <!-- Overlay -->
          <div class="absolute inset-0 flex flex-col justify-center items-center md:items-start p-4 bg-black bg-opacity-30">
            <h1 class="text-5xl md:text-7xl font-extrabold text-white uppercase text-center md:text-left">
              {item.title}
            </h1>
            {#if item.subtitle}
              <p class="mt-2 text-xl text-white text-center md:text-left">
                {item.subtitle}
              </p>
            {/if}
          </div>
        </div>
      {/each}
    </Carousel>
  {/if}
</div>
