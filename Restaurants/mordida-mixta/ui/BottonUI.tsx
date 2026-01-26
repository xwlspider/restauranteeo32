import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { AwesomeButton } from "../../../core/ui/AwesomeButton";
import { INGREDIENTS } from "../data/ingredients";
import { useBurger } from "../hooks/BurgerContext";

// Importar componentes reutilizables
import {
  SectionHeader,
  PriceCard,
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
  const { addIngredient, total, addedToCart, setAddedToCart } = useBurger();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={true}
        indicatorStyle="default"
      >
        <GradientContainer style={styles.container}>
          {addedToCart ? (
            <View style={styles.successContainer}>
              <SuccessHeader title="¡Pedido Enviado!" />

              <PriceCard
                label="Total"
                amount={total}
                color="#7C4DFF"
                containerStyle={styles.totalCard}
              />

              <InfoCard
                icon="🛵"
                text="Tu pedido estará listo en 5 minutos. Wawa Sensei lo entregará directamente en tu hogar."
              />

              <AwesomeButton
                title="Cancelar pedido"
                color="#fff"
                backgroundColor="#7C4DFF"
                bold
                onPress={() => setAddedToCart(false)}
              />
            </View>
          ) : (
            <>
              <SectionHeader
                title="Mordida Mixta"
                badge="😋 Apetito feliz"
                subtitle="Un bocado irresistible: enamora a primera mordida"
              />

              <Divider />

              <View style={styles.creationSection}>
                <View style={styles.creationHeader}>
                  <SectionLabel emoji="" text="Tu Creación" />
                </View>

                <SectionLabel
                  emoji=""
                  text="Personaliza tu hamburguesa agregando ingredientes"
                  style={styles.creationSubtitle}
                />
              </View>

              <View style={styles.ingredientsSection}>
                <SectionLabel emoji="🧩" text="Ingredientes Disponibles" />

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
                <FooterInfo label="Total a pagar" amount={total} />

                <AwesomeButton
                  title="Agregar al carrito →"
                  color="#fff"
                  backgroundColor="#7C4DFF"
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

