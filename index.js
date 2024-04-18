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



