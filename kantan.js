// Responsive nav
const nav = document.querySelector("nav");
const navList = document.querySelector("nav ul");


// If custom menu-button does not exsist: create one
if (!document.querySelector('.menu-button')) {
  const openMenuText = "Menu";
  const closeMenuText = "Close";

  let menuButton = document.createElement("a");
  menuButton.innerText = openMenuText;
  menuButton.classList.add("menu-button");
  nav.append(menuButton);

  menuButton.addEventListener("click", () => {
    navList.classList.toggle("open-menu");
    if (menuButton.innerText === openMenuText) {
      menuButton.innerText = closeMenuText;
    } else {
      menuButton.innerText = openMenuText;
    }
  });
} else {
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener("click", () => {
    navList.classList.toggle("open-menu");
  });
}

// Dropdowns
function applyDropdownClass() {
  const nav = document.querySelector("nav");
  const nestedLists = nav.querySelectorAll("ul ul");

  nestedLists.forEach((list) => {
    list.classList.add("dropdown");
  });
}

applyDropdownClass();

// Mobile dropdowns
function addDropdownListeners() {
  const dropdowns = document.querySelectorAll("nav ul .dropdown");
  dropdowns.forEach((dropdown) => {
    const dropdownTrigger = dropdown.previousElementSibling;
    if (dropdownTrigger){
      dropdownTrigger.addEventListener("click", toggleDropdown);
    } else {
      dropdown.addEventListener("click", toggleDropdown);
    }
  });
}

function removeDropdownListeners() {
  const dropdowns = document.querySelectorAll("nav ul .dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("open-dropdown");
    const dropdownTrigger = dropdown.previousElementSibling;
    if (dropdownTrigger){
      dropdownTrigger.removeEventListener("click", toggleDropdown);
    }
  });
}

function toggleDropdown(e) {
  e.preventDefault();
  const dropdown = e.target.nextElementSibling;
  dropdown.classList.toggle("open-dropdown");
}

function handleWindowResize() {
  if (window.matchMedia("(max-width: 899px)").matches) {
    addDropdownListeners();
  } else {
    removeDropdownListeners();
  }
}

window.addEventListener("resize", handleWindowResize);
handleWindowResize();




/* ********************** | SCROLL ANIMATION | ********************** */
/* ********************** | SCROLL ANIMATION | ********************** */

// Create observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("postpone-animation");
    }
  });
});

//Get all types of animation elements in DOM and add .postpone-animation to classlist
const fadeInElements = document.querySelectorAll(".fade-in");
fadeInElements.forEach((el) => el.classList.add("postpone-animation"));

const blurInElements = document.querySelectorAll(".blur-in");
blurInElements.forEach((el) => el.classList.add("postpone-animation"));

const slideUpElements = document.querySelectorAll(".slide-up");
slideUpElements.forEach((el) => el.classList.add("postpone-animation"));

const slideDownElements = document.querySelectorAll(".slide-down");
slideDownElements.forEach((el) => el.classList.add("postpone-animation"));

const slideLeftElements = document.querySelectorAll(".slide-left");
slideLeftElements.forEach((el) => el.classList.add("postpone-animation"));

const slideRightElements = document.querySelectorAll(".slide-right");
slideRightElements.forEach((el) => el.classList.add("postpone-animation"));

//Observe each hidden element
const postponedAnimations = document.querySelectorAll(".postpone-animation");
postponedAnimations.forEach((el) => observer.observe(el));
