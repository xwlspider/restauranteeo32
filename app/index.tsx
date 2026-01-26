//Puerta de entrada y donde el usuario toma la decisión más importante
import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { AwesomeButton } from "../core/ui/AwesomeButton";
import { useFoodType } from "../core/food/FoodTypeContext";

import { styles } from "../components/Index.styles";

export default function Index() {
  const router = useRouter();
  //Antes de ir a otra pantalla, le avisamos al contexto global qué es lo que el usuario quiere comer
  const { setFoodType } = useFoodType();

  return (
    <LinearGradient
      colors={["#FF6B6B", "#FF8E53", "#FFA726"]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoEmoji}>🍽️</Text>
            </View>
            <Text style={styles.title}>Delicious Orders</Text>
            <Text style={styles.subtitle}>Tu comida favorita a un click</Text>
            <View style={styles.divider} />
          </View>

          {/* Categorías */}
          <View style={styles.categoriesContainer}>
            <Text style={styles.sectionTitle}>Categorías Disponibles</Text>
            
            <View style={styles.cardsWrapper}>
              {/* Card Burger */}
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardEmoji}>🍔</Text>
                  <View style={styles.badge}><Text style={styles.badgeText}>Popular</Text></View>
                </View>
                <Text style={styles.cardTitle}>Burgers</Text>
                <Text style={styles.cardDescription}>Hamburguesas gourmet preparadas al momento</Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.itemCount}>8 opciones</Text>
                  <AwesomeButton
                    title="Ordenar →"
                    onPress={() => {
                      setFoodType("burger");
                      router.push("/burguer");
                    }}
                  />
                </View>
              </View>

              {/* Card Sandwich */}
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardEmoji}>🥪</Text>
                  <View style={[styles.badge, styles.badgeNew]}><Text style={styles.badgeText}>Nuevo</Text></View>
                </View>
                <Text style={styles.cardTitle}>Sandwiches</Text>
                <Text style={styles.cardDescription}>Sándwiches frescos con ingredientes premium</Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.itemCount}>6 opciones</Text>
                  <AwesomeButton
                    title="Ordenar →"
                    onPress={() => {
                      setFoodType("sandwich");
                      router.push("/sandwich");
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Features */}
          <View style={styles.featuresContainer}>
            <Feature icon="⚡" text="Entrega Rápida" />
            <Feature icon="🌟" text="Calidad Premium" />
            <Feature icon="💯" text="100% Fresco" />
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerTitle}>¿Listo para ordenar?</Text>
            <Text style={styles.footerText}>Selecciona tu categoría y descubre nuestro menú</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

// Un pequeño sub-componente interno para no repetir código de los features
function Feature({ icon, text }: { icon: string, text: string }) {
  return (
    <View style={styles.featureItem}>
      <Text style={styles.featureEmoji}>{icon}</Text>
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
}