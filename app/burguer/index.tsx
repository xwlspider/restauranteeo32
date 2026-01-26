//Pantalla de hamburguesa que organiza: 
import { View } from "react-native";
import { Burger } from "../../Restaurants/mordida-mixta/components/Burger"; //el contenedor visual y el mundo 3D
import { BottomUI } from "../../Restaurants/mordida-mixta/ui/BottonUI"; // la interfaz de usuario.
import { SceneCanvas } from "../../core/canvas/SceneCanvas"; //El "motor". Espacio para que exista modelo 3D
import { Suspense } from "react";

export default function BurgerScreen() {
  return (
    //Viex Style dice "Ocupa todo el espacio disponible del dispositivo"
    <View style={{ flex: 1 }}>
       
     {/* Teatro de la hamburguesa */}
      <SceneCanvas extras={[]}>

        {/* 1. Añadimos el "telón" (Suspense) */}
        {/* Sin esto, la app puede fallar mientras se descarga el modelo .glb */}
        <Suspense fallback={null}> 
          
          {/* Burger es el actor que tarda en "llegar" al escenario */}
          <Burger /> 

        </Suspense>

      </SceneCanvas>

      <BottomUI />
    </View>
  );
}
