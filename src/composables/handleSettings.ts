import { ref } from "vue";
import { layers } from "../engine/data/layers/layers";
import { speedrunSettings } from "./speedrunSettings";

const { speedrunData } = speedrunSettings();

const display = ref('Home');
const chosenLevel = ref(0);
const isSpeedrun = ref(false);

export const settings = () => {
  const choseLevel = () => {
    const random = Math.floor(Math.random() * layers.length);
    return random;
  }

  const selectedLevel = (selected?: number) => {
    const chosen =  selected != undefined ? selected : choseLevel();
    chosenLevel.value = chosen
  }

  const selectSpeedrun = () => {
    isSpeedrun.value = true;
    chosenLevel.value = speedrunData[0].mapIndex;
    display.value = 'Game'
  }

  const triggerHome = () => {
    display.value = 'Home';
  }

  const triggerGame = (layer?: number) => {
    selectedLevel(layer);
    display.value = 'Game';
  }

  const triggerArcadeMode = () => {
    display.value = 'Arcade';
  }

  return {
    display,
    chosenLevel,
    isSpeedrun,
    triggerHome,
    triggerGame,
    triggerArcadeMode,
    selectedLevel,
    selectSpeedrun,
    choseLevel
  }
}