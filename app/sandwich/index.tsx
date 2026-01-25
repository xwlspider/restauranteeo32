import { View, StyleSheet } from "react-native";
import { Suspense } from "react";
import { SceneCanvas } from "../../core/canvas/SceneCanvas";
import { Sandwich } from "../../Restaurants/pan-pita/components/Sanduche";
import { BottomUI } from "../../Restaurants/pan-pita/ui/BottonUI";

export default function SandwichScreen() {
  return (
    <View style={{ flex: 1 }}>
      <SceneCanvas>
        <Suspense fallback={null}>  
          <Sandwich />
        </Suspense>
      </SceneCanvas>

      <BottomUI />
    </View>
  );
}
