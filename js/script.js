let menus=document.querySelector("nav");
let menuBtn=document.querySelector(".menu-btn");
let closeBtn=document.querySelector(".close-btn");
// for the menu open and close buttons for responsiveness
menuBtn.addEventListener("click",function(){
    menus.classList.add("active");
})
closeBtn.addEventListener("click",function(){
    menus.classList.remove("active");
})

// static counter

const countersEl=document.querySelectorAll('.num');
countersEl.forEach((countersEl)=>{
countersEl.innerText="0";
incrementCounter();

function incrementCounter(){
    let currentNUm=+countersEl.innerText;
    const dataceil=+countersEl.getAttribute("data-ceil");//gets the target value
const increment=dataceil/15;//portion by which increament 
currentNUm=Math.ceil(currentNUm+increment);//round up je increment hoil te

if(currentNUm<dataceil){//check if increment+value =target
countersEl.innerText=currentNUm;//update
setTimeout(incrementCounter,70);//slowly update
}
else{
    countersEl.innerHTML=dataceil;
}
}
});

// sticky menus
const nav=document.querySelector("header");
window.addEventListener("scroll",function(){
  if(this.document.documentElement.scrollTop>20){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }

})

// swiper js code
// var swiper = new Swiper(".mySwiper", {
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,
// });

// services
const SectionCenter=document.querySelector('.menus_items_container');
const filterBtns=document.querySelectorAll('.btn-cat');
filterBtns.forEach(function(btn){
  btn.addEventListener("click",function(e){
    const Category=e.currentTarget.dataset.id;
    const menuCategory=menu.filter(function(menuItem){
      if(menuItem.Category==Category){
        return menuItem;
      }
    });
    if(Category=="all"){
      displayMenusItem(menu);
    }
    else{
      displayMenusItem(menuCategory);
    }
  })
 
});
const menu =[
  {
    "id": 1,
    "title": "lorem lorem",
    "Category": "Lunch",
    "price": 100,
    "img": "./imgs/dacare.jpeg"
  },
  {
    "id": 2,
    "title": "lorem lorem",
    "Category": "Starter",
    "price": 100,
    "img": "./imgs/ct2.webp"
  },
  {
    "id": 3,
    "title": "lorem lorem",
    "Category": "Dinner",
    "price": 100,
    "img": "./imgs/groom.jpeg"
  },
  {
    "id": 4,
    "title": "lorem lorem",
    "Category": "Drinks",
    "price": 100,
    "img": "./imgs/party.jpeg"
  },
  {
    "id": 5,
    "title": "lorem lorem",
    "Category": "Drinks",
    "price": 100,
    "img": "./imgs/petdoc.webp"
  },
  {
    "id": 6,
    "title": "lorem lorem",
    "Category": "Lunch",
    "price": 100,
    "img": "./imgs/groom.jpeg"
  },
  {
    "id": 7,
    "title": "lorem lorem",
    "Category": "Dinner",
    "price": 100,
    "img": "./imgs/petimg1.jpg"
  },
  {
    "id": 8,
    "title": "lorem lorem",
    "Category": "Lunch",
    "price": 100,
    "img": "./imgs/petplay.webp"
  },
  {
    "id": 9,
    "title": "lorem lorem",
    "Category": "Starter",
    "price": 100,
    "img": "./imgs/sleep.jpeg"
  }
  
]
window.addEventListener("DOMContentLoaded",function(){
  displayMenusItem(menu);
})

function displayMenusItem (menuItem) {
let displayMenusItem = menuItem.map(function(item){

return `<div class="img_cards">
<img src=${item.img} alt="" />
<p class="price">${item.price}</p>
<p>${item.title}</p>
</div>`;
})
displayMenusItem = displayMenusItem.join("");
SectionCenter.innerHTML=displayMenusItem;
}
   
 
// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    520: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    // 640: {
    //   slidesPerView: 2,
    //   spaceBetween: 20
    // },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1070: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    200: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  }
});

// registration form validation
document.getElementById('bookButton').addEventListener('click', function() {
  // Basic validation
  const name = document.getElementById('name').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const email = document.getElementById('email').value.trim();

  const date = document.getElementById('date').value;
 
  const instructions = document.getElementById('instructions').value.trim();
  const phoneRegex = /^[0-9]{10}$/; // Matches 10 digits only
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
 
 
  if (!name || !contact || !email  || !date ) {
      alert("Please fill in all required fields.");
      return;
  }
  if (!phoneRegex.test(contact)) {
    alert("Please enter a valid 10-digit contact number.");
    return;
}
// Other methods like .match(), .search(), or .replace() can also work with regular expressions, but they return different types of results (e.g., an array of matches, index of match, or modified string), which might not be as directly useful for simple validation tasks.

if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
}

  // If all fields are valid, reset the form
  document.getElementById('bookingForm').reset();
  alert("Booking successful!");
});