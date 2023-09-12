<template>
  <div class="cart">
    <template v-if="cartItems.length">
      <div class="cart__container">
        <div class="cart__container__header">
          <div class="cart__container__header__left">
            <h1>Shopping Bag</h1>
            <div class="shopping__link">
              <a href="#">Sign in</a>
              <span>to sync your bag across your device.</span>
            </div>
          </div>
          <div class="cart__container__header__right">
            <span>Need help ? +1-562-9265672</span>
            <span>Let's Chat</span>
          </div>
        </div>
        <div class="cart__container__body">
          <div class="cart__table">
            <div class="cart__table__header">
              <h4>Item</h4>
              <h4>Price</h4>
            </div>
            <div class="cart__table__item">
              <ul>
                <li v-for="(item, index) in cartItems">
                  <div class="cart__product">
                    <div class="cart__product__img">
                      <img :src="`/images/products/${item.image}`" alt="product-img">
                    </div>
                    <div class="cart__product__info">
                      <h3 class="cart__product__title">{{ item.name }}</h3>
                      <!--            <span class="cart__product__description">test</span>-->
                      <span class="cart__product__size">Size: {{ item.size }}</span>
                      <span class="cart__product__color">Color: {{ item.color }}</span>
                      <span class="cart__product__quantity">Qty: {{ item.quantity }}</span>
                    </div>
                    <div class="cart__product__subtotal">
                      <span class="cart__product__price">${{ calculateSubTotal(item.price, item.quantity) }}</span>
                      <Button variant="btn__remove" @click="removeProduct({index : index})"><Icon name="mdi-light:delete" color="black" size="24px"/></Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="cart__info">
            <h3>Order Summary</h3>
            <div class="cart__info__box">
              <div class="cart__info__box__col">
								<h3>Subtotal ({{ totalItems() }})</h3>
								<h3>${{ subtotal }}</h3>
              </div>
              <div class="cart__info__box__col pb-[10px]">
								<h3>Free shipping! details</h3>
								<h3>0.00</h3>
              </div>
              <div class="cart__info__box__col has__border pt-[10px]">
								<h3 class="is__semibold">Estimated Total</h3>
								<h3 class="is__semibold">${{ subtotal }}</h3>
              </div>
              <div class="cart__info__box__col">
								<span class="w-full text-[14px] text-center">VAT included!</span>
              </div>
            </div>
            <div class="btn__container">
            	<Button variant="btn__checkout is__rounded">Checkout as a Guest</Button>
            </div>
            <div class="btn__container">
            	<Button variant="btn__checkout is__rounded">Sign in for faster checkout</Button>
            </div>
            <div class="btn__container">
            	<Button variant="btn__paypal is__rounded"><img :src="`/images/footer/paypal-icon.svg`" alt="product-img"> checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="cart__empty">
        <h1>Cart is Empty</h1>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {integer} from "vscode-languageserver-types";

export default defineComponent({
  data() {
    return {
      cartItems: [],
      subtotal: 0
    }
  },
  mounted() {
		this.getCartItems()
    this.getSubtotal()
  },
  methods: {
    removeProduct({index}: { index: number }) {
			this.cartItems.splice(index, 1)
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))

      this.getSubtotal()

      toast.success('Product remove!', {
        hideProgressBar: true,
        autoClose: 1000,
        pauseOnHover: false
      })
    }
  }
})
</script>

<style scoped lang="scss">
.cart {
  @apply w-full h-full;
  @apply relative;
  @apply mt-[93px];
  @apply flex items-center justify-center;
}

.cart__container {
  @apply w-full bg-white;
  @apply p-[40px];

  .cart__container__header {
		@apply flex justify-between;

    .cart__container__header__left {
			@apply flex flex-col;

      h1 {
        @apply m-0 mb-[10px];
        @apply text-[24px] font-bold;
      }

      .shopping__link {
				a, span {
          @apply text-[14px] text-black;
        }

        a {
          @apply mr-[3px];
          @apply underline;
        }
      }
    }

    .cart__container__header__right {
			@apply flex flex-col items-end;

      span {
        @apply text-[14px] text-black;
      }
    }
  }

  .cart__container__body {
    @apply flex items-start;
    @apply mt-[40px];

    .cart__table {
      @apply w-full;
      @apply pr-[24px];
      @apply flex flex-col justify-between;

      .cart__table__header {
        @apply w-full;
        @apply flex justify-between;

        h4 {
          @apply font-semibold text-[14px] uppercase;
        }
      }

      .cart__table__item {
				@apply flex;

        ul {
          @apply w-full;

          li {
            @apply w-full;

            .cart__product {
              @apply w-full;
              @apply flex;
              @apply py-[10px];
              @apply border-t-[1px] border-solid border-[#C4C4C4];

              .cart__product__img {
                img {
                  @apply w-[80px] h-[100px];
                  @apply object-cover object-center;
                }
              }

              .cart__product__info {
                @apply flex flex-col;
                @apply p-[12px] pt-0;

                .cart__product__title,
                .cart__product__description,
                .cart__product__size,
                .cart__product__color,
                .cart__product__quantity,
                .cart__product__price {
                  @apply mb-[5px];
                  @apply font-normal text-[14px] text-black;
                }

                .cart__product__description, .cart__product__quantity {
                  @apply mb-[10px];
                }

                .cart__product__title, .cart__product__price {
                  @apply font-semibold max-w-[300px];
                }
              }

              .cart__product__subtotal {
                @apply w-full;
                @apply flex flex-col items-end justify-between;

                span {
                  @apply font-semibold text-[14px] text-black;
                }
              }
            }
          }
        }
      }
    }

    .cart__info {
      @apply w-[45%];
      @apply flex flex-col justify-center;
      @apply text-center;

      h3 {
        @apply w-full;
        @apply mb-[10px];
        @apply font-semibold text-[14px] uppercase;
      }

      .cart__info__box {
        @apply p-[10px];
				@apply border-[2px] border-solid border-black;

        .cart__info__box__col {
          @apply w-full;
          @apply flex justify-between;

          &.has__border {
            @apply border-t-[1px];
          }

          h3 {
            @apply w-auto;
            @apply font-normal text-[14px] text-black capitalize;

            &.is__semibold {
              @apply font-semibold;
            }
          }
        }
      }

      .btn__container {
        @apply mt-[10px];
      }
    }
  }
}

.cart__empty {
  @apply w-screen h-[30vh];
  @apply flex items-center justify-center;

  h1 {
		@apply font-extrabold text-[24px] text-black;
  }
}
</style>