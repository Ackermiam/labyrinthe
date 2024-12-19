import { ref } from "vue";

const display = ref('Home')

export const settings = () => {

  const triggerHome = () => {
    display.value = 'Home';
  }

  const triggerGame = () => {
    display.value = 'Game';
  }

  const triggerArcadeMode = () => {
    display.value = 'Arcade';
  }

  return {
    display,
    triggerHome,
    triggerGame,
    triggerArcadeMode
  }
}