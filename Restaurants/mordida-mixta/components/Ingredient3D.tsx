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

/**
 * Componente Ingredient3D: Representación individual de cada ingrediente.
 * Maneja animaciones de entrada, visualización del modelo y botones de eliminación.
 */
export function Ingredient3D({
  ingredient,
  removable,
  ...props
}: Props) {
  // ✨ ANIMACIÓN DE ENTRADA: El ingrediente aparece con un efecto de escala (pop-in)
  const { scale } = useSpring({ 
    from: { scale: 0.5 }, 
    to: { scale: 1 },
    config: { tension: 200, friction: 15 } // Suaviza el rebote
  });

  // Accedemos a la lógica de la burger para saber si ya se pagó o para quitar piezas
  const { addedToCart, removeIngredient } = useBurger();

  const BASE_SCALE = 0.05;

  // Buscamos la configuración visual (escala, rotación, etc.) específica de este ingrediente
  const config =
    ingredientVisualConfig[
      ingredient.name as keyof typeof ingredientVisualConfig
    ] ?? ingredientVisualConfig.default;

  return (
    // 'animated.group' permite que react-spring mueva la escala sin problemas de performance
    <animated.group {...props} scale={scale}>
      
      {/* 🗑️ BOTÓN ELIMINAR: Solo se muestra si es removible y la burger NO está en el carrito */}
      {removable && !addedToCart && (
        <group
          position={[0.6, 0, 0]}
          onClick={(e) => {
            e.stopPropagation(); // Evita que el click afecte a otros elementos
            removeIngredient(ingredient);
          }}
        >
          {/* Un plano semi-transparente que sirve como área táctil para borrar */}
          <mesh position={[0.7, 0.042, 0]}>
            <planeGeometry args={[0.9, 0.16]} />
            <meshStandardMaterial
              color="white"
              opacity={0.5}
              transparent
              depthTest={false} // Hace que siempre se vea por encima del ingrediente
            />
          </mesh>
        </group>
      )}

      {/* 🍔 MODELO 3D: Con efecto de flotación suave */}
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
            // Escalado dinámico basado en la configuración visual
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