const productContainer = document.querySelector(".category_grid");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then(showcategori);
function showcategori(data) {
  console.log("mine data:", data);

  const markup = data
    .map((element) => `<div class="category_box"><a href="produktliste.html?category=${element.category}">${element.category}</a></div>`)

    .join("");
  console.log("min markup er ", markup);
  productContainer.innerHTML += markup;
}
