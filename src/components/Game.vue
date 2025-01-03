<template>
  <section class="Home">
    <div ref="scene" class="Scene"></div>
    <button class="cmd" @click="isMobile = !isMobile">
      <img src="../assets/cmd.png"/>
    </button>
    <button class="details" @click="showDetails = !showDetails">?</button>
    <div v-if="showDetails" class="Popin">
      <div class="Popin__container">
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
      <button @click="menu()" class="menubutton">Aller au Menu</button>
    </div>
    <div v-if="displayMenu && !isSpeedrun" class="Home__win">
      <h2>BRAVO !</h2>
      <div class="Home__win__menu">
        <button @click="menu()" class="menubutton">Menu</button>
        <button @click="restart()" class="menubutton">Recommencer</button>
        <button @click="random()" class="menubutton">Map aléatoire</button>
      </div>
    </div>
    <div v-if="displayMenu && isSpeedrun" class="Home__win">
      <h2>BRAVO !</h2>
      <h3 v-if="isFinished">Temps total: {{ calculateAllTimeMap() }}</h3>
      <div class="Home__win__menu">
        <button @click="menu()" class="menubutton">Menu</button>
        <button
          v-if="isFinished === false"
          @click="nextSpeedrunMap()"
          class="menubutton"
        >
          Suivant
        </button>
      </div>
    </div>
    <div v-if="isSpeedrun" class="timeSpeedrun">
      <p
        v-for="(data, index) in speedrunData"
        :key="index"
        :style="
          index === currentIndexDataRun ? 'color: white' : 'color: purple'
        "
      >
        Map {{ index + 1 }} : {{ data.readableDuration }}
      </p>
    </div>
    <div v-if="!displayMenu && isMobile && !showDetails" class="controlsMobile">
      <div class="controlsMobile__container">
        <button
          class="controlsMobile--up"
          @touchstart.prevent="sendMoveMob('z')"
          @touchend.prevent="sendStopMoveMob('z')"
        >
          Z
        </button>
        <button
          class="controlsMobile--bottom"
          @touchstart.prevent="sendMoveMob('s')"
          @touchend.prevent="sendStopMoveMob('s')"
        >
          S
        </button>
        <button
          class="controlsMobile--left"
          @touchstart.prevent="sendMoveMob('q')"
          @touchend.prevent="sendStopMoveMob('q')"
        >
          Q
        </button>
        <button
          class="controlsMobile--right"
          @touchstart.prevent="sendMoveMob('d')"
          @touchend.prevent="sendStopMoveMob('d')"
        >
          D
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { Engine } from "../engine/engine";
import { settings } from "../composables/handleSettings";
import { speedrunSettings } from "../composables/speedrunSettings";

const { triggerHome, selectedLevel, isSpeedrun, chosenLevel } = settings();
const {
  isFinished,
  selectedSpeedrunLevel,
  currentIndexDataRun,
  speedrunData,
  resetSpeedrunData,
  calculateAllTimeMap,
} = speedrunSettings();

let engine: Engine;

const scene = ref();
const displayMenu = ref(false);
const showDetails = ref(false);
const isMobile = ref(false);

const menu = () => {
  resetSpeedrunData();
  displayMenu.value = false;
  isSpeedrun.value = false;
  isFinished.value = false;
  triggerHome();
};

const moveMob = (dir: string) => {
  return new CustomEvent("mobileTouch", { detail: dir });
};
const stopMoveMob = (dir: string) => {
  return new CustomEvent("stopMobileTouch", { detail: dir });
};

const restart = () => {
  engine.restart(chosenLevel.value);
  displayMenu.value = false;
};

const random = () => {
  selectedLevel();
  engine.restart(chosenLevel.value);
  displayMenu.value = false;
};

const nextSpeedrunMap = () => {
  const level = selectedSpeedrunLevel();
  engine.restart(level);
  displayMenu.value = false;
};

window.addEventListener("finishLevel", () => {
  displayMenu.value = true;
});

