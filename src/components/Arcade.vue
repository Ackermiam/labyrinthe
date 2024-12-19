<template>
  <div class="Home">
    <h1>Mode Arcade</h1>
    <div class="Home__levels">
      <div class="Home__levels__level" v-for="(level, index) in layers" :key="index">
        <h3>{{ level.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
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
  height: 100vh;
  width: 100vw;
  background: black;
}

.Home__levels {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 90%;
}

.Home__levels__level {
background: none;
color: white;
border: 2px solid white;
border-radius: 8px;
margin: 20px;
text-align: center;
width: 230px;
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
  border: 1px solid pink;
  border-radius: 4px;
  cursor: pointer;
  transition: all .3s;
  font-family: 'Play';
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
