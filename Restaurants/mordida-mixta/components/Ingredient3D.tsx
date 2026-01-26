import { animated, useSpring } from "@react-spring/three";
import { Center, Float, Gltf } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber/native";
import { Asset } from "expo-asset";

import { INGREDIENTS } from "../data/ingredients";
import { ingredientVisualConfig } from "../data/ingredientConfig";
import type { BaseIngredient } from "../data/ingredients";
import { useBurger } from "../hooks/BurgerContext";

type Props = ThreeElements["group"] & {
  ingredient: BaseIngredient;
  removable: boolean;
};

export function Ingredient3D({
  ingredient,
  removable,
  ...props
}: Props) {
  const { scale } = useSpring({ from: { scale: 0.5 }, to: { scale: 1 } });

  // ✅ hook bien usado
  const { addedToCart, removeIngredient } = useBurger();

  const BASE_SCALE = 0.05;

  const config =
    ingredientVisualConfig[
      ingredient.name as keyof typeof ingredientVisualConfig
    ] ?? ingredientVisualConfig.default;

  return (
    <animated.group {...props} scale={scale}>
      {/* 🔥 BOTÓN ELIMINAR */}
      {removable && !addedToCart && (
        <group
          position={[0.6, 0, 0]}
          onClick={(e) => {
            e.stopPropagation();
            removeIngredient(ingredient);
          }}
        >
          <mesh position={[0.7, 0.042, 0]}>
            <planeGeometry args={[0.9, 0.16]} 
            />
            <meshStandardMaterial
              color="white"
              opacity={0.5}
              transparent
              depthTest={false}
            />
          </mesh>
        </group>
      )}

      {/* MODELO 3D */}
      <Float floatingRange={addedToCart ? [0, 0] : [-0.01, 0.01]}>
        <Center>
          <Gltf
            src={
              Asset.fromModule(
                INGREDIENTS[
                  ingredient.name as keyof typeof INGREDIENTS
                ].src
              ).uri
            }
            scale={[
              BASE_SCALE * config.scaleFactor,
              BASE_SCALE * config.scaleFactor,
              BASE_SCALE * config.scaleFactor,
            ]}
            position={[0, config.positionY, 0]}
            rotation={config.rotation}
          />
        </Center>
      </Float>
    </animated.group>
  );
}
