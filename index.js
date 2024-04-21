//scroll function




//menuClicked
menuClicked();
function menuClicked(){
    const menuBar = document.querySelector(".menu-bar");
    const dropdownWrapper = document.querySelector(".dropdown-wrapper");
    const navLinks = document.querySelector(".dropdown")
    menuBar.addEventListener("click", ()=>{
        menuBar.classList.toggle("change"); //toggle classlist
        dropdownWrapper.classList.toggle("changeHeight");
        navLinks.classList.toggle("showLinks"); //toggle links visiblity
    })
}



//add shadow to navbar on window scroll.
const navbar = document.querySelector(".navbar");
window.onscroll = ()=>{
    if(window.scrollY >= 100) {
        navbar.classList.add("scrollDown");
    } else {
        navbar.classList.remove("scrollDown");
    }
}


//move carousel
const prevBtn = document.querySelector(".carousel-control-prev-icon");
const nextBtn = document.querySelector(".next-icon");
const cardBody = document.querySelector(".carousel-item");

nextBtn.addEventListener("click", ()=> {
    cardBody.scrollLeft += -200;
})

