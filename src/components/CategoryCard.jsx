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
      <div className="cat-description">
        <p>{description.slice(0, 70)}...</p>
        <button className="cat-btn">Check Recipes</button>
      </div>
    </div>
  );
}

export { CategoryCard };
