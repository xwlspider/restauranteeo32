import React, { createContext, useContext, useState } from "react";

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

export const useFoodType = () => {
  const context = useContext(FoodTypeContext);
  if (!context) {
    throw new Error("useFoodType must be used within FoodTypeProvider");
  }
  return context;
};