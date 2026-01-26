//Escenario Final, El Elenco
import { View, StyleSheet } from "react-native";
import { SceneCanvas } from "@/core/canvas/SceneCanvas"; //El escenario 3D.
import { useFoodType } from "@/core/food/FoodTypeContext"; //Para saber qué pidió el usuario
import { useOrder } from "@/core/order/OrderContext";//Para traer esos extras

// Componentes de comida
import { Sandwich } from "../../Restaurants/pan-pita/components/Sanduche";
import { Burger } from "../../Restaurants/mordida-mixta/components/Burger";

// Nuestra nueva UI y Lógica extraída
import { PriceTag } from "../../components/ui/PriceTag"; //el componente visual que muestra el precio
import { useFinalPrice } from "../../components/useFinalPrice"; //Lógica (el hook que hace los cálculos matemáticos).

//Pantalla se "sincroniza" con toda la app
export default function FinalScene() {
  const { foodType } = useFoodType();
  const { extras } = useOrder();
  const grandTotal = useFinalPrice();

  return (
    <View style={styles.container}>
      <SceneCanvas extras={extras} mode="final">
        {/* Indica a la escena y a los modelos que no están en modo "edición", sino en modo "exhibición" */}
        {/* Renderizado condicional: Solo se dibuja el modelo 3D que el usuario eligió */}
        {foodType === "sandwich" && <Sandwich mode="final" />}
        {foodType === "burger" && <Burger mode="final" />}
      </SceneCanvas>
      {/* Es un componente dedicado solo a mostrar el precio */}
      <PriceTag amount={grandTotal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});