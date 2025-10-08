import z from "zod";

const mealFiltersSchema = z.object({
  dateTime: z.coerce.date(),
});
type MealFilterSchema = z.infer<typeof mealFiltersSchema>;

const mealFiltersDefaultValues: MealFilterSchema = {
  dateTime: new Date(),
};

export { mealFiltersDefaultValues, mealFiltersSchema, type MealFilterSchema };
