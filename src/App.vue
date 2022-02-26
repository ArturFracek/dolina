<template>
  <div id="app">
    <Nav />
    <div id="nav">
      <router-link to="/line/1">TV1</router-link> |
      <router-link to="/line/2">TV2</router-link> |
      <router-link to="/line/3">TV3</router-link>
    </div>
    <router-link id="allLines" to="/linie">Wszystkie linie</router-link>
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    Nav,
  },
};
</script>

<style>
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: rgb(3, 2, 65);
}
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

#nav {
  padding: 2vh;
  font-size: 2.4vh;
}

#nav a {
  font-weight: bold;
  color: #3998f6;
  padding: 0 1%;
}

#nav a.router-link-exact-active,
#allLines.router-link-exact-active {
  color: rgb(25, 204, 228);
}

#allLines {
  font-weight: bold;
  color: #3998f6;
  margin-bottom: 6%;
  font-size: 2.4vh;
  text-decoration: none;
}
#allLines:hover,
#nav a:hover {
  color: rgb(25, 204, 228);
}
</style>
