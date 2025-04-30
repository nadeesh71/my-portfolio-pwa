document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productImage = document.getElementById('productImage').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    const newProduct = {
        name: productName,
        image: productImage,
        price: productPrice
    };

    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    alert('Product added!');
    document.getElementById('productForm').reset();

    // Notify the product grid page to update
    window.dispatchEvent(new Event('productsUpdated'));
});