let cartCount = 0;

function addToCart()
{
    cartCount++;

    document.getElementById("cartCount").innerText = cartCount;

    alert("Product added to cart!");
}

function searchProducts()
{
    let input =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

    let products =
    document.querySelectorAll(".product-card");

    products.forEach(product => {

        let text =
        product.innerText.toLowerCase();

        if(text.includes(input))
        {
            product.style.display = "block";
        }
        else
        {
            product.style.display = "none";
        }

    });
}

function filterProducts(category)
{
    let products =
    document.querySelectorAll(".product-card");

    products.forEach(product => {

        if(category === "all")
        {
            product.style.display = "block";
        }
        else if(
            product.classList.contains(category)
        )
        {
            product.style.display = "block";
        }
        else
        {
            product.style.display = "none";
        }

    });
}