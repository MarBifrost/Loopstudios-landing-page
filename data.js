fetch("data.json")
  .then(function (response) {
    return response.json();
  })


    .then(function (images) {
    let placeHolder = document.querySelector("#images");
    let out = []
    ; 

  


    for (let imagess of images) {
        out += `
        <div class="img1">
            <img src="${imagess.imgSrc}" class="img_hover" alt="imgs">
            <h4>${imagess.txt}</h4>
        </div>
    `;

    }


    console.log(out)
    placeHolder.innerHTML = out;




});


//Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav_link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

}


function openNav() {
    document.getElementsByClassName("nav_link").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementsByClassName("nav_link").style.width = "0%";
  }