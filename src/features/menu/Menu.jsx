import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filtered = menu.filter(
    (burger) =>
      burger.name.toLowerCase().includes(query.toLowerCase()) ||
      burger.ingredients.some((ing) =>
        ing.toLowerCase().includes(query.toLowerCase()),
      ),
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return a.unitPrice - b.unitPrice;
    if (sortBy === "price-desc") return b.unitPrice - a.unitPrice;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="px-2 py-3">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search burgers or ingredients..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input sm:max-w-xs"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="input sm:max-w-[180px]"
        >
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name: A-Z</option>
        </select>
      </div>

      {sorted.length === 0 ? (
        <p className="py-10 text-center text-muted">
          No burgers match your search.
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {sorted.map((burger, index) => (
            <MenuItem burger={burger} key={burger.id} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
