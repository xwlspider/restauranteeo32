import { Stack } from "expo-router";
import { SandwichProvider } from "../../Restaurants/pan-pita/hooks/SanducheContext";

export default function SandwichLayout() {
  return (
    <SandwichProvider>
      <Stack />
    </SandwichProvider>
  );
}
