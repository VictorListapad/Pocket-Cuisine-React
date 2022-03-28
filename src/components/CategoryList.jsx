import { CategoryCard } from "./CategoryCard";
function CategoryList(props) {
  const { categoryList = [] } = props;
  return (
    <>
      <h2 className="page-title">Categories</h2>
      <div className="categories">
        {categoryList.map((category) => (
          <CategoryCard key={category.idCategory} {...category} />
        ))}
      </div>
    </>
  );
}

export { CategoryList };
