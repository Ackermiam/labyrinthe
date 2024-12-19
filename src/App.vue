<template>
  <div class="Home">
    <Game v-if="display === 'Game'"/>
    <Arcade v-if="display === 'Arcade'"/>
    <Home v-if="display === 'Home'"/>
  </div>
</template>

<script setup lang="ts">
import Game from "./components/Game.vue";
import Home from "./components/Home.vue";
import Arcade from "./components/Arcade.vue";
import {settings} from "./composables/handleSettings";

const { display } = settings();
</script>

<style scoped>

</style>
