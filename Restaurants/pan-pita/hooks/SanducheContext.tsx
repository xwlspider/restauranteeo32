import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  INGREDIENTS,
  IngredientName,
  SandwichIngredient,
} from "../data/ingredientes";

/* =======================
   TYPES
======================= */

interface SandwichContextType {
  ingredients: SandwichIngredient[];
  total: number;
  addedToCart: boolean;
  addIngredient: (ingredient: IngredientName) => void;
  removeIngredient: (ingredient: SandwichIngredient) => void;
  setAddedToCart: (value: boolean) => void;
  resetWithBread: () => void;
}

const SandwichContext = createContext<SandwichContextType | undefined>(
  undefined
);

interface SandwichProviderProps {
  children: ReactNode;
}

/* =======================
   ID GENERATOR (🔥 CLAVE)
======================= */

let ingredientId = 0;
const nextId = () => Date.now() + Math.random();

/* =======================
   PROVIDER
======================= */

export const SandwichProvider: React.FC<SandwichProviderProps> = ({
  children,
}) => {

  const [total, setTotal] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [ingredients, setIngredients] = useState<SandwichIngredient[]>(() => [
    { id: nextId(), name: "bread" },
  { id: nextId(), name: "bread" },
    ]);
  /* =======================
     INIT SÁNDUCHE
  ======================= */

  useEffect(() => {
    setIngredients([
      { id: nextId(), name: "bread" },
      { id: nextId(), name: "bread" },
    ]);
    setTotal(1);
    setAddedToCart(false);
  }, []);

  /* =======================
     ACTIONS
  ======================= */

  const addIngredient = (ingredient: IngredientName) => {
    setIngredients((prev) => {
      const topBreadIndex = prev.findLastIndex(i => i.name === "bread");
  
      const newIngredient = {
        id: nextId(),
        name: ingredient,
      };
  
      const copy = [...prev];
      copy.splice(topBreadIndex, 0, newIngredient);
  
      return copy;
    });
  
    setTotal((prev) => prev + INGREDIENTS[ingredient].price);
  };
  

  const removeIngredient = (ingredient: SandwichIngredient) => {
    setIngredients((prev) => {
      const index = prev.findIndex((i) => i.id === ingredient.id);
  
      // ❌ no encontrado
      if (index === -1) return prev;
  
      // ❌ no eliminar pan fijo (primero y último)
      if (
        ingredient.name === "bread" &&
        (index === 0 || index === prev.length - 1)
      ) {
        return prev;
      }
  
      // ✅ eliminar
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  
    // ajustar total solo si NO es pan
    if (ingredient.name !== "bread") {
      setTotal(
        (prev) => prev - (INGREDIENTS[ingredient.name]?.price ?? 0)
      );
    }
  };
  

  const resetWithBread = () => {
    setIngredients([
      { id: nextId(), name: "bread" },
      { id: nextId(), name: "bread" },
    ]);
    setTotal(1);
    setAddedToCart(false);
  };

  /* =======================
     PROVIDER
  ======================= */

  return (
    <SandwichContext.Provider
      value={{
        ingredients,
        total,
        addedToCart,
        addIngredient,
        removeIngredient,
        setAddedToCart,
        resetWithBread,
      }}
    >
      {children}
    </SandwichContext.Provider>
  );
};

/* =======================
   HOOK
======================= */

export const useSandwichContext = () => {
  const context = useContext(SandwichContext);
  if (!context) {
    throw new Error(
      "useSandwichContext debe usarse dentro de SandwichProvider"
    );
  }
  return context;
};
