import { View } from "react-native";
import { useRouter } from "expo-router";
import { AwesomeButton } from "../core/ui/AwesomeButton";
import { useFoodType } from "../core/food/FoodTypeContext";

export default function Index() {
  const router = useRouter();
  const { setFoodType } = useFoodType();

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <AwesomeButton
        title="🍔 Burguer"
        onPress={() => {
          setFoodType("burger");
          router.push("/burguer");
        }}
      />

      <AwesomeButton
        title="🥪 Sandwich"
        onPress={() => {
          setFoodType("sandwich");
          router.push("/sandwich");
        }}
      />
    </View>
  );
}


