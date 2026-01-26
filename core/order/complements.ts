//"Base de Datos Maestra" de tus complementos
export type Size = "S" | "M" | "L";
export type ComplementType = "fries" | "drink";

export const COMPLEMENTS = {
  fries: {
    price: { S: 1.5, M: 2.5, L: 3.5 },
    scale: { S: 1, M: 1.3, L: 1.6 },
    positionY: 0,
    rotation: [0, 0, 0],
    model: require("../../models/Burger/Fries_Box_6.glb"),
    icon: "🍟",
    
    // 🎨 UI Metadata
    name: "Papas Fritas",
    description: "Crujientes y doradas",
    color: "#FFD700",
    gradient: ["#FFC107", "#FF9800"],
  },

  drink: {
    price: { S: 1.0, M: 1.8, L: 2.5 },
    scale: { S: 1, M: 1.25, L: 1.5 },
    positionY: 0,
    rotation: [0, 0, 0],
    model: require("../../models/Burger/Cola_Cup.glb"),
    icon: "🥤",
    
    // 🎨 UI Metadata
    name: "Bebida",
    description: "Refrescante y fría",
    color: "#E53935",
    gradient: ["#E53935", "#C62828"],
  },
} as const; //Este objeto es de solo lectura y sus valores nunca van a cambiar