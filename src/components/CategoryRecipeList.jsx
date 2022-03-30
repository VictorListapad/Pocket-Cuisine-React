import { MealCard } from "./MealCard";
function CategoryRecipeList({ meals }) {
  return (
    <>
      <h2 className="page-title">Recipes</h2>
      <div className="categories">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} {...meal} />
        ))}
      </div>
    </>
  );
}

export { CategoryRecipeList };
