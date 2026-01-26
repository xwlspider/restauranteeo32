import { View, Text, TouchableOpacity } from "react-native";
import { useOrder } from "../../core/order/OrderContext";
import { useRouter } from "expo-router";

export default function ExtrasScreen() {
  const { extras, addExtra, removeExtra } = useOrder();
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Complementos</Text>

      <Text>🍟 Papas</Text>
      <TouchableOpacity onPress={() => addExtra("fries", "S")}>
        <Text>Papas pequeñas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addExtra("fries", "M")}>
        <Text>Papas medianas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addExtra("fries", "L")}>
        <Text>Papas grandes</Text>
      </TouchableOpacity>

      <Text>🥤 Bebidas</Text>
      <TouchableOpacity onPress={() => addExtra("drink", "S")}>
        <Text>Gaseosa pequeña</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addExtra("drink", "M")}>
        <Text>Gaseosa mediana</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addExtra("drink", "L")}>
        <Text>Gaseosa grande</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20 }}>Seleccionados:</Text>
      {extras.map((e) => (
        <TouchableOpacity key={e.id} onPress={() => removeExtra(e.id)}>
          <Text>
            {e.type} - {e.size} ❌
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={{ marginTop: 30 }}
        onPress={() => router.push("/order/FinalScene")}
      >
        <Text>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}
