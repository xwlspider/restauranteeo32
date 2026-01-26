//Pantalla de sanduche que organiza: 
import { View} from "react-native";
import { Suspense } from "react";
import { SceneCanvas } from "../../core/canvas/SceneCanvas";//El "motor". Espacio para que exista modelo 3D
import { Sandwich } from "../../Restaurants/pan-pita/components/Sanduche"; //el contenedor visual y el mundo 3D
import { BottomUI } from "../../Restaurants/pan-pita/ui/BottonUI"; // la interfaz de usuario.

export default function SandwichScreen() {
  return (
    //Viex Style dice "Ocupa todo el espacio disponible del dispositivo"
    <View style={{ flex: 1 }}>

       {/* Teatro del sanduche */}
      <SceneCanvas extras={[]}>

        {/* 1. Añadimos el "telón" (Suspense) */}
        {/* Sin esto, la app puede fallar mientras se descarga el modelo .glb */}
        <Suspense fallback={null}>  
            {/* Sanduche es el actor */}
          <Sandwich />

        </Suspense>
      </SceneCanvas>

      <BottomUI />
    </View>
  );
}
