<template>
  <div class="site__wide__deals">
		<ul>
      <li v-for="item in items">
        <a href="#">
          <h3>{{ item.name }}</h3>
          <span>{{ item.text }}</span>
        </a>
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          name: '$5 Off',
          text: 'on orders above $50'
        },
        {
          name: '$5 Off',
          text: 'on orders above $50'
        },
        {
          name: '$5 Off',
          text: 'on orders above $50'
        },
        {
          name: '$5 Off',
          text: 'on orders above $50'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>