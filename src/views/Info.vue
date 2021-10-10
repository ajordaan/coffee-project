<template>
  <LNav :details="navigationInfo" />

  <div class="main">
    <img alt="Image" :src="require(`../assets/${info.id}.jpg`)" />
    <p>{{ info.intro }}</p>
  </div>

  <div
    v-for="detail in info.details"
    :key="detail.id"
    v-scroll-spy="{ offset: -120 }"
    class="main"
  >
    <div v-if="detail.active">
      <h2 :id="detail.id">{{ detail.heading }}</h2>
      <p class="par">{{ detail.text }}</p>
    </div>
  </div>
</template>

<script>
import LNav from "../components/LNav";

import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Beans",
  components: {
    LNav,
  },

  setup() {
    const route = useRoute();
    const store = useStore();

    const context = route.params.id;

    const info = computed(() => store.state[context]);

    const navigationInfo = computed(() =>
      store.state[context].details.map((c) => {
        return { id: c.id, heading: c.heading };
      })
    );

    return { info, navigationInfo };
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
