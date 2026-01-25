import Ham from "../../../models/Ham_Slice.glb";
import Cheese from "../../../models/Cheese_Slice.glb";
import Tomato from "../../../models/Tomato_Slice.glb";
import Bread from "../../../models/Bread_Slice.glb"

export const INGREDIENTS = {
  ham: { src: Ham, price: 1, icon: "🍖" },
  cheese: { src: Cheese, price: 0.8, icon: "🧀" },
  tomato: { src: Tomato, price: 0.5, icon: "🍅" }, 
  bread: { src: Bread, price: 0.8, icon: "🍞" },
} as const;


// Todos los posibles
export type IngredientName = keyof typeof INGREDIENTS;

// SOLO los que se pueden agregar/quitar
export type ExtraIngredientName =
  | "ham"
  | "cheese"
  | "tomato"
  | "bread";

// Ingrediente usado en el 3D
export interface SandwichIngredient {
  id: number;
  name: IngredientName;
}
