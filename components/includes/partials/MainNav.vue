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
          <a href="#">
            <Icon :name="icon" color="#999999" size="20px"/>
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
export default {
  data() {
    return {
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
        'bx:bx-user',
        'bx:bx-shopping-bag',
        'bx:bx-heart',
        'bx:bx-support',
        'bx:bx-search'
      ]
    }
  }
}
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
    @apply w-full;
    @apply flex justify-end;

    ul {
      @apply flex items-center justify-center;

      li {
        @apply p-[10px];

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