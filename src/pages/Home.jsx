import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { CategoryList } from "../components/CategoryList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const handleSearch = (str) => {
    if (!str) {
      getAllCategories().then((data) => {
        setCategoryList(data.categories);
      });
    } else {
      const filtered = categoryList.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      );
      setCategoryList(filtered);
    }
  };
  useEffect(() => {
    getAllCategories().then((data) => {
      setCategoryList(data.categories);
    });
  }, []);
  return (
    <>
      <Search search={handleSearch} />
      {categoryList.length ? (
        <CategoryList categoryList={categoryList} />
      ) : (
        <Preloader />
      )}
    </>
  );
}

export { Home };
