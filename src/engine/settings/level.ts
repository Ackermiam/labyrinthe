import { layers } from "../data/layers/layers";

export const choseLevel = () => {
  const random = Math.floor(Math.random() * layers.length);
  return layers[random];
}