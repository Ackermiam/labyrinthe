<template>
  <div class="Home">
    <h1>Labyrinthe</h1>
    <div class="Home__Buttons">
      <button @click="triggerGame()">Aleatoire</button>
      <button @click="triggerArcadeMode()">Arcade</button>
      <button @click="selectSpeedrun()">Speedrun</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { settings } from "../composables/handleSettings";

const { triggerArcadeMode, triggerGame, selectSpeedrun } = settings();
</script>

<style scoped>
.Home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: black;
}

.Home__Buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

h1 {
  color: white;
  font-size: 5vw;
  font-family: "Play";
  animation: animate infinite 4s;
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
  backdrop-filter: blur(20px);
  transition: 0.3s;
  margin: 15px;
}

@media (max-width: 900px) {
  h1 {
    font-size: 10vw;
  }

  button {
    width: 180px;
    font-size: 1.4em;
  }

  .Home__Buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

button:hover {
  border: 3px solid rgb(255, 59, 239);
  filter: drop-shadow(0px 0px 10px pink);
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
