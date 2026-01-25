import { createContext, useContext, useState } from "react";
import { IngredientName, INGREDIENTS } from "../data/ingredients";

export interface BurgerIngredient {
  id: number;
  name: IngredientName;
}

export const BurgerContext = createContext<any>(null);

export function BurgerProvider({ children }: { children: React.ReactNode }) {
  const [ingredients, setIngredients] = useState<BurgerIngredient[]>([
    { id: 1, name: "burgerBot" },
    { id: 2, name: "patty" },
    { id: 3, name: "burgerTop" },
  ]);

  const [addedToCart, setAddedToCart] = useState(false);

  const removeIngredient = (ingredient: BurgerIngredient) => {
    setIngredients((prev) => {
      const index = prev.findIndex(i => i.id === ingredient.id);
      if (index === -1) return prev;
  
      const isFirst = index === 0;
      const isLast = index === prev.length - 1;
  
      // ❌ NO eliminar el pan fijo inferior o superior
      if (
        (ingredient.name === "burgerBot" || ingredient.name === "burgerTop") &&
        (isFirst || isLast)
      ) {
        return prev;
      }
  
      // ✅ eliminar cualquier ingrediente del medio (incluidos panes)
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  };
  
  
  const total = ingredients.reduce((sum, item) => {
    return sum + (INGREDIENTS[item.name]?.price ?? 0);
  }, 0);

  const addIngredient = (name: IngredientName) => {
    setIngredients((prev) => [
      ...prev.slice(0, -1), // antes del pan de arriba
      { id: Date.now() + Math.random(), name },
      prev[prev.length - 1], // burgerTop
    ]);
  };

  return (
    <BurgerContext.Provider
      value={{
        ingredients,
        setIngredients,
        addIngredient,
        total,
        addedToCart,
        setAddedToCart,
        removeIngredient,
      }}
    >
      {children}
    </BurgerContext.Provider>
  );
}


export const useBurger = () => useContext(BurgerContext);
