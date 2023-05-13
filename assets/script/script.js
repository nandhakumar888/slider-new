// get elements
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const items = document.querySelectorAll(
  ".carousel-container > div:not(.arrow)"
);

// global variable
let currentItem = 0;


// function
function showItem() {
  items.forEach((item) =>
    item.classList.remove("active-item", "has-background")
  );
  items[currentItem].classList.add("active-item", "has-background");

  
  if (currentItem === 0) {
    leftArrow.style.display = "none";
  } else {
    leftArrow.style.display = "block";
  }

  if (currentItem === items.length - 1) {
    rightArrow.style.display = "none";
  } else {
    rightArrow.style.display = "block";
  }
}

function slideLeft() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = items.length - 1;
  }
  showItem();
}

function slideRight() {
  currentItem++;
  if (currentItem >= items.length) {
    currentItem = 0;
  }
  showItem();
}

leftArrow.addEventListener("click", slideLeft);
rightArrow.addEventListener("click", slideRight);

showItem();
