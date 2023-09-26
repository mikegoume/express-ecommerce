import ProductsList from "./ProductsList";
import CategoriesList from "./CategoriesList";

export default async function Tickets() {
  return (
    <main className="">
      <div>
        <CategoriesList />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ProductsList />
      </div>
    </main>
  );
}
