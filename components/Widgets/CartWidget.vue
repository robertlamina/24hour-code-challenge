<template>
	<div class="cart__widget" :class="{ 'is-visible' : isVisible }">
    <ul>
      <li>
        <div class="cart__widget__product">
          <div class="cart__widget__product__img">
            <img :src="`/images/products/product-img-1.jpg`" alt="product-img">
          </div>
          <div class="cart__widget__product__info">
            <h3 class="cart__widget__product__title">test</h3>
            <span class="cart__widget__product__description">test</span>
            <span class="cart__widget__product__size">Size: test</span>
            <span class="cart__widget__product__color">Color: test</span>
            <span class="cart__widget__product__quantity">Qty: test</span>
            <span class="cart__widget__product__price">test</span>
          </div>
        </div>
      </li>
      <li>
        <div class="cart__widget__product">
          <div class="cart__widget__product__img">
            <img :src="`/images/products/product-img-1.jpg`" alt="product-img">
          </div>
          <div class="cart__widget__product__info">
            <h3 class="cart__widget__product__title">test</h3>
            <span class="cart__widget__product__description">test</span>
            <span class="cart__widget__product__size">Size: test</span>
            <span class="cart__widget__product__color">Color: test</span>
            <span class="cart__widget__product__quantity">Qty: test</span>
            <span class="cart__widget__product__price">test</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="cart__widget__footer">
      <div class="cart_widget__total">
        <a href="/carts">My Bag (2)</a>
        <span class="total">$99</span>
      </div>
			<Button variant="btn__checkout">Begin Checkout</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
		isVisible: Boolean
  },
	async created() {
  },
  methods: {

  }
})
</script>

<style scoped lang="scss">
.cart__widget {
  @apply w-max;
  @apply absolute top-[24px] right-0;
  @apply hidden;
  @apply p-[24px];
  @apply bg-white;
  @apply border-[1px] border-solid border-[#C4C4C4];

  &.is-visible {
    @apply block;
  }

  ul {
    li {
      .cart__widget__product {
        @apply flex;

        .cart__widget__product__img {
          img {
            @apply w-[80px] h-[100px];
            @apply object-fill object-center;
          }
        }

        .cart__widget__product__info {
          @apply flex flex-col;
          @apply p-[12px] pt-0;

          .cart__widget__product__title,
          .cart__widget__product__description,
          .cart__widget__product__size,
          .cart__widget__product__color,
          .cart__widget__product__quantity,
          .cart__widget__product__price {
            @apply font-normal text-[14px] text-black;
          }

          .cart__widget__product__description, .cart__widget__product__quantity {
            @apply mb-[10px];
          }

          .cart__widget__product__title, .cart__widget__product__price {
            @apply font-semibold;
          }
        }
      }
    }
  }

  .cart__widget__footer {
    @apply flex flex-col;
    @apply border-t-[1px] border-solid border-[#C4C4C4];

    .cart_widget__total {
      @apply py-[10px];
      @apply flex justify-between;

      a {
        @apply underline;
      }

      a, span {
				 @apply font-semibold text-[14px];
      }
    }
  }
}
</style>