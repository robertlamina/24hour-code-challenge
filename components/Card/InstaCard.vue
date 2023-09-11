<template>
  <div class="insta__card">
		<div class="insta__card__body">
      <img :src="`/images/insta/${image}`" alt="product-img">
    </div>
  </div>
</template>

<script lang="ts">
export default {
 props: {
   image: String
 }
}
</script>


<style scoped lang="scss">
.insta__card {
  @apply p-[24px];
  @apply cursor-pointer;

  .insta__body {
    img {
  		@apply w-[225px] h-[225px];
      @apply object-cover object-center;
    }
  }
}
</style>