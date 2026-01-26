//sistema circulatorio que conecta todos los órganos.

import { Stack } from "expo-router";
import { FoodTypeProvider } from "../core/food/FoodTypeContext"; //Envuelve a todos porque es la decisión principal
import { OrderProvider } from "../core/order/OrderContext"; //Es el que lleva la cuenta de los extras y el total
//Guardan la configuración específica de cada restaurante
import { SandwichProvider } from "../Restaurants/pan-pita/hooks/SanducheContext";
import { BurgerProvider } from "../Restaurants/mordida-mixta/hooks/BurgerContext";

//El orden de anidación permite que los contextos de adentro puedan
//pedir información a los contextos de afuera si fuera necesario

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
