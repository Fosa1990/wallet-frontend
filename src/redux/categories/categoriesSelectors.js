const getCategories = state => state.categories.data;

// Selects
const getMonth = state => state.categories.month;
const getYear = state => state.categories.year;

const categoriesSelectors = {
  getCategories,
  getMonth,
  getYear,
};

export default categoriesSelectors;
