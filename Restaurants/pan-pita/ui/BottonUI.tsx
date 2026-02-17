import { ScrollView, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { AwesomeButton } from "../../../core/ui/AwesomeButton";
import { INGREDIENTS } from "../data/ingredientes";
import { useSandwichContext } from "../hooks/SanducheContext";

// Importar componentes reutilizables
import {
  SectionHeader,
  PriceCard,
  PriceTag,
  InfoCard,
  SuccessHeader,
  SectionLabel,
  Divider,
  GradientContainer,
  FooterInfo,
} from "../../../components/ui/BurgerUIComponents";

import { commonStyles as styles } from "../../../components/CommonBottomUI.styles";

type IngredientKey = keyof typeof INGREDIENTS;

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export function BottomUI() {
  const { addIngredient, total, addedToCart, setAddedToCart } = useSandwichContext();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={true}
        indicatorStyle="default"
      >
        <GradientContainer 
          colors={["#fff5f5", "#ffe8e8"]}
          style={styles.container}
        >
          {addedToCart ? (
            <View style={styles.successContainer}>
              <SuccessHeader title="¡Pedido Enviado!" emoji="✅" />

              <PriceCard
                label="Total"
                amount={total}
                color="#E91E63"
                containerStyle={styles.totalCard}
              />

              <InfoCard
                icon="🛵"
                text="Tu pedido estará listo en 5 minutos. Wawa Sensei lo entregará directamente en tu hogar."
                backgroundColor="#fff3e0"
              />

              <AwesomeButton
                title="Cancelar pedido"
                color="#fff"
                backgroundColor="#E91E63"
                bold
                onPress={() => setAddedToCart(false)}
              />
            </View>
          ) : (
            <>
              <SectionHeader
                title="La Sandwicherie de Pan Pita"
                badge="⭐️⭐️⭐️⭐️⭐️"
                subtitle="Sándwiches frescos y deliciosos hechos con amor"
              />
 
              <Divider color="#ffc1cc" />

              <View style={styles.creationSection}>
                <View style={styles.creationHeader}>
                  <SectionLabel emoji="" text="Tu Creación" />
                </View>

                <SectionLabel
                  emoji=""
                  text="Personaliza tu sándwich agregando ingredientes"
                  style={styles.creationSubtitle}
                />
              </View>

              <View style={styles.ingredientsSection}>
                <SectionLabel emoji="🥪" text="Ingredientes Disponibles" />

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.ingredientsScroll}
                  contentContainerStyle={styles.ingredientsContent}
                >
                  {Object.keys(INGREDIENTS).map((key) => {
                    const ingredient = key as IngredientKey;

                    return (
                      <View key={ingredient} style={styles.ingredientItem}>
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
              </View>

              <View style={styles.footer}>
                <FooterInfo 
                  label="Total a pagar" 
                  amount={total}
                  amountColor="#E91E63"
                />

                <AwesomeButton
                  title="Agregar al carrito →"
                  color="#fff"
                  backgroundColor="#E91E63"
                  bold
                  onPress={() => router.push("/order/ExtrasScreen")}
                />
              </View>
            </>
          )}
        </GradientContainer>
      </ScrollView>
    </SafeAreaView>
  );
}