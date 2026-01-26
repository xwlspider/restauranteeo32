import React, { createContext, useContext, useState } from "react";
import { ComplementType, Size } from "./complements";

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
}

const OrderContext = createContext<OrderContextType | null>(null);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [extras, setExtras] = useState<ExtraItem[]>([]);

  const addExtra = (type: ComplementType, size: Size) => {
    setExtras((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), type, size },
    ]);
  };

  const removeExtra = (id: number) => {
    setExtras((prev) => prev.filter((e) => e.id !== id));
  };

  const clearOrder = () => {
    setExtras([]);
  };

  return (
    <OrderContext.Provider
      value={{ extras, addExtra, removeExtra, clearOrder }}
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
