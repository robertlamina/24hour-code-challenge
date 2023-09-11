<template>
  <div class="insta">
    <div class="insta__header">
      <h1>Your Next Inspo</h1>
      <span>Checkout who’s wearing what by using #THREADEDInspo on Instagram</span>
    </div>

    <div class="insta__body">
      <ul>
        <li v-for="item in items">
          <InstaCard :image="item"/>
        </li>
      </ul>
    </div>

    <div class="insta__footer">
      <Button variant="btn__black">View All Posts</Button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
          'insta-img-1.jpg',
          'insta-img-2.jpg',
          'insta-img-3.jpg',
          'insta-img-4.jpg',
          'insta-img-5.jpg'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.insta {
  @apply w-full bg-[#F2F2F2];
  @apply py-[40px];

  .insta__header {
    @apply w-full;
    @apply flex flex-col items-center justify-center;

    h1 {
      @apply m-0 mb-[20px];
      @apply font-extrabold text-[36px] text-black;
    }

    span {
      @apply m-0 mb-[20px];
      @apply font-normal text-[14px] text-black;
    }
  }

  .insta__body {
		ul {
      @apply flex items-center justify-center;
    }
  }

  .insta__footer {
		@apply flex items-center justify-center;
  }
}
</style>