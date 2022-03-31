import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealDetails } from "../api";
import { MealDetails } from "../components/MealDetails";
import { Preloader } from "../components/Preloader";
function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const { goBack } = useHistory();
  useEffect(() => {
    getMealDetails(id).then((data) => setRecipe(data.meals[0]));
  }, []);
  return (
    <>
      <div style={{ marginTop: "0.5rem" }} className="btn-container">
        <button className="back-btn" onClick={goBack}>
          Go Back
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {Object.keys(recipe).length === 0 ? (
          <Preloader />
        ) : (
          <MealDetails recipe={recipe} />
        )}
      </div>
    </>
  );
}
{
}

export { Recipe };
