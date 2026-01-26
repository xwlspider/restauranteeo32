//"Cargador de Modelos". Es el encargado de tomar un extra (como unas papas o un refresco) y 
// transformarlo de un simple archivo digital a un objeto 3D que aparece en pantalla.
import { Gltf, Center } from "@react-three/drei";
import { Asset } from "expo-asset";
import { Suspense } from "react";
import { COMPLEMENTS } from "./complements";

// TypeScript lee las llaves de COMPLEMENTS para saber qué productos existen.
// Esto evita errores si escribimos un nombre de producto que no existe.
interface Complement3DProps {
  type: keyof typeof COMPLEMENTS;
  size: "S" | "M" | "L";
  position?: [number, number, number];
}

const BASE_SCALE = 2.0; 

export function Complement3D({
  type,
  size,
  position = [0, 0, 0],
}: Complement3DProps) {
  const config = COMPLEMENTS[type];
  const scale = BASE_SCALE * config.scale[size];

  console.log("🧩 Complement render:", type, size);

  return (
    <group position={position}>
      <Suspense fallback={null}>
        <Center>
          <Gltf
            src={Asset.fromModule(config.model).uri}
            scale={[scale, scale, scale]}
            position={[0, 0, 0]}
          />
        </Center>
      </Suspense>
    </group>
  );
}
