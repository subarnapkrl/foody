import z from "zod";

const categorySchema = z.intersection(
  z.object({
    name: z.string().min(3).max(150),
  }),
  z.discriminatedUnion("action", [
    z.object({ action: z.literal("create") }),
    z.object({ action: z.literal("update"), id: z.number().min(1) }),
  ])
);

type CategorySchema = z.infer<typeof categorySchema>;

const categoryDefaultValues: CategorySchema = {
  action: "create",
  name: "",
};

export { categorySchema, type CategorySchema, categoryDefaultValues };
