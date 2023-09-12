<template>
  <div class="vip__exclusive">
		<h3>Black Friday Exclusive</h3>
		<h4>free shipping on all orders for <br/>VIP 2 and up!</h4>
    <div class="btn__container">
      <Button>Shop Now</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vip__exclusive {
  @apply w-full bg-black;
  @apply pl-[118px] py-[17px];
  @apply flex items-center;
  @apply bg-cover bg-no-repeat bg-center;
  background-image: url('~/assets/images/vip-exlusive-bg.svg');

  h3 {
    @apply w-full;
    @apply flex items-center;
    @apply text-[32px] font-extrabold text-white uppercase;
  }

	h4 {
    @apply w-full;
    @apply pl-[24px];
    @apply flex items-center;
    @apply text-[18px] font-semibold text-white uppercase;
  }

  .btn__container {
    @apply  w-full;
    @apply flex items-center justify-center;
  }
}
</style>