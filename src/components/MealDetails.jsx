function MealDetails(props) {
  const { recipe } = props;
  return (
    <div className="recipe">
      <h2>{recipe.strMeal}</h2>
      <div className="recipe-img-container">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <h4>Cuisine : {recipe.strArea}</h4>
      <h4>Tags : {recipe.strTags}</h4>
      <p>
        <b>Instructions</b> : {recipe.strInstructions}
      </p>
      <table style={{ width: "80vw", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Ingredients</th>
            <th>Measurments</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(recipe).map((key) => {
            if (key.includes(`Ingredient`) && recipe[key]) {
              return (
                <tr key={key}>
                  <td>{recipe[key]}</td>
                  <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      {recipe.strYoutube ? (
        <div>
          <h5 style={{ margin: "2rem 0 1.5rem 0" }}>Video Recipe</h5>
          <iframe
            title="yt"
            src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
              -11
            )}`}
            allowFullScreen
          />
        </div>
      ) : null}
    </div>
  );
}
export { MealDetails };
