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
import { ref } from "vue";
import {settings} from "../composables/handleSettings";

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
  font-family: 'Play';
  animation: animate infinite 4s;
}

button {
  padding: 10px 20px;
  background: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 20px;
  transition: all .3s;
}

button:hover {
  filter: drop-shadow(-5px 5px 10px #f700ff);

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
