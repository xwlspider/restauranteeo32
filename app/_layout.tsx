// app/_layout.tsx
import { Stack } from "expo-router";
import { FoodTypeProvider } from "../core/food/FoodTypeContext";
import { OrderProvider } from "../core/order/OrderContext"; 
import { SandwichProvider } from "../Restaurants/pan-pita/hooks/SanducheContext";
import { BurgerProvider } from "../Restaurants/mordida-mixta/hooks/BurgerContext";

export default function RootLayout() {
  return (
    <FoodTypeProvider>
      <BurgerProvider>
        <SandwichProvider>
          <OrderProvider>
            <Stack
              screenOptions={{
                headerShown: false, // desactiva el header
              }}
            />
          </OrderProvider>
        </SandwichProvider>
      </BurgerProvider>
    </FoodTypeProvider>
  );
}
