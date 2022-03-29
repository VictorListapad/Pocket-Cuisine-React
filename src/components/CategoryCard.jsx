import { Link } from "react-router-dom";
function CategoryCard(props) {
  const {
    strCategory: catName,
    strCategoryThumb: catImg,
    strCategoryDescription: description,
  } = props;
  return (
    <div className="category-card">
      <div className="cat-img-container">
        <img src={catImg} alt={catName} />
      </div>
      <h3>{catName}</h3>
      <div className="cat-description">
        <p>{description.slice(0, 50)}...</p>
        <Link to={`/meals/${catName}`}>
          <button className="cat-btn">Check Recipes</button>
        </Link>
      </div>
    </div>
  );
}

export { CategoryCard };
