import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryRecipeList } from "../components/CategoryRecipeList";
import { getMealsByCategory } from "../api";
function Category() {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    getMealsByCategory(name).then((data) => setMeals(data.meals));
  }, []);
  return (
    <>
      {meals.length ? (
        <CategoryRecipeList meals={meals} />
      ) : (
        <h2>Nothing found</h2>
      )}
    </>
  );
}
export { Category };
