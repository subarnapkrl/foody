"use server";
import db from "@/lib/db";
import { executeAction } from "@/lib/executeAction";
import { CategorySchema } from "../_types/categorySchema";

const deleteCategory = async (id: number) => {
  await executeAction({
    actionFn: () => db.category.delete({ where: { id: id } }),
  });
};
const createCategory = async (data: CategorySchema) => {
  await executeAction({
    actionFn: () =>
      db.category.create({
        data: {
          name: data.name,
        },
      }),
  });
};

const updateCategory = async (data: CategorySchema) => {
  if (data.action === "update") {
    await executeAction({
      actionFn: () =>
        db.category.update({
          where: { id: data.id },
          data: {
            name: data.name,
          },
        }),
    });
  }
};

export { deleteCategory, createCategory, updateCategory };
