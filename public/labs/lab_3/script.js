/* Put your javascript in here */

function arrayMethod() {
  const slideArray = [document.querySelector(".li")];

  const listContainer = document.createElement("ul");
  const target = document.querySelector(".carousel");
  target.append(listContainer);

  slideArray.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.innerText = element;
    listContainer.append(listItem);
  });
}
function loadPage() {
  document.addEventListener("click", (event) => {
    arrayMethod();
  });
}
