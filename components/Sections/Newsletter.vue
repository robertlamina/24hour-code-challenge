<template>
  <div class="newsletter">
    <div class="newsletter__left">
      <h1>Sign Up for Exclusive Deals and Updates</h1>
    </div>
    <div class="newsletter__right">
      <div class="input__group">
        <input placeholder="Your Email Address">
        <Button variant="btn__icon">
          <Icon name="ant-design:right-outlined" color="black" size="9px"/>
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style scoped lang="scss">
.newsletter {
  @apply bg-black;
  @apply px-[118px] py-[20px];
  @apply flex items-center justify-evenly;

  .newsletter__left {
    @apply flex items-center justify-start;

    h1 {
    	@apply m-0;
      @apply font-extrabold text-[32px] text-white;
    }
  }

  .newsletter__right {
    @apply flex items-center justify-end;

    .input__group {
      @apply h-[35px];
      @apply flex items-center justify-center;

      input {
        @apply h-full;
        @apply p-[8px];
      }
    }
  }
}
</style>