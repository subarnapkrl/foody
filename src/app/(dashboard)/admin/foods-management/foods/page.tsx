import { FoodCards } from "./_components/food-cards";
import FoodFilterDrawer from "./_components/food-filter-drawer";
import { FoodFormDialog } from "./_components/food-form-dialog";

const Page = () => {
  return (
    <div className="space-y-2">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Foods List</h1>
        <FoodFormDialog />
      </div>
      <FoodFilterDrawer />
      <FoodCards />
    </div>
  );
};
export default Page;
