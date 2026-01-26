export type Size = "S" | "M" | "L";
export type ComplementType = "fries" | "drink";

export const COMPLEMENTS = {
  fries: {
    price: { S: 1.5, M: 2.5, L: 3.5 },
    scale: { S: 0.8, M: 1, L: 1.3 },
    model: require("../../models/Burger/Fries_Box_6.glb"),
    icon: "🍟",
  },

  drink: {
    price: { S: 1.0, M: 1.8, L: 2.5 },
    scale: { S: 0.7, M: 1, L: 1.4 },
    model: require("../../models/Burger/Cola_Cup.glb"),
    icon: "🥤",
  },
} as const;
