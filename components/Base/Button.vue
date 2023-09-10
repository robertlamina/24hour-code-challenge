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
  @apply bg-white;
  @apply px-[20px] py-[10px];
  @apply text-[17px] font-semibold text-black uppercase;

  &.btn__black {
    @apply bg-black;
    @apply text-white;
  }

  &.btn__trending {
    @apply px-[20px] py-[10px];
    @apply rounded-full border-[1px] border-solid border-black;
    @apply text-[14px] font-semibold text-black capitalize;
  }
}
</style>