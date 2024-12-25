import { ref } from "vue";
import { layers } from "../engine/data/layers/layers";

const currentIndexDataRun = ref(0);
const currentTime = ref(0);

const speedrunData = [
  {
    mapIndex: 0,
    duration: 0,
    begin: false,
    finished: false
  },
  {
    mapIndex: 1,
    duration: 0,
    begin: false,
    finished: false
  },
  {
    mapIndex: 4,
    duration: 0,
    begin: false,
    finished: false
  },
  {
    mapIndex: 7,
    duration: 0,
    begin: false,
    finished: false
  },
  {
    mapIndex: 8,
    duration: 0,
    begin: false,
    finished: false
  },
]

export const speedrunSettings = () => {
  const resetTime = () => {
    currentTime.value = 0
  };

  const incrementIndexDataRun = () => {
    if (currentIndexDataRun.value > 4) return;
    currentIndexDataRun.value++
  }

  const selectedSpeedrunLevel = () => {
    return speedrunData[currentIndexDataRun.value].mapIndex
  }

  return {
    resetTime,
    incrementIndexDataRun,
    selectedSpeedrunLevel
  }
}