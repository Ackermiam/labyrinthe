import { ref, reactive } from "vue";

const currentIndexDataRun = ref(0);
let startTime: number;
let elapsedTime = ref(0);
let timerInterval: number;
const time = ref(0);
const readableTime = ref("");
const isFinished = ref(false);

const speedrunData = reactive([
  {
    mapIndex: 0,
    duration: 0,
    readableDuration: "",
    begin: false,
    finished: false,
  },
  {
    mapIndex: 1,
    duration: 0,
    readableDuration: '',
    begin: false,
    finished: false
  },
  {
    mapIndex: 4,
    duration: 0,
    readableDuration: '',
    begin: false,
    finished: false
  },
  {
    mapIndex: 7,
    duration: 0,
    readableDuration: '',
    begin: false,
    finished: false
  },
  {
    mapIndex: 8,
    duration: 0,
    readableDuration: '',
    begin: false,
    finished: false
  }
]);

const startTimer = () => {
  time.value = 0;
  startTime = performance.now();
  timerInterval = setInterval(() => {
    elapsedTime.value = performance.now() - startTime;
    time.value = Math.floor(elapsedTime.value);
    readableTime.value = formatTime(elapsedTime.value);
    speedrunData[currentIndexDataRun.value].duration = time.value;
    speedrunData[currentIndexDataRun.value].readableDuration =
      readableTime.value;
  }, 100);
};

const stopTimer = () => {
  clearInterval(timerInterval);
};

const formatTime = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor(ms % 1000);
  return `${minutes}m ${seconds < 10 ? "0" : ""}${seconds}s ${
    milliseconds < 100 ? "000" : milliseconds
  }ms`;
};

window.addEventListener("finishSpeedrunLevel", () => {
  speedrunData[currentIndexDataRun.value].duration = time.value;
  speedrunData[currentIndexDataRun.value].readableDuration = readableTime.value;
  stopTimer();
  speedrunData[currentIndexDataRun.value].finished = true;
  currentIndexDataRun.value++;
  if (currentIndexDataRun.value === speedrunData.length) {
    isFinished.value = true;
  }
});

window.addEventListener("beginSpeedrunLevel", () => {
  startTimer();
});

export const speedrunSettings = () => {
  const selectedSpeedrunLevel = () => {
    if (isFinished.value === true) {
      return;
    } else {
      return speedrunData[currentIndexDataRun.value].mapIndex;
    }
  };

  const resetSpeedrunData = () => {
    currentIndexDataRun.value = 0;
    speedrunData.forEach((map) => {
      map.duration = 0;
      map.readableDuration = "";
    });
  };

  const calculateAllTimeMap = () => {
    let finalTime = 0;
    speedrunData.forEach((duration) => {
      finalTime += duration.duration;
    });
    return formatTime(finalTime);
  };

  return {
    selectedSpeedrunLevel,
    resetSpeedrunData,
    calculateAllTimeMap,
    isFinished,
    currentIndexDataRun,
    speedrunData,
  };
};