window.addEventListener("finishSpeedrunLevel", () => {
  displayMenu.value = true;
});

const sendMoveMob = (dir: string) => {
  window.dispatchEvent(moveMob(dir));
};
const sendStopMoveMob = (dir: string) => {
  window.dispatchEvent(stopMoveMob(dir));
};

watch(isFinished, (newFinished) => {
  setTimeout(() => {
    alert(calculateAllTimeMap());
  }, 100);
});

onMounted(() => {
  displayMenu.value = false;
  engine = new Engine(scene.value);
  isMobile.value = window.innerWidth < 1000 ? true : false
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
  text-align: center;
}

.menubutton {
  padding: 25px 20px;
  font-family: "Archivo";
  font-size: 2em;
  background: none;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  width: 230px;
  transition: 0.3s;
  margin: 10px;
}

.menubutton:hover, .details:hover {
  border: 2px solid rgb(121, 19, 146);
  filter: drop-shadow(0px 0px 10px pink);
}

.cmd:hover {
  filter: drop-shadow(0px 0px 10px pink);
}

button {
  transition: all 0.3s;
  cursor: pointer;
}

h2 {
  font-family: "Play";
  color: white;
  font-size: 5em;
  animation: animate infinite 4s;
}

h3 {
  color: white;
  font-size: 3em;
  font-family: "Archivo";
}

.Popin {
  position: absolute;
  backdrop-filter: blur(30px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  text-align: center;
  width: 50%;
  height: 50%;
}

@media (max-width: 1000px) {
  h2 {
    font-size: 10vw;
    margin: 0 0 20px 0;
  }

  h3 {
    margin: 0;
  }

  .menubutton {
    width: 180px;
    font-size: 1.4em;
    margin: 10px;
  }

  .Home__win__menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .Popin {
    width: 80%;
    height: 60%;
    padding: 15px 0;
  }
}

.details {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0 10px;
  width: auto;
  font-size: 25px;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0);
  background: none;
}

.cmd {
  position: absolute;
  top: 8px;
  right: 70px;
  border: none;
  background: none;
}

.cmd img {
  width: 35px;
  height: auto;
}

.Popin__container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
}

.Popin__controls p {
  border: 2px solid white;
  padding: 10px 15px;
  margin: 15px;
}

.Popin__controls {
  margin: 15px;
}

.timeSpeedrun {
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.137);
  padding: 10px;
  border-radius: 8px;
  width: 180px;
  animation: animateSpeedrun 5s infinite;
}

.timeSpeedrun p {
  margin: 0 0 10px 0;
}
.timeSpeedrun p:last-child {
  margin: 0;
}

.controlsMobile {
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 145px;
  height: 145px;
}

.controlsMobile__container button {
  height: 47px;
  width: 47px;
  border: 2px solid rgba(255, 255, 255, 0.479);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
}

.controlsMobile__container {
  position: relative;
  height: 100%;
}

.controlsMobile--up {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.controlsMobile--bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.controlsMobile--left {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.controlsMobile--right {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
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
@keyframes animateSpeedrun {
  0% {
    box-shadow: 0 0px 28px rgba(234, 0, 255, 0.25),
      0 0px 10px rgba(225, 0, 255, 0.22);
  }

  25% {
    box-shadow: 0 0px 28px rgba(0, 217, 255, 0.25),
      0 0px 10px rgba(0, 217, 255, 0.25);
  }
  50% {
    box-shadow: 0 0px 28px rgba(234, 0, 255, 0.25),
      0 0px 10px rgba(225, 0, 255, 0.22);
  }
  75% {
    box-shadow: 0 0px 28px rgba(0, 217, 255, 0.25),
      0 0px 10px rgba(0, 217, 255, 0.25);
  }

  100% {
    box-shadow: 0 0px 28px rgba(234, 0, 255, 0.25),
      0 0px 10px rgba(225, 0, 255, 0.22);
  }
}
</style>
