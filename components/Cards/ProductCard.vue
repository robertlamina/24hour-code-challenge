<template>
  <div class="product__card">
    <img :src="`/images/products/${product.image}`" alt="product-img">
    <h1>{{ product.name }}</h1>
    <div class="product__info">
      <span class="product__amount">${{ product.price }}</span>
      <span class="product__discounted">{{ product.original_price ? `$${product.original_price}` : '' }}</span>
      <div class="btn__buy">
        <Button variant="btn__buy" @click="addToCart(product)">Add</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

interface ProductProps {
  id: string,
  name: string,
  quantity: number,
  size: string,
  color: string,
  price: number,
  original_price: number,
  image: string
}

export default defineComponent({
  props: {
    product: Object as PropType<ProductProps>
  },
  data() {
    return {
    	quantity: 1
    }
  },
  methods: {
    addToCart(product: ProductProps) {
      let cartItems = localStorage.hasOwnProperty('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

      try {
        if (this.$_.some(cartItems, {id: product.id})) {
          product.quantity = this.$_.find(cartItems, {id: product.id}).quantity + 1

          this.$_.set(this.$_.find(cartItems, {id: product.id}), 'quantity', product.quantity)

          toast.success('Product updated!', {
            hideProgressBar: true,
            autoClose: 1000,
            pauseOnHover: false
          })
        } else {
          cartItems.push(product)

          toast.success('Product added!', {
            hideProgressBar: true,
            autoClose: 1000,
            pauseOnHover: false
          })
        }


        localStorage.setItem('cartItems', JSON.stringify(cartItems))
      } catch (e) {
        localStorage.removeItem('cartItems')
      }
    }
  }
})
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