<template>
  <div class="new__in">
		<div class="new__in__content">
      <h1>New <br/>Arrivals</h1>
      <span>Get ready for the holidays with us!</span>
      <Button>Shop Now</Button>
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style scoped lang="scss">
.new__in {
  @apply py-[47px];
  @apply flex items-center justify-end;
  @apply bg-cover bg-no-repeat bg-top;
	background-image: url('~/assets/images/new-in-bg.svg');

  .new__in__content {
		@apply w-[40%];
    @apply flex flex-col;

    h1 {
      @apply m-0 mb-[21px] leading-[1];
      @apply font-extrabold text-[86px] text-white;
    }

    span {
      @apply mb-[43px];
      @apply font-semibold text-[28px] text-white;
    }
  }
}
</style>