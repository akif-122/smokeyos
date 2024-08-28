let body = document.body;

function bodyOverflow(val = "auto"){
    body.style.overflow = val;
}


let productSideBar = document.getElementById("productSideBar");
let productSideBarClose = document.getElementById("productSideBarClose");
let productCards = document.querySelectorAll(".p-card");

productCards.forEach(card=>{
    card.addEventListener("click", ()=>{
        productSideBar.classList.add("active");
        bodyOverflow("hidden");
    })
})

productSideBarClose.addEventListener("click", ()=>{
    productSideBar.classList.remove("active");
    bodyOverflow("auto");
})


// SIDE CART SECTION
let sideCartClose = document.getElementById("sideCartClose");
let sideCart = document.getElementById("sideCart");
let sideCartToggler = document.querySelectorAll(".side-cart-toggler");

sideCartToggler.forEach(cartToggle=>{
    cartToggle.addEventListener("click", ()=>{
        sideCart.classList.add("active");
        bodyOverflow("hidden");

    })
});

sideCartClose.addEventListener("click", ()=>{
    sideCart.classList.remove("active");
    bodyOverflow("auto");
})