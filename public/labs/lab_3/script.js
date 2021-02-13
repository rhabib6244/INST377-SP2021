/* Put your javascript in here */

function arrayMethod() {
  const slideArray = [document.querySelector('#images')];

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


//for (let i = 0; i < document.querySelectorAll('.slider div').length; i++) {
   // slideArray.push(document.querySelectorAll('.slider div')[i].dataset.background);
//}