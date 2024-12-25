<template>
  <section class="Home">
    <div ref="scene" class="Scene"></div>
    <button class="details" @click="showDetails = !showDetails">?</button>
    <div v-if="showDetails" class="Popin">
      <div class="Popin__controls">
        <p>Z</p>
        <span>Avancer</span>
      </div>
      <div class="Popin__controls">
        <p>Q</p>
        <span>Gauche</span>
      </div>
      <div class="Popin__controls">
        <p>S</p>
        <span>Reculer</span>
      </div>
      <div class="Popin__controls">
        <p>D</p>
        <span>Droite</span>
      </div>
    </div>
    <div v-if="displayMenu && !isSpeedrun" class="Home__win">
      <h2>BRAVO !</h2>
      <button @click="menu()">Menu</button>
      <button @click="restart()">Recommencer</button>
      <button @click="random()">Map aléatoire</button>
    </div>
    <div v-if="displayMenu && isSpeedrun" class="Home__win">
      <h2>BRAVO !</h2>
      <button @click="menu()">Menu</button>
      <button @click="restart()">Suivant</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Engine } from "../engine/engine";
import { settings } from "../composables/handleSettings";
import { speedrunSettings } from "../composables/speedrunSettings";

const { triggerHome, selectedLevel, isSpeedrun } = settings();
const { incrementIndexDataRun }                  = speedrunSettings();

let engine: Engine;

const scene       = ref();
const displayMenu = ref(false);
const showDetails = ref(false);

let menu = () => {
  displayMenu.value = false;
  isSpeedrun.value  = false;
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

let nextSpeedrunMap = () => {
  incrementIndexDataRun();
  restart();
}

window.addEventListener("finishLevel", () => {
  displayMenu.value = true;
});

window.addEventListener("finishSpeedrunLevel", () => {
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

.details {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0 10px;
  width: auto;
  font-size: 25px;
}

.Popin {
  position: absolute;
  width: 60%;
  height: 60%;
  backdrop-filter: blur(30px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  text-align: center;
}

.Popin__controls p {
  border: 2px solid white;
  width: 60px;
  padding: 10px 0;
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
