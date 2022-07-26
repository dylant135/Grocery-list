const itemInput = document.querySelector('#item-input');
const submit = document.querySelector('#submit');
const list = document.querySelector('.list');

//event listeners
submit.addEventListener('click', add);




//functions
function add(event) {

    event.preventDefault();
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    //item
    const item = document.createElement('li');
    item.classList.add('item');
    item.innerText = itemInput.value; 
    itemContainer.appendChild(item);
    //check mark button
    const check = document.createElement('button');
    check.classList.add('check');
    check.innerHTML = '<i class="fas fa-check"></i>';
    itemContainer.appendChild(check);
    //add item
    list.appendChild(itemContainer);

    itemInput.value = '';
}