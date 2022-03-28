import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { CategoryList } from "../components/CategoryList";
import { Preloader } from "../components/Preloader";
function Home() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getAllCategories().then((data) => {
      setCategoryList(data.categories);
    });
  }, []);
  return (
    <>
      {categoryList.length ? (
        <CategoryList categoryList={categoryList} />
      ) : (
        <Preloader />
      )}
    </>
  );
}

export { Home };
