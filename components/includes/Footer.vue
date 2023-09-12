<template>
  <div class="footer">
    <div class="footer__list">
      <div class="footer__list__group" v-for="item in footerNav">
        <h3>{{ item.name }}</h3>
        <ul>
          <li v-for="link in item.links">
            <a href="#">{{ link }}</a>
          </li>
        </ul>
      </div>
      <div class="footer__list__socials">
        <div class="footer__list__socials__follow">
          <h3>{{ footerSocials.name }}</h3>
          <ul>
            <li v-for="icon in footerSocials.icons">
              <a href="#">
                <Icon :name="icon" color="black" size="20px"/>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__list__socials__payments">
          <h3>{{ footerPayments.name }}</h3>
          <ul>
            <li v-for="icon in footerPayments.icons">
              <a href="#">
                <img :src="`/images/footer/${icon}`" alt="product-img">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__trademark">
      <div class="footer__trademark__left">
        <h3>©2021 THREADED All Rights Reserved.</h3>
      </div>
      <div class="footer__trademark__right">
        <a href="/">
         	<img class="logo" src="~/assets/images/logo.svg" alt="logo">
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
		return {
      footerNav: [
        {
          name: 'Company Info',
          links: [
            'About THREADED',
            'Affiliate',
            'Blog',
            'Careers'
          ]
        },
        {
          name: 'Help & Support',
          links: [
            'FAQ',
            'Shipping',
            'Returns',
            'How to Order',
            'How to Track'
          ]
        },
        {
          name: 'Customer Care',
          links: [
            'Contact Us',
            'Payment Methods'
          ]
        }
      ],
      footerSocials: {
        name: 'Follow Us',
        icons: [
          'bx:bxl-facebook',
          'bx:bxl-instagram',
          'bx:bxl-twitter',
          'bx:bxl-youtube',
          'bx:bxl-pinterest-alt',
          'bx:bxl-tiktok'
        ]
      },
      footerPayments: {
        name: 'We Accept',
        icons: [
          'visa-icon.svg',
          'mastercard-icon.svg',
          'maestro-icon.svg',
          'american-express-icon.svg',
          'paypal-icon.svg'
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  @apply p-[40px];

  .footer__list {
    @apply flex;

    .footer__list__group {
      @apply w-[151px];
      @apply mr-[14px];

      h3 {
        @apply p-[10px];
				@apply font-semibold text-[12px] text-black uppercase;
      }

      ul {
        li {
          @apply p-[10px];
          a {
            @apply font-normal text-[12px] text-black capitalize;
          }
        }
      }
    }

    .footer__list__socials {
      .footer__list__socials__follow {
        h3 {
          @apply p-[10px];
          @apply font-semibold text-[12px] text-black uppercase;
        }

        ul {
          @apply flex;
          @apply mb-[13px] pl-[10px];

          li {
            @apply mr-[12px];
          }
        }
      }

      .footer__list__socials__payments {
        h3 {
          @apply p-[10px];
          @apply font-semibold text-[12px] text-black uppercase;
        }

        ul {
          @apply flex;
          @apply mb-[13px] pl-[10px];

          li {
            @apply mr-[12px];
          }
        }
      }
    }
  }

  .footer__trademark {
    @apply w-full;
    @apply py-[40px];
    @apply flex items-center justify-center;

    .footer__trademark__left {
      @apply w-full;
      @apply flex items-center justify-start;

      h3 {
        @apply font-normal text-[12px] text-black;
      }
    }

    .footer__trademark__right {
      @apply w-full;
      @apply flex items-center justify-end;
    }
  }
}
</style>