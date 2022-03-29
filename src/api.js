import { API_URL } from "./config";

// GET ALL CATEGORIES
const getAllCategories = async () => {
  const res = await fetch(`${API_URL}categories.php`);
  return await res.json();
};

// GET ALL MEALS FROM CATEGORY
const getMealsByCategory = async (categoryName) => {
  const res = await fetch(`${API_URL}filter.php?c=${categoryName}`);
  return await res.json();
};
// GET MEAL RECIPE
const getMealDetails = async (mealId) => {
  const res = await fetch(`${API_URL}lookup.php?i=${mealId}`);
  return await res.json();
};

export { getAllCategories, getMealsByCategory, getMealDetails };
