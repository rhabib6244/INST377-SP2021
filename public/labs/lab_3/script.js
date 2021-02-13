/* Put your javascript in here */

function arrayMethod() {
  const slides = document.querySelectorAll("li");
  const slideArray = Array.from(slides);

  const listContainer = document.createElement("ul");
  const target = document.querySelector("#carou");
  target.append(listContainer);
}
  slideArray.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.innerText = element;
    listContainer.append(listItem);
    console.log(element);
    button.addEventListener("click",(event) => {transform: translateX()
  });
}
    button.addEventListener("click",(event) => alert("Hello!"));