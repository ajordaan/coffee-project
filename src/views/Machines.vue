<template>
  <LNav
    parent="Machines"
    :chapter="['#la-marzocco', '#breville', '#rancilio', '#specht']"
    :title="['La Marzocco', 'Breville', 'Rancilio', 'Specht']"
  />

  <div v-scroll-spy="{ offset: -120 }" class="main">
    <img alt="Coffee Machine" src="../assets/coffee-machine.jpg" />
    <p class="para">This is a page about coffee machines.</p>
    <h2 id="la-marzocco">La Marzocco</h2>
    <p>A legendary brand in the industry</p>
    <h2 id="breville">Breville</h2>
    <p>Breville is no stranger to the coffee world.</p>
    <h2 id="rancilio">Rancilio</h2>
    <p>You can't go wrong with a good ol' Rancilio machine.</p>
    <h2 id="specht">Specht</h2>
    <p>
      Specht is for the coffee fanatics. From custom colours to handmade wooden
      finishes, these machines are nothing short of luxurious.
    </p>
  </div>
</template>

<script>
import LNav from "../components/LNav";

export default {
  name: "Machines",
  components: {
    LNav,
  },
};
</script>
