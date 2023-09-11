<template>
  <button class="button" :class="`${variant}`">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
	props: {
		variant: {
			type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  @apply bg-white w-max;
  @apply px-[20px] py-[10px];
  @apply font-semibold text-[17px] text-black uppercase;

  &.btn__black {
    @apply bg-black;
    @apply text-white;
  }

  &.btn__checkout {
    @apply bg-black;
    @apply px-[20px] py-[20px];
    @apply font-normal text-[14px] text-white uppercase;
  }

  &.btn__trending {
    @apply px-[20px] py-[10px];
    @apply rounded-full border-[1px] border-solid border-black;
    @apply font-semibold text-[14px] text-black capitalize;
  }

  &.btn__buy {
    @apply px-[10px] py-[5px];
    @apply rounded-full border-[1px] border-solid border-black;
    @apply font-semibold text-[14px] text-black uppercase;
  }

  &.btn__icon {
    @apply w-[35px] h-full;
    @apply p-0;
    @apply flex items-center justify-center;
  }
}
</style>