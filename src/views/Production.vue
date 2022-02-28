<template>
  <div class="production">
    <div class="production__lines">
      <router-link to="/line/1">TV1</router-link> |
      <router-link to="/line/2">TV2</router-link> |
      <router-link to="/line/3">TV3</router-link>
    </div>
    <router-link class="production__allLines" to="/linie"
      >Wszystkie linie</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$background-white: rgb(228, 228, 228);

.production {
  height: 93vh;
  width: 100vw;
  background-color: $background-white;
}
</style>
