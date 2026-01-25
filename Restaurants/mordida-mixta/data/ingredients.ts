import BurgerTop from "../../../models/Burger/Bun_Slice_Top.glb";
import BurgerBot from "../../../models/Burger/Bun_Slice_Bot.glb";
import Patty from "../../../models/Patty_Slice.glb";

export const INGREDIENTS = {
  burgerTop: { src: BurgerTop, price: 0.5, icon: "🍔" },
  burgerBot: { src: BurgerBot, price: 0.5, icon: "🍔" },
  patty: { src: Patty, price: 2, icon: "🥩" },
} as const;

export type IngredientName = keyof typeof INGREDIENTS;

export interface BaseIngredient {
  id: number;
  name: IngredientName;
}
