<template>
  <div class="product__card">
    <img :src="`/images/products/${product.image}`" alt="product-img">
    <h1>{{ product.name }}</h1>
    <div class="product__info">
      <span class="product__amount">${{ product.price }}</span>
      <span class="product__discounted">{{ product.original_price ? `$${product.original_price}` : '' }}</span>
      <div class="btn__buy">
        <Button variant="btn__buy">Add</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    product: Object
  }
}
</script>

<style scoped lang="scss">
.product__card {
  @apply w-[245px];
  @apply p-[20px];
  @apply cursor-pointer;

  img {
    @apply w-full h-[300px];
    @apply object-cover object-center;
  }

  h1 {
    @apply w-[225px] h-[50px];
    @apply flex items-center;
    @apply font-normal text-[14px] text-black;
  }

  .product__info {
    @apply w-full;
    @apply flex items-center;

		.product__amount {
      @apply w-full;
      @apply font-extrabold text-[14px] text-[#C1272D];
    }

    .product__discounted {
      @apply w-full;
			@apply font-semibold text-[14px] text-black line-through;
    }

    .btn__buy {
      @apply w-full;
      @apply flex items-center justify-center;
    }
  }
}
</style>