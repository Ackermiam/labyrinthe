<template>
  <section class="Home">
    <div ref="scene" class="Scene"></div>
    <div v-if="displayMenu" class="Home__win">
      <h2>BRAVO !</h2>
      <button @click="menu()">Menu</button>
      <button @click="restart()">Recommencer</button>
      <button @click="random()">Map aléatoire</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Engine } from "../engine/engine";
import { settings } from "../composables/handleSettings";

const { triggerHome, selectedLevel } = settings();

const scene = ref();
let engine: Engine;
const displayMenu = ref(false);

let menu = () => {
  displayMenu.value = false;
  triggerHome();
}

let restart = () => {
  engine.restart();
  displayMenu.value = false;
}

let random = () => {
  selectedLevel();
  engine.restart();
  displayMenu.value = false;
};

window.addEventListener("finishLevel", () => {
  displayMenu.value = true;
});

onMounted(() => {
  displayMenu.value = false;
  engine = new Engine(scene.value);
});
</script>

<style scoped>
.Home {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

.Home__win {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(20px);
}

button {
  padding: 25px 20px;
  font-family: "Archivo";
  font-size: 2em;
  background: none;
  color: white;
  border: 3px solid white;
  cursor: pointer;
  width: 230px;
  transition: 0.3s;
  margin-bottom: 25px;
}

button:hover {
  border: 3px solid rgb(255, 59, 239);
  filter: drop-shadow(0px 0px 10px pink);
}

h2 {
  font-family: "Play";
  color: white;
  font-size: 5em;
  animation: animate infinite 4s;
}

@keyframes animate {
  0% {
    filter: drop-shadow(-5px 5px 20px #000000);
  }

  25% {
    filter: drop-shadow(0px 0px 20px #00eeff);
  }
  50% {
    filter: drop-shadow(0px 0px 20px #f700ff);
  }
  75% {
    filter: drop-shadow(0px 0px 20px #00eeff);
  }

  100% {
    filter: drop-shadow(-5px 5px 20px #000000);
  }
}
</style>
