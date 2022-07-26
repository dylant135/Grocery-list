const itemInput = document.querySelector('#item-input');
const submit = document.querySelector('#submit');
const list = document.querySelector('#list');

//event listeners
submit.addEventListener('click', add);
list.addEventListener('click', checktrash);



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
    //delete button
    const trash = document.createElement('button');
    trash.classList.add('trash');
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    itemContainer.appendChild(trash);
    //add item
    list.appendChild(itemContainer);

    itemInput.value = '';
}

function checktrash(e) {
    const item = e.target;
    if(item.classList[0] === 'trash') {
        const del = item.parentElement;
        del.remove();
    } else if(item.classList[0] === 'check') {
        const cha = item.parentElement;
        cha.classList.add('checked');
    }
}