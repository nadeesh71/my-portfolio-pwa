const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const payButton = document.getElementById('pay-button');
let shoppingCart = [];
let favorites = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement;
        const productId = product.dataset.id;
        const productName = product.querySelector('h3').textContent;
        const productPrice = parseFloat(product.dataset.price);

        shoppingCart.push({ id: productId, name: productName, price: productPrice });
        updateCart();
        cart.style.display = 'block';
    });
});

document.querySelectorAll('.add-to-fav').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement;
        const productId = product.dataset.id;
        const productName = product.querySelector('h3').textContent;

        if (favorites.includes(productId)) {
            favorites = favorites.filter(id => id !== productId);
            this.classList.remove('active');
        } else {
            favorites.push(productId);
            this.classList.add('active');
            alert(`${productName} added to favorites!`);
        }
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    shoppingCart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            shoppingCart = shoppingCart.filter(cartItem => cartItem.id !== item.id);
            updateCart();
        });

        listItem.appendChild(removeButton);
        cartItems.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = total;
}

payButton.addEventListener('click', function() {
    window.location.href = 'checkout.html'; // Redirect to checkout page
});