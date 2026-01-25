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
  default: {
    scaleFactor: 1,
    positionY: 0,
    rotation: [0, 0, 0],
  },
} satisfies Record<IngredientName | "default", VisualConfig>;
