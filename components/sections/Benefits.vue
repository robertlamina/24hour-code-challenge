<template>
  <div class="benefits">
		<ul>
      <li>
        <a href="#">
          <Icon name="bx:bx-crown" color="black" size="30px"/>
          <span>Exclusive Deals for VIP 2 and up!</span>
        </a>
      </li>
      <li>
        <a href="#">
          <Icon name="bx:bx-star" color="black" size="30px"/>
          <span>Weekly New Arrivals</span>
        </a>
      </li>
      <li>
        <a href="#">
          <Icon name="mdi:truck-delivery-outline" color="black" size="30px"/>
          <span>Free Shipping On Orders Over $100</span>
        </a>
      </li>
      <li>
        <a href="#">
          <Icon name="bx:bx-map-pin" color="black" size="30px"/>
          <span>Track Your Order</span>
        </a>
      </li>
      <li>
        <a href="#">
          <Icon name="bx:bx-purchase-tag" color="black" size="30px"/>
          <span>10% Off On Your First Order!</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

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