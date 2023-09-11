<template>
<Splide :options="{ rewind: true, autoplay: true }">
  <SplideSlide>
    <img src="~/assets/images/hero-img-1.jpg" alt="Sample 1">
  </SplideSlide>
  <SplideSlide>
    <img src="~/assets/images/hero-img-2.jpg" alt="Sample 2">
  </SplideSlide>
</Splide>
</template>

<script lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

export default {
  components: {Splide, SplideSlide},
}
</script>

<style scoped lang="scss">
.splide {
  height: calc(100vh - 143px);

  :deep(.splide__track) {
    @apply h-full;

    ul {
      @apply h-full;

      li {
        @apply h-full;

        img {
          @apply w-full h-full;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }

  :deep(.splide__arrows ) {
    .splide__arrow {
      @apply bg-transparent;

      svg {
        @apply w-[23px] h-[37px];
        fill: #ffffff;
      }
    }
  }

  :deep(.splide__pagination) {
		@apply bottom-[36px];

    .splide__pagination__page {
    	@apply w-[15px] h-[15px];
      @apply mx-[10px];

      &.is-active {
        transform: scale(1);
      }
    }
  }
}
</style>