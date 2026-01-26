//Código de React se convierte en un mundo 3D real
import { Canvas } from "@react-three/fiber/native";
import { PropsWithChildren } from "react";
import { Complement3D } from "../order/Complement3D";
import { ComplementType, Size } from "../order/complements";
import { OrbitControls } from "@react-three/drei";

interface SceneCanvasProps extends PropsWithChildren {
  extras: { id: number; type: ComplementType; size: Size }[];
  mode?: 'creation' | 'final';
}

export function SceneCanvas({ children, extras, mode = 'creation' }: SceneCanvasProps) {
  const isFinal = mode === 'final';

  //Configuración del escenario 3D y la lente de la cámara para enfocar el producto.

  return (
    <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
      {/* Fondo y luces */}
      <color attach="background" args={["#512DA8"]} />
      {/* no tiene sombras */}
      <ambientLight intensity={0.5} /> 
      <directionalLight position={[0, 5, 5]} intensity={1} />

      {/* Controles solo en modo creación */}
      {!isFinal && <OrbitControls enableZoom={false} />}

      {/* Renderizar children */}
      {children}

      {/* Renderizar extras solo si existen */}
      {extras.length > 0 && extras.map((extra, index) => (
        <Complement3D
          key={`${extra.type}-${extra.size}-${index}`}
          type={extra.type}
          size={extra.size}
          position={[
            (index - (extras.length - 1) / 2) * 0.4,
            isFinal ? -1 : -0.5,
            0.3
          ]}
        />
      ))}
    </Canvas>
  );
}
