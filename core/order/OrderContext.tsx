//"Motor de Ventas" de tu aplicación. 
// Es el lugar donde se gestiona el carrito de compras de los extras.
// Aquí es cómo pasamos de una simple lista de objetos a un precio real que el usuario puede ver
import React, { createContext, useContext, useState, useMemo } from "react";
import { ComplementType, Size, COMPLEMENTS } from "./complements";

export interface ExtraItem {
  id: number;
  type: ComplementType;
  size: Size;
}

interface OrderContextType {
  extras: ExtraItem[];
  addExtra: (type: ComplementType, size: Size) => void;
  removeExtra: (id: number) => void;
  clearOrder: () => void;
  totalExtrasPrice: number; // <-- Nueva propiedad
}

const OrderContext = createContext<OrderContextType | null>(null);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [extras, setExtras] = useState<ExtraItem[]>([]);

  // Usamos useMemo para que el total solo se recalcule si cambian los extras
  const totalExtrasPrice = useMemo(() => {
    return extras.reduce((total, e) => {
      return total + COMPLEMENTS[e.type].price[e.size];
    }, 0);
  }, [extras]);

  //Generación de IDs únicos: Permite gestionar múltiples ítems del mismo tipo de forma independiente
  const addExtra = (type: ComplementType, size: Size) => {
    setExtras((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), type, size },
    ]);
  };

  // Crear una nueva lista donde "viven" 
  // todos los elementos excepto el que tiene el ID que quieres quitar
  const removeExtra = (id: number) => {
    setExtras((prev) => prev.filter((e) => e.id !== id));
  };

  const clearOrder = () => {
    setExtras([]);
  };

  return (
    <OrderContext.Provider
      value={{ extras, addExtra, removeExtra, clearOrder, totalExtrasPrice }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder debe usarse dentro de OrderProvider");
  return ctx;
};