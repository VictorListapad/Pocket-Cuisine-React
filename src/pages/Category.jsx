import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryRecipeList } from "../components/CategoryRecipeList";
import { getMealsByCategory } from "../api";
import { Preloader } from "../components/Preloader";
function Category() {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    getMealsByCategory(name).then((data) => setMeals(data.meals));
  }, []);
  return (
    <>{meals.length ? <CategoryRecipeList meals={meals} /> : <Preloader />}</>
  );
}
export { Category };
