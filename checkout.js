const checkoutForm = document.getElementById('checkout-form');

checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Here you would process the order (e.g., send data to a server)
    alert(`Order placed!\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nEmail: ${email}`);
});