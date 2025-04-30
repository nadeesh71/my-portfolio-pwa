// Function to update the product grid
function updateProductGrid() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Clear the grid

    let products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.dataset.price = product.price;

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
        `;

        productGrid.appendChild(productDiv);
    });
}

// Initial grid update
updateProductGrid();

// Listen for updates from the dashboard
window.addEventListener('productsUpdated', updateProductGrid);