<template>
  <section class="Home">
    <div ref="scene" class="Scene"></div>
    <button v-if="displayButton" @click="forceReload()">Recommencer</button>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Engine } from "../engine/engine";

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
  padding: 50px 80px;
  background: white;
  border: 3px solid pink;
  cursor: pointer;
}
</style>
