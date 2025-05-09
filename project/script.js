const products = [
  { id: 1, name: "Shoes", description: "This is product Shoes", price: 1999 },
  {
    id: 2,
    name: "Apple Watch",
    description: "This is product Watch",
    price: 65999,
  },
  {
    id: 3,
    name: "Camera",
    description: "This is product CCamera",
    price: 39999,
  },
];

let cart = [];

function addToCart(newItem) {
  return [...cart, newItem];
}

function removeFromCart(itemIndex) {
  return [...cart.slice(0, itemIndex), ...cart.slice(itemIndex + 1)];
}

function calculateTotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.price, 0);
}

function renderProducts(products) {
  const productContainer = document.getElementById("products-container");
  productContainer.innerHTML = products.map(
    (product) =>
      `
        <div class="card" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text"> ${product.description}</p>
    <hr/>
    <p class="card-text"><b>${product.price} Rs </b></p>
    <button onclick="handleAddToCart(${product.id})" class="btn btn-primary">Add to Cart</button>
  </div>
</div>
        
        `
  );
}

function handleAddToCart(productId) {
  const newItem = products.find((product) => product.id === productId);
  if (newItem) {
    cart = addToCart(newItem);
    renderCart();
  }
}

function handleRemoveFromCart(itemIndex) {
  cart = removeFromCart(itemIndex);
  renderCart();
}

function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceContainer = document.getElementById("total-price");

  cartItemsContainer.innerHTML = cart
    .map(
      (item, index) =>
        `  <div class="cart-item">
            <div class="d-flex justify-content-between">
                <span>${item.name}</span>
                <button onclick="handleRemoveFromCart(${index})" class="btn btn-danger btn-sm">Remove</button>
            </div>
            <div>Price: Rs. ${item.price}</div>
        </div>
        <hr/>
    `
    )
    .join("");

  totalPriceContainer.innerHTML = `
        <h3>Total: Rs. ${calculateTotal(cart)}</h3>
    `;
}

window.onload = function () {
  renderProducts(products);
  renderCart();
};
