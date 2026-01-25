import { Stack } from "expo-router";
import { BurgerProvider } from "../../Restaurants/mordida-mixta/hooks/BurgerContext";

export default function BurgerLayout() {
  return (
    <BurgerProvider>
      <Stack />
    </BurgerProvider>
  );
}
