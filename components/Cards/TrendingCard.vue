<template>
  <a href="#">
    <div class="card" v-if="image">
      <img :src="`/images/trending/${image}`" alt="trending-img-1">
      <h3>{{ name }}</h3>
    </div>
  </a>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  @apply w-[265px] h-[390px] p-[20px];
  @apply flex flex-col items-center justify-center;

  img {
		@apply w-full;
    @apply object-cover object-center;
  }

  h3 {
    @apply m-0 pt-[12px] pb-[24px];
    @apply text-[24px] font-semibold uppercase;
  }
}
</style>