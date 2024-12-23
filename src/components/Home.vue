<template>
  <div class="Home">
    <h1>Labyrinthe</h1>
    <div class="Home__Buttons">
      <button @click="triggerGame()">Aleatoire</button>
      <button @click="triggerArcadeMode()">Levels</button>
      <button>Performance</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { settings } from "../composables/handleSettings";

const { triggerArcadeMode, triggerGame } = settings();
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
}

h1 {
  color: white;
  font-size: 6em;
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
  margin-right: 15px;
}

button:hover {
  border: 3px solid rgb(255, 59, 239);
  filter: drop-shadow(0px 0px 10px pink);
}

button:last-child {
  margin-right: 0px;
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
