<template>
  <div class="generalView">
    <div class="generalView__upperSection">
      <img
        alt="Vue logo"
        src="../assets/logo.png"
        class="generalView__upperSection--logo"
      />
    </div>
    <div class="generalView__lowerSection">
      <div class="generalView__dataContainer">
        <router-link
          :to="{ path: `/line/${+index + 1}` }"
          v-for="(value, index) in allLines"
          :key="index"
          class="generalView__dataContainer--allLines"
        >
          <div class="generalView__dataContainer--lineKeysContainer">
            <div
              v-for="(line, index) in Object.keys(value).slice(0, 4)"
              :key="index"
              class="data generalView__dataContainer--lineKeys"
            >
              {{ line }}
            </div>
          </div>
          <div class="generalView__dataContainer--lineValuesContainer">
            <div
              v-for="(line, index) in Object.values(value).slice(0, 4)"
              :key="index"
              class="data generalView__dataContainer--lineValues"
            >
              {{ line }}
            </div>
          </div>
        </router-link>
        <!-- <div v-for="(line, index) in allLines" :key="index" class="generalView__dataContainer--values">
          {{ line[index] }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { production } from "../mockedData/mocks";

export default {
  data() {
    return {
      allLines: null,
    };
  },
  name: "tv1",
  watch: {
    "$route.params.allLines": {
      // co mam obserwować
      // "" dlatego że klucz z kropkami jest błędnym zapisem - vue ogarnia wtedy jak damy ""
      immediate: true, // true jezeli ma sie odpalic odrazu na mouted
      async handler() {
        // handler to funcka która odpali się kiedy obserwowana wartosc sie zmieni ( wszystko z this., z $route, z vuexa) a lineId to Nowa wartosc po zmianie
        this.allLines = await this.fetchAllLinesData(); // ciało funkcji
      },
    },
  },
  methods: {
    fetchAllLinesData() {
      let allLinesData = production.map((line) => line);
      console.log({ ...allLinesData });
      return { ...allLinesData };
    },
    test() {
      console.log(this.line);
    },
  },
};
</script>
<style scoped>
.generalView {
  height: 90%;
  display: flex;
  flex-flow: column;
}
.generalView__upperSection {
  display: flex;
  height: 0%;
  justify-content: center;
}
.generalView__upperSection--logo {
  height: 16%;
  widows: 16%;
  box-shadow: 3px 3px 12px black;
  position: absolute;
  top: 2%;
  left: 2%;
}
.generalView__lowerSection {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: start;
}
.generalView__dataContainer {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.generalView__dataContainer--keys {
  display: flex;
  flex-flow: column;
}
.generalView__dataContainer--values {
  display: flex;
  flex-flow: column;
}
.generalView__data {
  font-size: 3vh;
  white-space: nowrap;
  padding: 2vh 7vw;
  border: 1px solid aliceblue;
  box-shadow: 1px 1px 3px rgb(255, 255, 255);
  color: aliceblue;
  text-decoration: none;
}
.generalView__dataContainer--allLines {
  display: flex;
  justify-content: center;
  margin: 1vh 0;
  width: 100%;
  box-shadow: 1px 0px 10px rgb(110, 113, 251);
  padding: 0.7vh;
}
.generalView__dataContainer--allLines:hover,
.generalView__dataContainer--allLines:hover .data {
  box-shadow: 1px 0px 20px rgb(25, 204, 228);
  color: rgb(25, 204, 228);
}
.generalView__dataContainer--lineValues {
  padding-right: 2vw;
  white-space: nowrap;
}
.generalView__dataContainer--lineKeysContainer {
  white-space: nowrap;
  width: 100%;
}
.generalView__dataContainer--lineValuesContainer {
  width: 100%;
  white-space: nowrap;
}
.data {
  font-size: 3vh;
  white-space: nowrap;
  padding: 1.3vh 5vw;
  border: 1px solid rgba(240, 248, 255, 0.582);
  box-shadow: 1px 1px 3px black;
  color: aliceblue;
  background-color: rgba(10, 10, 192, 0.363);
  text-shadow: 2px 0px 20px rgb(255, 255, 255);
  text-decoration: none;
}
a {
  text-decoration: none;
}
</style>
