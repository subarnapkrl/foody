import { useQuery } from "@tanstack/react-query";
import { useFoodStore } from "../_libs/use-food-store";
import { getFood, getFoods } from "./foodQueries";

const useFoods = () => {
  const { foodFilters } = useFoodStore();

  return useQuery({
    queryKey: ["foods", foodFilters],
    queryFn: () => getFoods(foodFilters),
  });
};

const useFood = () => {
  const { selectedFoodId } = useFoodStore();
  return useQuery({
    queryKey: ["foods", { selectedFoodId }],
    queryFn: () => getFood(selectedFoodId!),
    enabled: !!selectedFoodId,
  });
};

export { useFoods, useFood };
