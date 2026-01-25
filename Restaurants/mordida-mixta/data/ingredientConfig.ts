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
