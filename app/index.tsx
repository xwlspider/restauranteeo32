import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { AwesomeButton } from "../core/ui/AwesomeButton";
import { useFoodType } from "../core/food/FoodTypeContext";

Dimensions.get("window");

export default function Index() {
  const router = useRouter();
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
          {/* Header con animación */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoEmoji}>🍽️</Text>
            </View>
            <Text style={styles.title}>Delicious Orders</Text>
            <Text style={styles.subtitle}>Tu comida favorita a un click</Text>
            <View style={styles.divider} />
          </View>

          {/* Cards de categorías */}
          <View style={styles.categoriesContainer}>
            <Text style={styles.sectionTitle}>Categorías Disponibles</Text>
            
            <View style={styles.cardsWrapper}>
              {/* Card Burger */}
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardEmoji}>🍔</Text>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>Popular</Text>
                  </View>
                </View>
                <Text style={styles.cardTitle}>Burgers</Text>
                <Text style={styles.cardDescription}>
                  Deliciosas hamburguesas gourmet preparadas al momento
                </Text>
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
                  <View style={[styles.badge, styles.badgeNew]}>
                    <Text style={styles.badgeText}>Nuevo</Text>
                  </View>
                </View>
                <Text style={styles.cardTitle}>Sandwiches</Text>
                <Text style={styles.cardDescription}>
                  Sándwiches frescos con ingredientes premium
                </Text>
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

          {/* Features Section */}
          <View style={styles.featuresContainer}>
            <View style={styles.featureItem}>
              <Text style={styles.featureEmoji}>⚡</Text>
              <Text style={styles.featureText}>Entrega Rápida</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureEmoji}>🌟</Text>
              <Text style={styles.featureText}>Calidad Premium</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureEmoji}>💯</Text>
              <Text style={styles.featureText}>100% Fresco</Text>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerTitle}>¿Listo para ordenar?</Text>
            <Text style={styles.footerText}>
              Selecciona tu categoría favorita y descubre nuestro menú
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logoEmoji: {
    fontSize: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#FFFFFF",
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
    opacity: 0.95,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  divider: {
    width: 60,
    height: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    marginTop: 15,
    opacity: 0.8,
  },
  categoriesContainer: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  cardsWrapper: {
    gap: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  cardEmoji: {
    fontSize: 50,
  },
  badge: {
    backgroundColor: "#FF6B6B",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeNew: {
    backgroundColor: "#4ECDC4",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#2C3E50",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#7F8C8D",
    lineHeight: 20,
    marginBottom: 15,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  itemCount: {
    fontSize: 13,
    color: "#95A5A6",
    fontWeight: "600",
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
  },
  featureItem: {
    alignItems: "center",
    flex: 1,
  },
  featureEmoji: {
    fontSize: 30,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "700",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  footerText: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    opacity: 0.9,
    lineHeight: 20,
    paddingHorizontal: 20,
  },
});