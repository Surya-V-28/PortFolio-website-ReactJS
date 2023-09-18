import React from 'react'
import './SlideNavBar.css'
const SlideNavBar = () => {
    const dropdownBtn = document.querySelector(".dropdown__button");
const dropdownItems = document.querySelector(".dropdown__items");

let isOpen = false;

const openDropdown = () => {
  isOpen = !isOpen;

  if (isOpen) {
    dropdownItems.classList.replace("dropdown--hide", "dropdown--show");
  } else {
    dropdownItems.classList.replace("dropdown--show", "dropdown--hide");
  }
};

dropdownBtn.addEventListener("click", openDropdown);

  return (
    <>
      
      <div class="dropdown">
  <button class="dropdown__button">Open dropdown<i class="fa-solid fa-caret-down"></i></button>
  <div class="dropdown__items dropdown--hide">
    <button class="dropdown__item">Dropdown item 1</button>
    <button class="dropdown__item">Dropdown item 2</button>
    <button class="dropdown__item">Dropdown item 3</button>
  </div>
</div>
    </>
  )
}

export default SlideNavBar