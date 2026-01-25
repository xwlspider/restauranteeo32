import { Canvas } from "@react-three/fiber/native";
import { PropsWithChildren } from "react";

export function SceneCanvas({ children }: PropsWithChildren) {
  return (
    <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
      <color attach="background" args={["#512DA8"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      {children}
    </Canvas>
  );
}
