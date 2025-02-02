
document.addEventListener("DOMContentLoaded", () => {
    fetch("products.json")
        .then(response => response.json())
        .then(data => {
            let productSection = document.getElementById("products");
            productSection.innerHTML = data.map(product => `
                <div class="product">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                </div>
            `).join("");
        });
});
