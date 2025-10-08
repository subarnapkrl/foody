"use server";

import db from "@/lib/db";

const getCategories = async () => {
  return await db.category.findMany();
};

const getCategory = async (id: number) => {
  const res = await db.category.findFirst({
    where: { id },
  });
  return {
    action: "update",
    name: res?.name ?? "",
    id,
  };
};

export { getCategories, getCategory };
