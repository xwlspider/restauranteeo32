import { createContext, useContext, useState } from "react";
import { IngredientName, INGREDIENTS } from "../data/ingredients";

// Definición de la estructura de un ingrediente dentro de la burger activa
export interface BurgerIngredient {
  id: number;
  name: IngredientName;
}

// Creamos el contexto (la "nube" de datos) para la hamburguesa
export const BurgerContext = createContext<any>(null);

export function BurgerProvider({ children }: { children: React.ReactNode }) {
  // Estado inicial: Una burger básica con pan de abajo, pan de arriba
  const [ingredients, setIngredients] = useState<BurgerIngredient[]>([
    { id: 1, name: "burgerBot" },
    { id: 3, name: "burgerTop" },
  ]);

  // Estado para saber si la burger ya se envió al carrito (bloquea ediciones)
  const [addedToCart, setAddedToCart] = useState(false);

  /**
   * Lógica inteligente para eliminar ingredientes:
   * Protege los panes externos pero permite quitar cualquier cosa del medio.
   */
  const removeIngredient = (ingredient: BurgerIngredient) => {
    setIngredients((prev) => {
      const index = prev.findIndex(i => i.id === ingredient.id);
      if (index === -1) return prev; // Si no existe, no hacemos nada
  
      const isFirst = index === 0;
      const isLast = index === prev.length - 1;
  
      // 🛡️ REGLA DE ORO: No eliminar el pan inferior (index 0) ni el superior (último)
      if (
        (ingredient.name === "burgerBot" || ingredient.name === "burgerTop") &&
        (isFirst || isLast)
      ) {
        return prev; // Operación cancelada
      }
  
      // ✅ Si es un ingrediente del medio, lo removemos usando una copia del array
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  };
  
  // 💰 CÁLCULO DEL TOTAL: Suma el precio de cada pieza buscando en la base de datos INGREDIENTS
  const total = ingredients.reduce((sum, item) => {
    return sum + (INGREDIENTS[item.name]?.price ?? 0);
  }, 0);

  /**
   * Lógica para añadir ingredientes:
   * Siempre inserta el nuevo ingrediente JUSTO DEBAJO del pan de arriba (burgerTop).
   */
  const addIngredient = (name: IngredientName) => {
    setIngredients((prev) => [
      ...prev.slice(0, -1), // Todos los ingredientes excepto el último (pan de arriba)
      { id: Date.now() + Math.random(), name }, // El nuevo ingrediente con ID único
      prev[prev.length - 1], // Volvemos a poner el pan de arriba al final
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
// Hook personalizado para usar la data de la burger de forma sencilla
export const useBurger = () => useContext(BurgerContext);