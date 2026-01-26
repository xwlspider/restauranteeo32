import { View } from "react-native";
import { Burger } from "../../Restaurants/mordida-mixta/components/Burger";
import { BottomUI } from "../../Restaurants/mordida-mixta/ui/BottonUI";
import { SceneCanvas } from "../../core/canvas/SceneCanvas";

export default function BurgerScreen() {
  return (
    <View style={{ flex: 1 }}>
      <SceneCanvas extras={[]}>
        <Burger />
      </SceneCanvas>

      <BottomUI />
    </View>
  );
}
