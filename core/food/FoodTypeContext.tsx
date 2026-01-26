//define qué "camino" va a tomar el usuario: si se va por el flujo del Sándwich o por el de la Hamburguesa.
import React, { createContext, useContext, useState } from "react";

//Definimos las opciones válidas para el tipo de comida, usando null como valor inicial por defecto
type FoodType = "sandwich" | "burger" | null;

interface FoodTypeContextType {
  foodType: FoodType;
  setFoodType: (type: FoodType) => void;
}

const FoodTypeContext = createContext<FoodTypeContextType | undefined>(undefined);

export const FoodTypeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [foodType, setFoodType] = useState<FoodType>(null);

  return (
    <FoodTypeContext.Provider value={{ foodType, setFoodType }}>
      {children}
    </FoodTypeContext.Provider>
  );
};
//Hook personalizado para acceder fácilmente al tipo de comida, 
// con una validación de seguridad para evitar errores de desarrollo
export const useFoodType = () => {
  const context = useContext(FoodTypeContext);
  if (!context) {
    throw new Error("useFoodType must be used within FoodTypeProvider");
  }
  return context;
};