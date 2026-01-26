// SceneCanvas.tsx
import { Canvas } from "@react-three/fiber/native";
import { PropsWithChildren } from "react";
import { Complement3D } from "../order/Complement3D";
import { ComplementType, Size } from "../order/complements";

interface SceneCanvasProps extends PropsWithChildren {
  extras: { id: number; type: ComplementType; size: Size }[];
}

export function SceneCanvas({ children, extras }: SceneCanvasProps) {
  return (
    <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
      <color attach="background" args={["#512DA8"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />

      {children}

      {extras.map((extra, index) => (
        <Complement3D
          key={extra.id}
          type={extra.type}
          size={extra.size}
          position={[1.4 + index * 0.9, 0, 0]}
        />
      ))}
    </Canvas>
  );
}
