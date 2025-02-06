const productID = new URLSearchParams(window.location.search).get("id");
let product_container = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productID}`)
  .then((response) => response.json())
  .then((data) => {
    product_container.innerHTML = `
      <div class="product">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productID}.webp" alt="${data.productdisplayname}" />
      </div>
      <div class="info">
        <h3><strong>Brand:</strong> ${data.brandname}</h3>
        <h3>Model name:</h3>
        <p><strong>Product Display Name:</strong> ${data.productdisplayname}</p>
        <h3>Color</h3>
        <p><strong>Color:</strong> ${data.basecolour}</p>
        <p><stroing>Price:</strong> ${data.price},-</p>
        <p class="basket">Add to basket</p>
        <p class="udsolgt ${data.soldtout && "soldOut"}">Udsolgt</p>
        <p class="tilbud ${data.discount && "isOnSale"}">-${data.discount}%</p>
        <p class="nypris ${data.discount && "isOnSale"}"> ${data.price - (data.price / 100) * data.discount},- new price</p>
      </div>
    `;
  });
