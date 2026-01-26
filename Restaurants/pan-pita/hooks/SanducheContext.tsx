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

const SandwichContext = createContext<SandwichContextType | undefined>(undefined);

interface SandwichProviderProps {
  children: ReactNode;
}

/* =======================
    ID GENERATOR (🔥 CLAVE)
======================= */
/**
 * Generador de IDs únicos para cada instancia de ingrediente.
 * Combina el timestamp con un número aleatorio para evitar colisiones.
 */
const nextId = () => Date.now() + Math.random();

/* =======================
    PROVIDER
======================= */

export const SandwichProvider: React.FC<SandwichProviderProps> = ({ children }) => {
  // Estado para el costo acumulado del sándwich
  const [total, setTotal] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  
  // Estado inicial: El sándwich nace con dos tapas de pan
  const [ingredients, setIngredients] = useState<SandwichIngredient[]>(() => [
    { id: nextId(), name: "bread" },
    { id: nextId(), name: "bread" },
  ]);

  /* =======================
      INIT SÁNDUCHE
  ======================= */
  // Asegura que al montar el componente tengamos la estructura base si el array está vacío
  useEffect(() => {
    setIngredients((prev) => {
      if (prev.length > 0) return prev; 
      return [
        { id: nextId(), name: "bread" },
        { id: nextId(), name: "bread" },
      ];
    });
  }, []);

  /* =======================
      ACTIONS
  ======================= */

  /**
   * Añade un ingrediente SIEMPRE por debajo de la tapa superior.
   * Busca el último pan de la lista para insertar el nuevo ítem justo antes.
   */
  const addIngredient = (ingredient: IngredientName) => {
    setIngredients((prev) => {
      const topBreadIndex = prev.findLastIndex(i => i.name === "bread");
  
      const newIngredient = {
        id: nextId(),
        name: ingredient,
      };
  
      const copy = [...prev];
      // Insertamos el ingrediente en la posición del pan de arriba, desplazándolo
      copy.splice(topBreadIndex, 0, newIngredient);
  
      return copy;
    });
  
    // Actualizamos el precio total sumando el costo del nuevo ingrediente
    setTotal((prev) => prev + INGREDIENTS[ingredient].price);
  };

  /**
   * Elimina un ingrediente específico por su ID.
   * Incluye validación para no permitir borrar los panes de los extremos.
   */
  const removeIngredient = (ingredient: SandwichIngredient) => {
    setIngredients((prev) => {
      const index = prev.findIndex((i) => i.id === ingredient.id);
  
      if (index === -1) return prev;
  
      // 🛡️ REGLA: No eliminar el pan base (index 0) ni el pan tapa (último index)
      if (
        ingredient.name === "bread" &&
        (index === 0 || index === prev.length - 1)
      ) {
        return prev;
      }
  
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  
    // Restamos el precio solo si el ingrediente eliminado no es pan (el pan suele ser base)
    if (ingredient.name !== "bread") {
      setTotal(
        (prev) => prev - (INGREDIENTS[ingredient.name]?.price ?? 0)
      );
    }
  };

  /**
   * Limpia el sándwich actual devolviéndolo a su estado inicial (solo pan).
   */
  const resetWithBread = () => {
    setIngredients([
      { id: nextId(), name: "bread" },
      { id: nextId(), name: "bread" },
    ]);
    setTotal(1); // Precio base
    setAddedToCart(false);
  };

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
    throw new Error("useSandwichContext debe usarse dentro de SandwichProvider");
  }
  return context;
};