<template>
  <main>
    <Header/>

		<slot/>

    <Footer/>
  </main>
</template>
<script setup lang="ts">
import Footer from "~/components/includes/Footer.vue";
</script>