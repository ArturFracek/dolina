<template>
  <div class="lineView">
    <div class="lineView__upperSection">
      <img
        alt="Vue logo"
        src="../assets/logo.png"
        class="lineView__upperSection--logo"
      />
    </div>
    <div class="lineView__lowerSection">
      <div class="lineView__dataContainer">
        <div class="lineView__dataContainer--keys">
          <div
            v-for="(value, index) in Object.keys(line)"
            :key="index"
            class="lineView__data lineView__data--keys"
          >
            {{ value }}
          </div>
        </div>
        <div class="lineView__dataContainer--values">
          <div
            v-for="(value, index) in line"
            :key="index"
            class="lineView__data lineView__data--values"
          >
            {{ value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchLineById } from "../mockedData/index";

export default {
  data() {
    return {
      line: null,
    };
  },
  name: "lineView",
  watch: {
    "$route.params.lineId": {
      immediate: true,
      async handler(lineId) {
        if (!lineId) return;
        await this.loadLineById(lineId);
      },
    },
  },
  methods: {
    async loadLineById(id) {
      this.line = await fetchLineById(id);
    },
  },
};
</script>
<style scoped>
.lineView {
  height: 90%;
  display: flex;
  flex-flow: column;
}
.lineView__upperSection {
  display: flex;
  height: 0%;
  justify-content: start;
}
.lineView__upperSection--logo {
  height: 16%;
  widows: 16%;
  box-shadow: 3px 3px 12px black;
  position: absolute;
  top: 2%;
  left: 2%;
}
.lineView__lowerSection {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.lineView__dataContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  border: 1px solid black;
  box-shadow: 0px 0px 20px rgba(57, 124, 212, 0.993);
}
.lineView__dataContainer--keys {
  display: flex;
  flex-flow: column;
}
.lineView__dataContainer--values {
  display: flex;
  flex-flow: column;
}
.lineView__data {
  font-size: 3vh;
  white-space: nowrap;
  padding: 2vh 7vw;
  border: 1px solid rgba(240, 248, 255, 0.582);
  box-shadow: 1px 1px 3px black;
  color: aliceblue;
  background-color: rgba(10, 10, 192, 0.363);
  text-shadow: 2px 0px 20px rgb(129, 151, 250);
}
.lineView__data--keys {
}
.lineView__data--values {
}
</style>
