import { IngredientName } from "./ingredientes";

export type VisualConfig = {
  scaleFactor: number;
  positionY: number;
  rotation: [number, number, number];
};

export const ingredientVisualConfig = {
  ham: {
    scaleFactor: 0.8,
    positionY: 0,
    rotation: [0, 0, 0],
  },
  cheese: {
    scaleFactor: 0.8,
    positionY: 0,
    rotation: [0, 0, 0],
  },
  tomato: {
    scaleFactor: 0.8,
    positionY: 0,
    rotation: [0, 0, 0],
  },
  bread: {
    scaleFactor: 1,
    positionY: 0.15,
    rotation: [0, 0, 0],
  },
  avocado: {
    scaleFactor: 1,
    positionY: 0.15,
    rotation: [0, 0, 0],
  },
  lettuce: {
    scaleFactor: 1,
    positionY: 0.15,
    rotation: [0, 0, 0],
  },
  onion: {
    scaleFactor: 1,
    positionY: 0.15,
    rotation: [0, 0, 0],
  },
  cucumber: {
    scaleFactor: 1,
    positionY: 0.15,
    rotation: [0, 0, 0],
  },
  mushrooms: {
    scaleFactor: 1,
    positionY: 0.15,
    rotation: [0, 0, 0],
  },
  bacon: {
    scaleFactor: 1,
    positionY: 0.15,
    rotation: [0, 0, 0],
  },
  default: {
    scaleFactor: 0,
    positionY: 0,
    rotation: [0,0,0]
  }
} satisfies Record<IngredientName | "default", VisualConfig>;
