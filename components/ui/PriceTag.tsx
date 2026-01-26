//Indicador visual del costo
import { View, Text, StyleSheet } from "react-native";

interface PriceTagProps {
  amount: number;
}

export function PriceTag({ amount }: PriceTagProps) {
  return (
    <View style={styles.priceTag}>
      <Text style={styles.totalLabel}>TOTAL</Text>
      <Text style={styles.totalPrice}>${amount.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  priceTag: {
    position: 'absolute',//Se posiciona de forma absoluta para flotar sobre el Canvas 3D 
    top: 60,
    right: 20,
    backgroundColor: 'rgba(255, 215, 0, 0.95)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2C1810',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2C1810',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C1810',
    marginTop: 2,
    textAlign: 'center',
  },
});