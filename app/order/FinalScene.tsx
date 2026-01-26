// FinalScene.tsx
import { SceneCanvas } from "@/core/canvas/SceneCanvas";
import { useFoodType } from "@/core/food/FoodTypeContext";
import { useSandwichContext } from "../../Restaurants/pan-pita/hooks/SanducheContext";
import { Sandwich } from "../../Restaurants/pan-pita/components/Sanduche";

export default function FinalScene() {
  const { foodType } = useFoodType();
  const { ingredients } = useSandwichContext();

  return (
    <SceneCanvas extras={[]}>
      {foodType === "sandwich" && <Sandwich ingredients={ingredients} key={ingredients.length} />}
    </SceneCanvas>
  );
}
