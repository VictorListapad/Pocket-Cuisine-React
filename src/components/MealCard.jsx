import { Link } from "react-router-dom";
function MealCard(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className="meal-card category-card">
      <div className="cat-img-container">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="meal-description">
        <p>{strMeal.slice(0, 40)}</p>
        <Link to={`/meal/${idMeal}`}>
          <button className="cat-btn">Check Recipes</button>
        </Link>
      </div>
    </div>
  );
}
export { MealCard };
