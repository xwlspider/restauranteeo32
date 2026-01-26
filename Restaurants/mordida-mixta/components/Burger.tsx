import { useFrame } from "@react-three/fiber/native"; 
import { useRef } from "react"; 
import * as THREE from "three"; 
import { useBurger } from "../hooks/BurgerContext";
import { Ingredient3D } from "./Ingredient3D";
import { BaseIngredient } from "../data/ingredients";

interface BurgerProps {
  mode?: 'creation' | 'final';
}

/**
 * Componente Burger: Orquestador del modelo 3D de la hamburguesa.
 * Maneja el apilado dinámico, la lógica de edición y la animación final.
 */
export function Burger({ mode = 'creation' }: BurgerProps) {
  // Obtenemos los ingredientes actuales del estado global
  const { ingredients } = useBurger();
  
  // Referencia al grupo 3D para manipularlo directamente (animaciones)
  const burgerRef = useRef<THREE.Group>(null); 
  
  const isFinal = mode === 'final';
  
  // Definimos el espaciado: 
  // En 'creation' se separan para ver cada ingrediente.
  // En 'final' se compactan para simular la hamburguesa armada.
  const SPACING = isFinal ? 0.08 : 0.35;
  const totalHeight = ingredients.length * SPACING;

  /**
   * Ciclo de animación (60fps):
   * Si la hamburguesa está en vista final, aplicamos una rotación 
   * constante en el eje Y para crear un efecto de exhibición.
   */
  useFrame(() => {
    const mesh = burgerRef.current;
    if (!mesh) return;

    if (isFinal) {
      mesh.rotation.y += 0.01; 
    }
  });

  return (
    /* Centramos la hamburguesa verticalmente usando la mitad de su altura total. 
       Esto evita que el modelo "crezca" solo hacia arriba.
    */
    <group ref={burgerRef} position-y={-totalHeight / 2}> 
      {ingredients.map((item: BaseIngredient, index: number) => {
        // Lógica de protección: No se puede quitar ni la base ni la tapa (panes).
        const isFirst = index === 0;
        const isLast = index === ingredients.length - 1;
        const isRemovable = mode === 'creation' && !(isFirst || isLast);

        return (
          <Ingredient3D
            key={item.id}
            ingredient={item}
            removable={isRemovable}
            // Posicionamos cada ingrediente en el eje Y según su orden en el array
            position={[0, index * SPACING, 0]}
          />
        );
      })}
    </group>
  );
}