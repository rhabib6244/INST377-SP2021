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

/* configuration */
let width = 130; // image width
let count = 3; // visible images count

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0; // ribbon scroll position

function prevClicked() {
  // shift left
  position += width * count;
  // can't move to the left too much, end of images
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
}

function nextClicked() {
  // shift right
  position -= width * count;
  // can only shift the ribbbon for (total ribbon length - visible count) images
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
}
