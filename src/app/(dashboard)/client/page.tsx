import { auth } from "@/lib/auth";
import { MealFilters } from "./_components/meal-filters";
import { MealFormDialog } from "./_components/meal-form-dialog";
import { MealCards } from "./_components/meal-cards";

const Page = async () => {
  const session = await auth();
  if (!session) return null;
  return (
    <>
      <div className="flex justify-between">
        <MealFilters />
        <MealFormDialog session={session} />
      </div>
      <MealCards />
    </>
  );
};

export default Page;
