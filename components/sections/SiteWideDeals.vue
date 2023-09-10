<template>
  <div class="site__wide__deals">
		<ul>
      <li v-for="item in items">
        <a href="#">
          <h3>{{ item.amount }} <span>Off</span></h3>
          <span class="description">{{ item.text }}</span>
        </a>
      </li>
      <li>
        <Button variant="btn__black">Check out all site-wide deals</Button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          amount: '$5',
          text: 'on orders above $50'
        },
        {
          amount: '$15',
          text: 'on orders above $75'
        },
        {
          amount: '$20',
          text: 'on orders above $150'
        },
        {
          amount: '$30',
          text: 'on orders above $200'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.site__wide__deals {
  @apply w-full;
  @apply px-[68px] py-[45px];
  @apply flex items-center justify-center;

  ul {
    @apply flex w-full;

    li {
      @apply w-full;
      @apply flex items-center justify-center;

      a {
        @apply flex items-center justify-center flex-col;

        h3 {
          @apply flex items-center;
          @apply text-[32px] font-semibold;

          span {
            @apply text-[18px] font-extrabold uppercase;
            @apply ml-[10px];
          }
        }

        .description {
          @apply text-[10px] uppercase;
        }
      }
    }
  }
}
</style>