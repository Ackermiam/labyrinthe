<template>
  <div class="Home">
    <h1>Mode Arcade</h1>
    <h2>Choisis ta map</h2>
    <div class="Home__levels">
      <div class="Home__levels__level" v-for="(level, index) in layers" :key="index">
        <button @click="triggerGame(index)">{{ level.name }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {settings} from "../composables/handleSettings";
import {layers} from "../engine/data/layers/layers";

const { triggerGame } = settings();
</script>

<style scoped>
.Home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  background: black;
  padding: 50px 0;
}

.Home__levels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 900px) {
  .Home__levels {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .Home__levels {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}

.Home__levels__level {
margin: 20px;
text-align: center;
}

h1 {
  color: white;
  font-size: 6em;
  font-family: 'Play';
  animation: animate infinite 4s;
  text-align: center;
}

h2 {
  color: white;
  font-size: 2em;
  font-family: 'Play';
}

button {
  padding: 25px 20px;
  font-family: 'Play';
  background: none;
  color: white;
  border: 3px solid white;
  cursor: pointer;
  width: 230px;
  backdrop-filter: blur(20px);
  transition: .3s;
  margin-right: 15px;
}

button:hover {
border: 3px solid rgb(255, 59, 239);
filter: drop-shadow(0px 0px 10px pink)
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
