import { useFrame } from "@react-three/fiber/native";
import { useRef } from "react";
import * as THREE from "three";
import { useSandwichContext } from "../hooks/SanducheContext";
import { Ingredient3D } from "./Ingredient3D";

interface SandwichProps {
  mode?: 'creation' | 'final'; 
}

/**
 * Componente Sandwich: Maneja la estructura tridimensional del sándwich.
 * Controla el apilado de ingredientes, el centrado de la cámara y la rotación final.
 */
export const Sandwich = ({ mode = 'creation' }: SandwichProps) => {
  // Referencia al grupo para aplicar animaciones directas sin re-renders
  const sandwichRef = useRef<THREE.Group>(null);
  const { ingredients } = useSandwichContext();
  
  const isFinal = mode === 'final';
  
  // 📏 Lógica de Empilado:
  // En 'final' el sándwich se compacta (0.06) para verse realista.
  // En 'creation' se expande (0.2) para que el usuario pueda interactuar con cada pieza.
  const spacing = isFinal ? 0.06 : 0.2;
  const totalHeight = ingredients.length * spacing;

  /**
   * Ciclo de renderizado:
   * Si el modo es 'final', el sándwich rota infinitamente sobre su eje vertical.
   */
  useFrame(() => {
    const mesh = sandwichRef.current;
    if (!mesh) return;

    if (isFinal) {
      mesh.rotation.y += 0.01;
    }
  });

  // Renderizado condicional por seguridad: Si no hay ingredientes, no dibujamos nada.
  if (!ingredients || ingredients.length === 0) {
    return null;
  }

  return (
    <group>
      {/* El 'key' dinámico fuerza a React a refrescar el grupo si cambia el orden o cantidad */}
      <group ref={sandwichRef} key={ingredients.map((i) => i.id).join("-")}>
        {ingredients.map((ingredient, index) => {
          // Bloqueamos la eliminación de la tapa y la base (panes)
          const isFirst = index === 0;
          const isLast = index === ingredients.length - 1;
          const isRemovable = mode === 'creation' && !(isFirst || isLast);

          // Cálculo de posición Y: 
          // Posicionamos cada ingrediente y restamos la mitad de la altura total
          // para que el sándwich siempre crezca centrado respecto al origen.
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