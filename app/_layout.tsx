// app/_layout.tsx
import { Stack } from "expo-router";
import { FoodTypeProvider } from "../core/food/FoodTypeContext";

export default function RootLayout() {
  return (
    <FoodTypeProvider>
      <Stack />
    </FoodTypeProvider>
  );
}
