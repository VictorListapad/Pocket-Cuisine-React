import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryRecipeList } from "../components/CategoryRecipeList";
import { getMealsByCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
function Category() {
  const [meals, setMeals] = useState([]);
  const handleSearch = (str) => {
    if (!str) {
      getMealsByCategory(name).then((data) => setMeals(data.meals));
    } else {
      const filtered = meals.filter((item) =>
        item.strMeal.toLowerCase().includes(str.toLowerCase())
      );
      setMeals(filtered);
    }
  };
  const { name } = useParams();
  useEffect(() => {
    getMealsByCategory(name).then((data) => setMeals(data.meals));
  }, []);
  return (
    <>
      <Search search={handleSearch} />
      {meals.length ? <CategoryRecipeList meals={meals} /> : <Preloader />}
    </>
  );
}
export { Category };
