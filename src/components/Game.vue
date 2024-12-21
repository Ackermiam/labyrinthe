<template>
  <section class="Home">
    <div ref="scene" class="Scene"></div>
    <button v-if="displayButton" @click="triggerHome()">Recommencer</button>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Engine } from "../engine/engine";
import {settings} from "../composables/handleSettings";

const { triggerHome } = settings();

const scene = ref();
let engine;

const displayButton = ref(false)

window.addEventListener("finishLevel", () => {
  displayButton.value = true
})

const forceReload = () => {
  window.location.reload();
}

onMounted(() => {
  engine = new Engine(scene.value);
});
</script>

<style scoped>
.Home {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px 20px;
  font-family: 'Play';
  background: none;
  color: white;
  border: 3px solid white;
  cursor: pointer;
  width: 230px;
  backdrop-filter: blur(20px);
  transition: .3s;
}

button:hover {
border: 3px solid rgb(255, 59, 239);
filter: drop-shadow(0px 0px 10px pink)
}
</style>
