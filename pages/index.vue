<template>
  <div class="test">
    <section>
			<Benefits/>
    </section>

    <section>
      <Hero/>
    </section>

    <section>
      <SiteWideDeals/>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.test {
  @apply relative;
  height: 200vh;
  margin-top: 93px;
}
</style>
<script setup lang="ts">
import Hero from "~/components/sections/Hero.vue";
</script>