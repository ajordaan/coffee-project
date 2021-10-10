<template>
  <LNav
    parent="ManualBrews"
    :chapter="['#aeropress', '#v60', '#chemex', '#french-press']"
    :title="['Aeropress', 'V60', 'Chemex', 'French Press']"
  />

  <div v-scroll-spy="{ offset: -120 }" class="main">
    <img alt="Manual Brew Image" src="../assets/v60-manual-brew.jpg" />

    <p class="para">This is a page about manual coffee brewing methods.</p>
    <h2 id="aeropress">Aeropress</h2>
    <p>Some more Aeropress info.</p>

    <h3 id="brew-time">Brew time</h3>
    <p>Info on brew time and all that goodness.</p>

    <h3 id="grind-size">Grind size</h3>
    <p>Grind size can make or break your cup.</p>

    <h3 id="water-temp">Water temperature</h3>
    <p>Info on how much you should heat your water.</p>

    <h3 id="method">Method</h3>
    <p>To mix or not to mix is the question and even then, swirl or stir?</p>

    <h2 id="v60">V60</h2>
    <p>Some V60 info.</p>
    <h2 id="chemex">Chemex</h2>
    <p>Some Chemex info.</p>
    <h2 id="french-press">French Press</h2>
    <p>Some French Press info.</p>
  </div>
</template>

<script>
import LNav from "../components/LNav";
// import RNav from'../components/RNav'

export default {
  name: "Manual Brews",
  components: {
    LNav,
  },
};
</script>
