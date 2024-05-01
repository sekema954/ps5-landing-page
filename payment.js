var baseBundle = 499.99;
var gowBundle = 599.99;
var spidermanBundle = 599.99;

var bundle1 = document.querySelector(".first");
var bundle2 = document.querySelector(".second");
var bundle3 = document.querySelector(".third");


//bundle 1 onclick set total 
bundle1.addEventListener("click", ()=>{
    var priceTotal = document.querySelector(".total-price");
    var payButtonValue = document.querySelector(".pay-btn");
    priceTotal.textContent = `$${baseBundle}`;
    payButtonValue.textContent = `Pay $${baseBundle}`;
});

//bundle 2 onclick set total

bundle2.addEventListener("click", ()=> {
    var priceTotal = document.querySelector(".total-price");
    var payButtonValue = document.querySelector(".pay-btn");
    priceTotal.textContent = `$${gowBundle}`;
    payButtonValue.textContent = `Pay $${gowBundle}`;
})

//bundle 3 onclick set total
bundle3.addEventListener("click", ()=> {
    var priceTotal = document.querySelector(".total-price");
    var payButtonValue = document.querySelector(".pay-btn");
    priceTotal.textContent = `$${spidermanBundle}`;
    payButtonValue.textContent = `Pay $${spidermanBundle}`;
});



//alert cart empty if total = 0

const payBtn = document.querySelector(".pay-btn");
payBtn.addEventListener("click", ()=>{
    const formInputs = document.querySelectorAll(".form-controll");
    const totalElement = document.querySelector(".total-price").textContent;
    if(totalElement === "0" || isNaN(totalElement())) {
        alert("Cart Empty!");
    } else {
        location.href = "/paymentcomplete.html";
    }
});



