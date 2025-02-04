const productContainer = document.querySelector(".product_list_container");
const myCategory = new URLSearchParams(window.location.search).get("category");

console.log(myCategory);

const listcontainer = document.querySelector("product_list_containe");
fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  const markup = products
    .map(
      (product) => `<div class="product_card">
        <a href="produkt.html?id=${product.id}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Billede af${product.productdisplayname}"/>
        </a>
       <p>${product.productdisplayname}</p>
        <p class="product_price">DKK ${product.price}</p>
      </div>`
    )
    .join("");
  console.log(markup);
  productContainer.innerHTML = markup;
}
