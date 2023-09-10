<template>
  <div class="trending">
    <div class="trending__header">
      <h1>Now Trending</h1>
      <span>See what everyone’s wearing right now</span>
    </div>

    <div class="trending__body">
			<ul>
        <li v-for="item in items">
          <TrendingCard :name="item.name" :image="item.image"/>
        </li>
      </ul>
    </div>

    <div class="trending__footer">
			<ul>
        <li v-for="tag in tags">
					<Button variant="btn__trending">{{ tag }}</Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          image: 'trending-img-1.jpg',
          name: 'Winter Fashion'
        },
          {
          image: 'trending-img-2.jpg',
          name: 'Boots'
        },
          {
          image: 'trending-img-3.jpg',
          name: 'Night-out'
        },
          {
          image: 'trending-img-4.jpg',
          name: 'Holidays'
        },
          {
          image: 'trending-img-5.jpg',
          name: 'Outerwear'
        },
          {
          image: 'trending-img-6.jpg',
          name: 'White Dresses'
        },
          {
          image: 'trending-img-7.jpg',
          name: 'Sweaters'
        },
          {
          image: 'trending-img-8.jpg',
          name: 'Party'
        }
      ],
      tags: [
        '#Thanksgiving',
        '#Knitted',
        '#NewYears',
        '#Pajamas',
        '#WFH',
        '#FallFashion'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.trending {
  @apply p-[40px] pb-[65px];

	.trending__header {
    @apply w-full;
    @apply flex flex-col items-center justify-center;

    h1 {
      @apply m-0 mb-[30px];
			@apply text-[36px] font-extrabold;
    }

    span {
      @apply mb-[40px];
			@apply text-[14px];
    }
  }

  .trending__body {
    @apply flex justify-center;

    ul {
    	@apply columns-4;
    }
  }

  .trending__footer {
    @apply flex justify-center;

    ul {
      @apply flex;

      li {
        @apply mx-[10px];
      }
    }
  }
}
</style>