//"Calculador Maestro". Es un Hook Personalizado que tiene la misión más importante de la aplicación: 
// recoger los precios que están dispersos en diferentes "almacenes" (Contextos)
import { useFoodType } from "@/core/food/FoodTypeContext";
import { useOrder } from "@/core/order/OrderContext";
import { useBurger } from "../Restaurants/mordida-mixta/hooks/BurgerContext";
import { useSandwichContext } from "../Restaurants/pan-pita/hooks/SanducheContext";
import { COMPLEMENTS } from "@/core/order/complements";

export function useFinalPrice() {
  const { foodType } = useFoodType();
  const { extras } = useOrder();
  const { total: burgerTotal } = useBurger();
  const { total: sandwichTotal } = useSandwichContext();

  //reduce Es la forma más limpia de sumar valores en un array.
  const extrasTotal = extras.reduce((sum, extra) => {
    {/* Busca en base de datos de precios el valor exacto según el tipo y el tamaño del extra. */}
    return sum + COMPLEMENTS[extra.type].price[extra.size];
  }, 0);

  //Si el usuario eligió hamburguesa, 
  //ignora el total del sándwich y viceversa. Esto evita que los precios se mezclen.
  const foodTotal = foodType === "burger" ? burgerTotal : sandwichTotal;
  
  return foodTotal + extrasTotal;
}