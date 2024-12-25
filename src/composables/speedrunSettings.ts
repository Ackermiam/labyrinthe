import { ref } from "vue";

const currentIndexDataRun = ref(0);
const currentTime = ref(0);
const isFinished = ref(false);

const speedrunData = [
  {
    mapIndex: 0,
    duration: 0,
    begin: false,
    finished: false
  },
  {
    mapIndex: 6,
    duration: 0,
    begin: false,
    finished: false
  },
  /*{
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
  },*/
]

window.addEventListener("finishSpeedrunLevel", () => {
  speedrunData[currentIndexDataRun.value].finished = true;
  currentIndexDataRun.value++
  if(currentIndexDataRun.value === speedrunData.length) {
    console.log('egal !')
    isFinished.value = true;
    console.log(isFinished.value)
  }
})

export const speedrunSettings = () => {
  const resetTime = () => {
    currentTime.value = 0
  };

  const selectedSpeedrunLevel = () => {
    if (isFinished.value === true) {
      return
    } else {
      return speedrunData[currentIndexDataRun.value].mapIndex
    }
  }

  return {
    resetTime,
    selectedSpeedrunLevel,
    isFinished,
    currentIndexDataRun
  }
}