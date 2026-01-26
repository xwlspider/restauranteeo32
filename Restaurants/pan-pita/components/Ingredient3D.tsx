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

/**
 * Componente Ingredient3D (Versión Sándwich):
 * Renderiza cada pieza del sándwich con animaciones de entrada y 
 * controles de edición específicos para el contexto de pan pita.
 */
export function Ingredient3D({
  ingredient,
  removable,
  ...props
}: IngredientProps) {
  // 🎢 Animación 'Spring': El ingrediente aparece con un efecto de escala suave (pop-in)
  const { scale } = useSpring({
    from: { scale: 0.5 },
    to: { scale: 1 },
  });

  // Acceso al estado global del sándwich (contexto específico)
  const { addedToCart, removeIngredient } = useSandwichContext();

  const BASE_SCALE = 0.05;

  // Extrae la configuración visual (escala, rotación, altura) desde el archivo de configuración
  const config =
    ingredientVisualConfig[ingredient.name] ??
    ingredientVisualConfig.default;

  const model = INGREDIENTS[ingredient.name];
  const finalScale = BASE_SCALE * config.scaleFactor;

  // Control de errores: Si no hay modelo 3D definido, no renderiza nada para evitar crashes
  if (!model) {
    console.warn("Ingrediente sin modelo:", ingredient.name);
    return null;
  }

  return (
    // 'animated.group' permite que las animaciones de react-spring funcionen en el mundo 3D
    <animated.group {...props} scale={scale}>
      
      {/* 🗑️ BOTÓN ELIMINAR: Interfaz táctil para quitar ingredientes del sándwich */}
      {removable && (
        <Suspense fallback={null}>
          <group
            position={[0.5, 0, 0.3]}
            renderOrder={10} // Asegura que se dibuje sobre otros objetos
            visible={!addedToCart} // Desaparece cuando el sándwich está listo
            onClick={(e) => {
              e.stopPropagation(); // Evita que el click "atraviese" a otros ingredientes
              removeIngredient(ingredient);
            }}
          >
            {/* Mesh transparente que actúa como botón de borrado lateral */}
            <mesh position={[0.7, 0.042, 0]}>
              <planeGeometry args={[0.9, 0.16]} />
              <meshStandardMaterial
                color="white"
                opacity={0.42}
                transparent
                depthTest={false} // Truco visual: siempre se ve al frente
                depthWrite={false}
              />
            </mesh>
          </group>
        </Suspense>
      )}

      {/* 🥪 MODELO 3D: Con efecto de flotación activa mientras se edita */}
      <Float
        floatingRange={addedToCart ? [0, 0] : [-0.01, 0.01]} // Se queda quieto al finalizar
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