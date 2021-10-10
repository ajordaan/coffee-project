<template>
  <LNav
    parent="Beans"
    :chapter="['#father', '#origin', '#rosetta']"
    :title="['Father Coffee', 'Origin Coffee Roasters', 'Rosetta Roastery']"
  />

  <div class="main">
    <img alt="Coffee Beans" src="../assets/coffee-beans.jpg" />
    <p>This is a page about coffee beans.</p>
  </div>

  <div
    v-for="bean in beans"
    :key="bean"
    v-scroll-spy="{ offset: -120 }"
    class="main"
  >
    <div v-if="bean.active">
      <h2 :id="bean.id">{{ bean.heading }}</h2>
      <p class="par">{{ bean.text }}</p>
    </div>
  </div>
</template>

<script>
import LNav from "../components/LNav";

import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Beans",
  components: {
    LNav,
  },

  setup() {
    const store = useStore();

    const beans = computed(() => store.state.beans);

    return { beans };
  },
};
</script>
<style scoped>
.par {
  width: 800px;
  text-align: center;
  margin: auto;
}
</style>
