
import { useFrame } from "@react-three/fiber/native";
import { useRef } from "react";
import * as THREE from "three";

import { useSandwichContext } from "../hooks/SanducheContext";
import { Ingredient3D } from "./Ingredient3D";

const INGREDIENT_SPACING = 0.2;
const INGREDIENT_SPACING_FINAL = 0.06;

export const Sandwich = () => {
  const sandwichRef = useRef<THREE.Group>(null); // ref inicializado como null
  const { ingredients, addedToCart } = useSandwichContext();

  const spacing = addedToCart ? INGREDIENT_SPACING_FINAL : INGREDIENT_SPACING;

  const totalHeight = ingredients.length * spacing;

  // ✅ Protegemos el ref y addedToCart
  useFrame(() => {
    const mesh = sandwichRef.current;
    if (!mesh) return;

    if (addedToCart) {
      mesh.rotation.y += 0.01;
    } else {
      mesh.rotation.y = 0;
    }
  });

  if (!ingredients || ingredients.length === 0) {
    // Protege si aún no hay ingredientes
    return null;
  }

  return (
    <group>
      <group ref={sandwichRef}>
        {ingredients.map((ingredient, index) => {
          const isRemovable = index !== 0 && index !== ingredients.length - 1;

          const y = index * spacing - totalHeight / 2;

          return (
            <Ingredient3D
              key={ingredient.id}
              ingredient={ingredient}
              removable={isRemovable}
              position={[0, y, 0]}
            />
          );
        })}
      </group>
    </group>
  );
};
