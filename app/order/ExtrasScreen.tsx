import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useOrder } from "../../core/order/OrderContext";
import { useRouter } from "expo-router";
import { COMPLEMENTS, ComplementType, Size } from "../../core/order/complements";
import { styles } from "../../components/ExtrasScreen.styles";

//Array, sirve para no escribir "Pequeño", "Mediano" o "Grande". 
const SIZES: { value: Size; label: string; badge?: string }[] = [
  { value: "S", label: "Pequeño", badge: "💰" },
  { value: "M", label: "Mediano", badge: "⭐" },
  { value: "L", label: "Grande", badge: "🔥" },
];

export default function ExtrasScreen() {
  //Aquí extraemos lo que necesitamos del contexto
  const { extras, addExtra, removeExtra, totalExtrasPrice } = useOrder(); 
  const router = useRouter(); 

  const renderComplementSection = (type: ComplementType) => {
    //Busca la info de ese extra
    const complement = COMPLEMENTS[type];
    
    return (
      <View key={type} style={styles.section}>
        <LinearGradient
          colors={complement.gradient}
          style={styles.sectionHeader}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.sectionEmoji}>{complement.icon}</Text>
          <View style={styles.sectionHeaderText}>
            <Text style={styles.sectionTitle}>{complement.name}</Text>
            <Text style={styles.sectionDescription}>{complement.description}</Text>
          </View>
        </LinearGradient>

        <View style={styles.sizesContainer}>
          {/*Crea los tres botones de tamaño (S, M, L)*/}
          {SIZES.map(({ value, label, badge }) => (
            <TouchableOpacity
              key={value}
              style={styles.sizeButton}
              //Cuando tocas un tamaño, le dice al contexto: "Agrega este producto de este tamaño
              onPress={() => addExtra(type, value)}
              activeOpacity={0.7}
            >
              <LinearGradient
                colors={[complement.gradient[0] + "20", complement.gradient[1] + "10"]}
                style={styles.sizeButtonGradient}
              >
                {badge && <Text style={styles.sizeBadge}>{badge}</Text>}
                <Text style={styles.sizeLabel}>{label}</Text>
                <Text style={[styles.sizePrice, { color: complement.color }]}>
                  ${complement.price[value].toFixed(2)}
                </Text>
                <View style={[styles.addButton, { backgroundColor: complement.color }]}>
                  <Text style={styles.addButtonText}>+ Agregar</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#667eea", "#764ba2"]} style={styles.header}>
        <Text style={styles.headerTitle}>🎯 Complementos</Text>
        <Text style={styles.headerSubtitle}>Personaliza tu pedido</Text>
      </LinearGradient>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {(Object.keys(COMPLEMENTS) as ComplementType[]).map(renderComplementSection)}
        {/* Si no has elegido nada, esta sección simplemente no existe en la pantalla. */}
        {extras.length > 0 && (
          <View style={styles.selectedSection}>
            <View style={styles.selectedHeader}>
              <Text style={styles.selectedTitle}>🛒 Seleccionados ({extras.length})</Text>
              {/* Usamos el total que viene del contexto */}
              <Text style={styles.totalPrice}>${totalExtrasPrice.toFixed(2)}</Text>
            </View>
            {/* Dibuja cada cosa que has añadido. Se usa e.id para que saber el elemento. */}
            {extras.map((e) => {
              const complement = COMPLEMENTS[e.type];
              return (
                <TouchableOpacity
                  key={e.id}
                  style={styles.selectedItem}
                  //Permite que, al tocar el item en el resumen, se borre del pedido.
                  onPress={() => removeExtra(e.id)}
                  activeOpacity={0.7}
                >
                  <View style={styles.selectedItemContent}>
                    <Text style={styles.selectedItemEmoji}>{complement.icon}</Text>
                    <View style={styles.selectedItemInfo}>
                      <Text style={styles.selectedItemName}>{complement.name}</Text>
                      <Text style={styles.selectedItemSize}>
                        {SIZES.find(s => s.value === e.size)?.label}
                      </Text>
                    </View>
                    <Text style={styles.selectedItemPrice}>
                      ${complement.price[e.size].toFixed(2)}
                    </Text>
                    <View style={styles.removeButton}>
                      <Text style={styles.removeButtonText}>✕</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        <View style={{ height: 100 }} />
      </ScrollView>

      <LinearGradient colors={["#11998e", "#38ef7d"]} style={styles.footer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push("/order/FinalScene")}
          activeOpacity={0.8}
        >
          <Text style={styles.continueButtonText}>
            {extras.length > 0 
              ? `Continuar con ${extras.length} item${extras.length > 1 ? 's' : ''}`
              : "Continuar sin extras"
            }
          </Text>
          <Text style={styles.continueButtonArrow}>→</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}