import { Stack } from "expo-router";
import { BurgerProvider } from "../../Restaurants/mordida-mixta/hooks/BurgerContext";

export default function BurgerLayout() {
  return (
    <BurgerProvider>
        <Stack
        screenOptions={{
          headerShown: false, // Aquí desactivamos el header
        }}
      />
    </BurgerProvider>
  );
}
