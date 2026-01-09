document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const checkoutButton = document.getElementById("checkout-btn");
  const emptyCartMessage = document.getElementById("empty-cart");
  const totalAmount = document.getElementById("total-price");

  const products = [
    {id: 1, name: "Product 1", price: 34.99},
    {id: 2, name: "Product 2", price: 59.99},
    {id: 3, name: "Product 3", price: 19.99},
  ]

  const items = [];

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price}</span>
    <button data-id="${product.id}">Add to Cart</button>
    `;
    
    productList.append(productDiv);
  })

  productList.addEventListener("click", (e) => {
    
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute('data-id'));
      const product = products.forEach(p => p.id === productId);
      addToCart(product) 
    }

    function addToCart (product) {
      items.push(product);
      console.log(product);
      
    }

})

})