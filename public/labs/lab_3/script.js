let i = 1;

let arrayOfImages = Array.from(carousel.querySelectorAll("li"));
window.console.log("arrOfImages:", arrayOfImages);

arrayOfImages.forEach((li) => {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
});

let width = 130; 
let count = 3; 

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0;

function prevClicked() {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
}

function nextClicked() {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
}
