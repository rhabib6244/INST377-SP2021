/* Put your javascript in here */

function arrayMethod() {
  const array1 = document.querySelector('#images');

  const listContainer = document.createElement('ul');
  const target = document.querySelector('.ribbon');
  target.append(listContainer);

  array1.forEach((element) => {
    const listItem = document.createElement('li');
    listItem = element;
    listContainer.append(listItem);
  });
}

function loadPage(){
    document.addEventListener('click', (event) => {alert('Hi!')
    }
}