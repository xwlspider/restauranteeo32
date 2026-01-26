import { IngredientName } from "./ingredients";

export type VisualConfig = {
  scaleFactor: number;
  positionY: number;
  rotation: [number, number, number];
};

export const ingredientVisualConfig = {
  burgerTop: {
    scaleFactor: 90,
    positionY: 0.18,
    rotation: [0, 0, 0],
  },
  burgerBot: {
    scaleFactor: 90,
    positionY: 0,
    rotation: [0, 0, 0],
  },
  avocado: {
    scaleFactor: 1,
    positionY: 0,
    rotation: [0, 0, 0],
  },
  cheese: {
    scaleFactor: 1,
    positionY: 0,
    rotation: [0, 0, 0],
  },
  lettuce: {
    scaleFactor: 1,
    positionY: 0,
    rotation: [0, 0, 0],
  },
  tomato: {
    scaleFactor: 1,
    positionY: 0,
    rotation: [0, 0, 0],
  },
  onion: {
    scaleFactor: 1,
    positionY: 0,
    rotation: [0, 0, 0],
  },
  bacon: {
    scaleFactor: 1,
    positionY: 0,
    rotation: [0, 0, 0],
  }, 
  egg: {
    scaleFactor: 1,
    positionY: 0,
    rotation: [0, 0, 0],
  }, 
  patty: {
    scaleFactor: 1,
    positionY: 0,
    rotation: [0, 0, 0],
  },
  default: {
    scaleFactor: 1,
    positionY: 0,
    rotation: [0, 0, 0],
  },
} satisfies Record<IngredientName | "default", VisualConfig>;
//Verifica que este objeto cumpla con esta forma, pero mantén la identidad de mis datos reales
