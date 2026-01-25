import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AwesomeButton } from "../../../core/ui/AwesomeButton";
import { INGREDIENTS } from "../data/ingredientes";
import { useSandwichContext } from "../hooks/SanducheContext";

type IngredientKey = keyof typeof INGREDIENTS;

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export function BottomUI() {
  const { addIngredient, total, addedToCart, setAddedToCart } = useSandwichContext();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        {addedToCart ? (
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Total - ${total.toFixed(2)}
            </Text>
  
            <Text
              style={{
                color: "#666",
                marginTop: 4,
                marginBottom: 16,
              }}
            >
              Order sent successfully, it will be ready in 5 minutes! Wawa
              Sensei will directly deliver it to your home 🛵
            </Text>
  
            <AwesomeButton
              title="Cancel order"
              color="#fff"
              backgroundColor="#7C4DFF"
              bold
              onPress={() => setAddedToCart(false)}
            />
          </View>
        ) : (
          <>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                La Sandwicherie
              </Text>
              <Text style={{ marginLeft: 8 }}>⭐️⭐️⭐️⭐️⭐️</Text>
            </View>
  
            <Text style={{ color: "#666" }}>
              Fresh and delicious sandwiches made with love
            </Text>
  
            <View
              style={{
                height: 1,
                backgroundColor: "#ececec",
                marginVertical: 20,
              }}
            />
  
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Your Creation ($5.00)
            </Text>
  
            <Text
              style={{
                textAlign: "center",
                color: "#666",
              }}
            >
              Compose your sandwich by adding ingredients
            </Text>
  
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                marginTop: 8,
                marginBottom: 8,
                marginHorizontal: -20,
              }}
              contentContainerStyle={{ paddingHorizontal: 20 }}
            >
              {Object.keys(INGREDIENTS).map((key) => {
                const ingredient = key as IngredientKey;
  
                return (
                  <View key={ingredient} style={{ padding: 10 }}>
                    <AwesomeButton
                      title={`${INGREDIENTS[ingredient].icon} ${capitalizeFirstLetter(
                        ingredient
                      )} (+$${INGREDIENTS[ingredient].price.toFixed(2)})`}
                      onPress={() => addIngredient(ingredient)}
                    />
                  </View>
                );
              })}
            </ScrollView>
  
            <AwesomeButton
              title={`Add to cart ($${total.toFixed(2)})`}
              color="#fff"
              backgroundColor="#7C4DFF"
              bold
              onPress={() => setAddedToCart(true)}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}