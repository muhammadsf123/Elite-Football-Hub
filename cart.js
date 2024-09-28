// Sample product data structure
const products = [
    { name: "Nike Premier League Football", price: 7.99 },
    { name: "Nike Mercurial 2024 Next Gen", price: 15.99 },
    { name: "Mens Elite Tottenham Hotspur Home Shirt 2024/25", price: 35.99 }, 
    { name: "Mens Tottenham Hotspur 2024/25 Kit", price: 54.99 }, 
    { name: "Goalkeeper Gloves", price: 7.99 }
];

// Load cart from localStorage or initialize it
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to add item to the cart
function addToCart(product) {
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
}

// Update the cart count displayed in the navbar
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.length; // Update cart count
}

// Function to display cart items in checkout
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    cartItemsContainer.innerHTML = ''; // Clear previous items

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - £${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price; // Calculate total price
    });

    cartTotal.textContent = total.toFixed(2); // Update total price displayed
}

// Event listeners for product buttons
document.addEventListener('DOMContentLoaded', () => {
    const productButtons = document.querySelectorAll('.add-to-cart'); 
    productButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.dataset.name; 
            const productPrice = parseFloat(button.dataset.price); // Ensure price is a number

            // Add the product to the cart
            addToCart({ name: productName, price: productPrice });

            // Show a notification that the product has been added
            alert(`${productName} has been added to your cart!`);
        });
    });

    // Initialize cart count and display cart items on the checkout page
    updateCartCount();
    displayCartItems();
});
