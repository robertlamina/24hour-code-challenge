<template>
  <div class="main__nav">
    <div class="nav__left">
      <ul>
        <li v-for="item in items">
          <a :class="item.status" href="#">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <div class="nav__logo">
      <a href="/">
        <img class="logo" src="~/assets/images/logo.svg" alt="logo">
      </a>
    </div>
    <div class="nav__right">
      <ul>
        <li v-for="icon in icons">
          <a href="#" @click="toggleCart(icon)">
            <Icon :name="icon.icon" color="#999999" size="20px"/>
            <CartWidget :is-visible="isVisible" v-if="icon.name === 'bag'"/>
          </a>
        </li>
        <li>
          <div class="currency">
            <img src="~/assets/images/usa-flag-icon.svg" alt="usa-flag">
            <span>usd $</span>
            <Icon name="ant-design:down-outlined" color="black" size="10px"/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
      isVisible: false,
      items: [
        {
          status: 'active',
          name: 'Women'
        },
        {
          status: 'in-active',
          name: 'Plus'
        },
        {
          status: 'in-active',
          name: 'Men'
        },
        {
          status: 'in-active',
          name: 'Accessories'
        }
      ],
      icons: [
        {
          name: 'user',
          icon: 'bx:bx-user'
        },
        {
          name: 'bag',
          icon: 'bx:bx-shopping-bag'
        },
        {
          name: 'heart',
          icon: 'bx:bx-heart'
        },
        {
          name: 'support',
          icon: 'bx:bx-support'
        },
        {
          name: 'search',
          icon: 'bx:bx-search'
        }
      ]
    }
  },
  methods: {
    toggleCart(icon: { name: string; icon: string }) {
      if (icon.name === 'bag') this.isVisible = !this.isVisible
    }
  }
})
</script>

<style scoped lang="scss">
.main__nav {
  @apply bg-white px-[24px] py-[18px] w-full;
  @apply flex items-center justify-center;

  .nav__logo {
    @apply w-full;
    @apply flex justify-center;
  }

  .nav__left {
    @apply w-full;

    ul {
      @apply flex items-center;

      li {
        @apply px-[9px] py-[15px];

        a {
          @apply text-[14px] text-black uppercase;

          &.active {
            @apply font-semibold;
          }
        }
      }
    }
  }

  .nav__right {
    @apply w-full relative;
    @apply flex justify-end;

    ul {
      @apply flex items-center justify-center;

      li {
        @apply p-[10px];

        a {
          @apply relative;
        }

        .currency {
          @apply cursor-pointer;
          @apply px-[6px] py-[5px];
          @apply flex items-center justify-center;
          @apply rounded-full border-[1px] border-solid border-[#F2F2F2];

          img {
            @apply mr-[3px];
          }

          span {
            @apply mr-[11px];
            @apply uppercase;
          }
        }
      }
    }
  }
}
</style>