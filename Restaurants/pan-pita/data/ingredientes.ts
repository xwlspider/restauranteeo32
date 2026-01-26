import Ham from "../../../models/Ham_Slice.glb";
import Cheese from "../../../models/Cheese_Slice.glb";
import Tomato from "../../../models/Tomato_Slice.glb";
import Bread from "../../../models/Bread_Slice.glb"
import Avocado from "../../../models/Avocado_Slice.glb"
import Lettuce from "../../../models/Lettuce_Slice.glb"
import Onion from "../../../models/Onion_Slice.glb"
import Cucumber from "../../../models/Cucumber_Slice.glb"
import Bacon from "../../../models/Bacon_Slice.glb"
import Mushrooms from "../../../models/Mushroom_Slice.glb"


export const INGREDIENTS = {
  ham: { src: Ham, price: 1, icon: "🍖" },
  cheese: { src: Cheese, price: 0.8, icon: "🧀" },
  tomato: { src: Tomato, price: 0.5, icon: "🍅" }, 
  bread: { src: Bread, price: 0.8, icon: "🍞" },
  avocado: { src: Avocado, price: 0.5, icon: "🥑" },
  lettuce: { src: Lettuce, price: 0.5, icon: "🥬" },
  onion: { src: Onion, price: 0.5, icon: "🧅" },
  cucumber: { src: Cucumber, price: 0.5, icon: "🥒" },
  bacon: { src: Bacon, price: 0.5, icon: "🥓" },
  mushrooms: { src: Mushrooms, price: 0.5, icon: "🍄" },
 
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
