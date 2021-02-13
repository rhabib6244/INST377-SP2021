/* Put your javascript in here */

function arrayMethod() {
  const slides = document.querySelectorAll("li");
  const slideArray = Array.from(slides);

  const listContainer = document.createElement("ul");
  const target = document.querySelector(".carousel");
  target.append(listContainer);

  slideArray.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.innerText = element;
    listContainer.append(listItem);
    console.log(element);
    element.addEventListener("click",(event) => {transform: translateX()
  });
}
