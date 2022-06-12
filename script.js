const inputTextEl = document.querySelector('#text');
const btnEl = document.querySelector('.btn');
const listEl = document.querySelector('.list');

function addUserValue(){
    let userValue = inputTextEl.value.trim();
    
    if (userValue !== '') {
        const newElOfList = listEl.insertAdjacentHTML('beforeend', '<li></li>');
        const valueOfNewLi = listEl.lastElementChild.insertAdjacentText('afterbegin', `${userValue}`);        
    } else {
        alert('There is nothing to add!');
    }   
    
    userValue = inputTextEl.value = '';    
}

btnEl.onclick = addUserValue;