import { Center, Gltf, Float } from "@react-three/drei";
import { Asset } from "expo-asset";
import { COMPLEMENTS, ComplementType, Size } from "./complements";

interface Complement3DProps {
  type: ComplementType;
  size: Size;
  position?: [number, number, number];
}

const BASE_SCALE = 0.05;

export function Complement3D({
  type,
  size,
  position = [0, 0, 0],
}: Complement3DProps) {
  const config = COMPLEMENTS[type];

  return (
    <group position={position}>
      <Float floatingRange={[-0.02, 0.02]} speed={2}>
        <Center>
          <Gltf
            src={Asset.fromModule(config.model).uri}
            scale={[
              BASE_SCALE * config.scale[size],
              BASE_SCALE * config.scale[size],
              BASE_SCALE * config.scale[size],
            ]}
          />
        </Center>
      </Float>
    </group>
  );
}
