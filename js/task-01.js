const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll(".item");

const numberOfCategories = categoryItems.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.firstElementChild.textContent;

  const categoryElements =
    categoryItem.firstElementChild.nextElementSibling.children;
  const numberOfElements = categoryElements.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfElements}`);
});
