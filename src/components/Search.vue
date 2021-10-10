<template>
  <div>
    <input
      type="text"
      v-model="newsearch"
      v-on:input="[updateSearch(newsearch), filterSearch()]"
      placeholder="Search current section..."
    />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Search",

  setup() {
    const store = useStore();

    const newsearch = ref("");
    const search = computed(() => store.state.search);
    const searchArray = computed(() => store.state.searchArray);

    const updateSearch = () => store.commit("updateSearch", newsearch);
    const filterSearch = () => store.commit("filterSearch");

    //  const search = computed( () => store.commit('updateSearch') )

    return { newsearch, search, searchArray, updateSearch, filterSearch };
  },
};
</script>

<style>
input {
  top: 85px;
  text-align: center;
  right: 110px;
  z-index: 10;
  position: absolute;
  border: none;
  border-radius: 10px;
  height: 20px;
  width: 200px;
  position: fixed;
  background-color: rgb(238, 238, 238);
}

button {
  top: 85px;
  text-align: center;
  right: 20px;
  z-index: 10;
  position: absolute;
  border: none;
  border-radius: 10px;
  height: 20px;
  width: 80px;
  position: fixed;
  background-color: rgb(238, 238, 238);
}

.search {
  font-size: 100px;
  color: red;
}
</style>
