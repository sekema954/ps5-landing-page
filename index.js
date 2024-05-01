const inputEl = document.querySelectorAll(".form-controll");
inputEl.forEach(element=>{
    element.attributes.required = "required";
});

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
    });
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





//tab-function
const tabs = document.querySelectorAll(".tab-content");
const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const tab4 = document.querySelector(".tab4");

const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
const content4 = document.querySelector(".content4");

tabs.forEach(tab=>{
    tab.style.display = "none";
    tab1.classList.add("active-tab");
    content1.classList.add("active");
});



openTab1();
function openTab1() {
    tab1.addEventListener("click", ()=>{
        tab1.classList.add("active-tab");
        content1.classList.add("active");

        tab2.classList.remove("active-tab");
        content2.classList.remove("active");

        tab3.classList.remove("active-tab");
        content3.classList.remove("active");

        tab4.classList.remove("active-tab");
        content4.classList.remove("active");
    })
};


openTab2();
function openTab2() {
    tab2.addEventListener("click", ()=>{
        tab2.classList.add("active-tab");
        content2.classList.add("active");

        tab1.classList.remove("active-tab");
        content1.classList.remove("active");

        tab3.classList.remove("active-tab");
        content3.classList.remove("active");

        tab4.classList.remove("active-tab");
        content4.classList.remove("active");
    })
};


openTab3();
function openTab3() {
    tab3.addEventListener("click", ()=>{
        tab3.classList.add("active-tab");
        content3.classList.add("active");

        tab1.classList.remove("active-tab");
        content1.classList.remove("active");

        tab2.classList.remove("active-tab");
        content2.classList.remove("active");

        tab4.classList.remove("active-tab");
        content4.classList.remove("active");

    })
};


openTab4();
function openTab4() {
    tab4.addEventListener("click", ()=>{
        tab4.classList.add("active-tab");
        content4.classList.add("active");

        tab1.classList.remove("active-tab");
        content1.classList.remove("active");

        tab2.classList.remove("active-tab");
        content2.classList.remove("active");

        tab3.classList.remove("active-tab");
        content3.classList.remove("active");
    })
};


//testimony
var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}



