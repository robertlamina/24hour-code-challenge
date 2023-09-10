<template>
  <div class="recently__bought">
    <div class="recently__bought__header">
      <h1>Recently Bought</h1>
    </div>
    <div class="recently__bought__body">
      <ul>
        <li v-for="product in products">
          <ProductCard :product="product"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">

export default {
	data() {
    return {
      products: [
        {
          name: 'Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit',
          quantity: 1,
          price: 38,
          original_price: '',
          image: ''
        },
        {
          name: 'Chevron Flap Crossbody Bag',
          quantity: 1,
          price: 5.77,
          original_price: 7.34,
          image: ''
        },
        {
          name: 'Manilla Tan Multi Plaid Oversized Fringe Scarf',
          quantity: 1,
          price: 29,
          original_price: 39,
          image: ''
        },
        {
          name: 'Diamante Puff Sleeve Dress - Black',
          quantity: 1,
          price: 45.99,
          original_price: '',
          image: ''
        },
        {
          name: 'Banneth Open Front Formal Dress in Black',
          quantity: 1,
          price: 69,
          original_price: 99.95,
          image: ''
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.recently__bought {
  @apply w-full;
  @apply px-[40px] py-[50px];
  @apply flex flex-col;

  .recently__bought__header {
    @apply w-full;
    @apply flex items-center justify-center;

    h1 {
      @apply m-0 mb-[20px];
      @apply font-extrabold text-[36px] text-black;
    }
  }

  .recently__bought__body {
		@apply w-full;
    @apply flex items-center justify-center;

    ul {
      @apply w-full;
      @apply flex items-center justify-center;
    }
  }
}
</style>