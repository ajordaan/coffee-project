<template>
  <ul v-scroll-spy-active="{ class: 'scrollactive-item' }" class="lnav">
    <li v-for="item in details" :key="item.id">
      <a :href="`#${item.id}`"> {{ item.heading }} </a>
    </li>
  </ul>
  <router-view />
</template>

<script>
export default {
  name: "LNav",
  props: {
    parent: String,
    details: Array,
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>
