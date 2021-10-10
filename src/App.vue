<template>
  <div class="noscroll">
    <div>
      <Search />
    </div>
    <Header title="The Coffee Project 3.0" />
    <div id="topnav">
      <router-link to="/">Home</router-link>
      <router-link to="/manual-brews">Manual Brews</router-link>
      <router-link to="/machines">Machines</router-link>
      <router-link to="/beans">Beans</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
import Search from "./components/Search";

export default {
  name: "App",
  components: {
    Header,
    Search,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: hidden;
}

#topnav {
  padding: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  margin-top: 60px;
  text-align: center;
  background: #fff;
}

#topnav a {
  color: #98694f;
  padding: 10px;
  text-decoration: none;
  font-size: 22px;
}

#topnav a:hover {
  background-color: #66462f;
  color: #fff;
}

#topnav a.router-link-exact-active {
  color: #000;
}

.para {
  text-align: center;
  padding-top: 10px;
  width: 100%;
}

.lnav {
  height: auto; /* Full-height: remove this if you want "auto" height */
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  z-index: 1;
  text-align: center;
  overflow-x: hidden;
  padding-top: 0px;
  margin-top: 80px;
  margin-left: 8px;
  padding-bottom: 100px;
}

.lnav a {
  padding: 6px 6px 6px 6px;
  text-decoration: none;
  font-size: 18px;
  color: #98694f;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.lnav a:hover {
  color: #66462f;
}

.main {
  margin-top: 35px;
  text-align: center;
  margin-left: 30px;
}
.main img {
  margin-top: 135px;
  text-align: center;
  margin-left: 30px;
}

.scrollactive-item {
  background: #66462f3d;
}

.noscroll {
  overflow-y: hidden;
  height: 100%;
}

.scroll {
  overflow-y: scroll;
  height: 100%;
}

.rnav {
  height: auto; /* Full-height: remove this if you want "auto" height */
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  z-index: 1;
  text-align: center;
  overflow-x: hidden;
  padding-top: 0px;
  margin-top: 80px;
  margin-left: 8px;
  padding-bottom: 100px;
}
</style>
