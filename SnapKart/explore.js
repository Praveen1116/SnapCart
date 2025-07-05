const searchInput = document.querySelector("#search-input");
const productContainer = document.querySelectorAll(".product");

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const searchTerm = searchInput.value.trim();
        productContainer.forEach(product => {
            // Get the product id from the link's href
            const link = product.querySelector("a[href^='product.html?id=']");
            if (link) {
                const url = new URL(link.href, window.location.origin);
                const id = url.searchParams.get("id");
                // Show product if id matches search term, or if search is empty
                if (searchTerm === "" || id === searchTerm) {
                    console.log("found");
                    product.style.display = "";
                } else {
                    product.style.display = "none";
                }
            }
        });
    }
});