<template>
  <div class="nav">
    <MainNav/>
  </div>
</template>
<script lang="ts">
import MainNav from '~/components/includes/partials/MainNav.vue'

export default {
	components: {MainNav}
}
</script>

<style scoped lang="scss">
.nav {
  @apply fixed top-0 w-full z-[99];
}
</style>