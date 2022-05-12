import { createSelector } from "reselect";

const selectCategoryRreducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryRreducer],
  (categorySlice) => categorySlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
