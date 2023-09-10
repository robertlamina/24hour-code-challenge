<template>
  <div class="benefits">
		<ul>
      <li v-for="item in items">
        <a href="#">
          <Icon :name="item.icon" color="black" size="30px"/>
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          icon: 'bx:bx-crown',
          name: 'Exclusive Deals for VIP 2 and up!'
        },
        {
          icon: 'bx:bx-star',
          name: 'Weekly New Arrivals'
        },
        {
          icon: 'mdi:truck-delivery-outline',
          name: 'Free Shipping On Orders Over $100'
        },
        {
          icon: 'bx:bx-map-pin',
          name: 'Track Your Order'
        },
        {
          icon: 'bx:bx-purchase-tag',
          name: '10% Off On Your First Order!'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.benefits {
  @apply bg-[#f2f2f2] px-[39px] py-[10px] w-full;
  @apply flex items-center justify-center;

  ul {
    @apply w-full;
		@apply flex items-center justify-center;

    li {
      @apply w-full;
      @apply flex items-center justify-center;

      a {
        @apply flex items-center justify-center;

        span {
          @apply ml-[19px];
          @apply text-[12px] text-black;
        }
      }
    }
  }
}
</style>