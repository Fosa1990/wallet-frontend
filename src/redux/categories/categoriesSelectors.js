const getCategories = state => {
  return state.categories.data;
};

const categoriesSelectors = {
  getCategories,
};

export default categoriesSelectors;
