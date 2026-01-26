import { View, StyleSheet } from "react-native";
import { Suspense } from "react";
import { SceneCanvas } from "../../core/canvas/SceneCanvas";
import { Sandwich } from "../../Restaurants/pan-pita/components/Sanduche";
import { BottomUI } from "../../Restaurants/pan-pita/ui/BottonUI";
import { Complement3D } from "@/core/order/Complement3D";

export default function SandwichScreen() {
  return (
    <View style={{ flex: 1 }}>
      <SceneCanvas extras={[]}>
        <Suspense fallback={null}>  
          <Sandwich />
          <Complement3D type={"fries"} size={"S"} />
        </Suspense>
      </SceneCanvas>

      <BottomUI />
    </View>
  );
}
