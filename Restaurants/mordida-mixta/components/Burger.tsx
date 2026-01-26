import { useBurger } from "../hooks/BurgerContext";
import { Ingredient3D } from "./Ingredient3D";
import { BaseIngredient } from "../data/ingredients";



export function Burger() {
  const { ingredients } = useBurger();


  const SPACING = 0.35;
const totalHeight = ingredients.length * SPACING;

return (
  <group position-y={-totalHeight / 2}>
    {ingredients.map((item: BaseIngredient, index: number) => {
      const isFirst = index === 0;
      const isLast = index === ingredients.length - 1;

      const isRemovable = !(isFirst || isLast);

      return (
        <Ingredient3D
          key={item.id}
          ingredient={item}
          removable={isRemovable}
          position={[0, index * SPACING, 0]}
        />
      );
    })}
  </group>
);
}
