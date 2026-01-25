import { animated, useSpring } from "@react-spring/three";
import { Center, Float, Gltf } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber/native";
import { Asset } from "expo-asset";
import { Suspense } from "react";

import type { SandwichIngredient } from "../data/ingredientes";
import { INGREDIENTS } from "../data/ingredientes";
import { ingredientVisualConfig } from "../data/ingredientConfig";
import { useSandwichContext } from "../hooks/SanducheContext";

type IngredientProps = ThreeElements["group"] & {
  ingredient: SandwichIngredient;
  removable: boolean;
};


export function Ingredient3D({
  ingredient,
  removable,
  ...props
}: IngredientProps) {
  const { scale } = useSpring({
    from: { scale: 0.5 },
    to: { scale: 1 },
  });

  const { addedToCart, removeIngredient } = useSandwichContext();

  const BASE_SCALE = 0.05;

  const config =
    ingredientVisualConfig[ingredient.name] ??
    ingredientVisualConfig.default;

  const model = INGREDIENTS[ingredient.name];
  const finalScale = BASE_SCALE * config.scaleFactor;

  return (
    <animated.group {...props} scale={scale}>
      {/* =====================
          Botón eliminar
      ====================== */}
      {removable && (
        <Suspense fallback={null}>
          <group
            position={[0.5, 0, 0.3]}
            renderOrder={10}
            visible={!addedToCart}
            onClick={(e) => {
              e.stopPropagation();
              removeIngredient(ingredient);
            }}
          >
            <mesh position={[0.7, 0.042, 0]}>
              <planeGeometry args={[0.9, 0.16]} />
              <meshStandardMaterial
                color="white"
                opacity={0.42}
                transparent
                depthTest={false}
                depthWrite={false}
              />
            </mesh>
          </group>
        </Suspense>
      )}

      {/* =====================
          Modelo 3D
      ====================== */}
      <Float
        floatingRange={addedToCart ? [0, 0] : [-0.01, 0.01]}
        speed={addedToCart ? 0 : 4}
        rotationIntensity={0.5}
      >
        <Center>
          <Gltf
            src={Asset.fromModule(model.src).uri}
            scale={[finalScale, finalScale, finalScale]}
            position={[0, config.positionY, 0]}
            rotation={config.rotation}
          />
        </Center>
      </Float>
    </animated.group>
  );
}
