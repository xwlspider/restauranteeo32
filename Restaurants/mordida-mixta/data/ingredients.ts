import BurgerTop from "../../../models/Burger/Bun_Slice_Top.glb";
import BurgerBot from "../../../models/Burger/Bun_Slice_Bot.glb";
import Patty from "../../../models/Patty_Slice.glb";
import Avocado from "../../../models/Avocado_Slice.glb";
import Cheese from "../../../models/Cheese_Slice.glb";
import Lettuce from "../../../models/Lettuce_Slice.glb";
import Tomato from "../../../models/Tomato_Slice.glb";
import Onion from "../../../models/Onion_Slice.glb";
import Bacon from "../../../models/Bacon_Slice.glb";
import Egg from "../../../models/Egg_Slice.glb";

export const INGREDIENTS = {
  burgerTop: { src: BurgerTop, price: 0.5, icon: "🍔" },
  burgerBot: { src: BurgerBot, price: 0.5, icon: "🍔" },
  
  avocado: { src: Avocado, price: 1, icon: "🥑" },
  cheese: { src: Cheese, price: 1, icon: "🧀" },
  lettuce: { src: Lettuce, price: 1, icon: "🥬" },
  tomato: { src: Tomato, price: 1, icon: "🍅" },
  onion: { src: Onion, price: 1, icon: "🧅" },
  bacon: { src: Bacon, price: 2, icon: "🥓" },
  egg: { src: Egg, price: 1, icon: "🥚" },

  patty: { src: Patty, price: 2, icon: "🥩" },
} as const;
//Este objeto es de solo lectura y sus valores nunca van a cambiar

export type IngredientName = keyof typeof INGREDIENTS;

export interface BaseIngredient {
  id: number;
  name: IngredientName;
}
