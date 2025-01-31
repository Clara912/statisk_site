const productContainer = document.querySelector(".product_list_container");

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log("Fetched products:", products);

  let markup = "";
  products
    .map(
      (product) =>
        (markup += `
      <div class="product_card"> 
        <a href="produkt.html">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Billede af${product.productdisplayname}"/>
        </a>
       <p>${product.productdisplayname}</p>
        <p class="product_price">DKK ${product.price}</p>
      </div>`)
    )
    .join("");
  console.log(markup);
  productContainer.innerHTML = markup;
}
