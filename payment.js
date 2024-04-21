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
    priceTotal.textContent = `${baseBundle}`;
    payButtonValue.textContent = `${baseBundle}`;
});

//bundle 2 onclick set total

bundle2.addEventListener("click", ()=> {
    var priceTotal = document.querySelector(".total-price");
    var payButtonValue = document.querySelector(".pay-btn");
    priceTotal.textContent = `${gowBundle}`;
    payButtonValue.textContent = `${gowBundle}`;
})

//bundle 3 onclick set total
bundle3.addEventListener("click", ()=> {
    var priceTotal = document.querySelector(".total-price");
    var payButtonValue = document.querySelector(".pay-btn");
    priceTotal.textContent = `${spidermanBundle}`;
    payButtonValue.textContent = `${spidermanBundle}`;
})


//change pay btn value 



