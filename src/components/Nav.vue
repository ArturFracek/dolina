<template>
  <div class="nav">
    <router-link to="/home" class="nav__link home">Home</router-link>
    <router-link to="/produkcja" class="nav__link production"
      >Produkcja</router-link
    >
    <router-link to="/sterylizacja" class="nav__link autoclaves"
      >Sterylizacja</router-link
    >
    <router-link to="/pakowanie" class="nav__link packing"
      >Pakowanie</router-link
    >
    <router-link to="/wykresy" class="nav__link packing">Wykresy</router-link>
    <router-link to="/statystyki" class="nav__link statistics"
      >Statystyki</router-link
    >
    <router-link to="/archiwum" class="nav__link archives">Archiwum</router-link>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$background-white: rgb(251, 251, 251);

@mixin centering{
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin linkTheme {
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-weight: 800;
  margin:  1vw;
  text-decoration: none;
}

.nav {
  @include centering;
  height: 7vh;
  background-color: $background-white;
  width: 100vw;
}

.nav__link {
  @include linkTheme;
}

.home {
  margin-right: 20vw;
}
.archives {
  margin-right: auto;
}
</style>
