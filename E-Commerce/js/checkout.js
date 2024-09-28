// Get cart from localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to display cart items and total price
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    // Clear any existing items
    cartItemsContainer.innerHTML = '';

    // Loop through the cart items and create HTML elements for each
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name} - £${item.price}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
        
        // Update total price
        total += parseFloat(item.price);
    });

    // Set the total price in the cart total element
    cartTotal.textContent = total.toFixed(2); // Format to 2 decimal places
}

// Call the function to display cart items when the page loads
window.onload = displayCartItems;
