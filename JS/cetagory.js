let button = document.querySelector('button');
let cardCreate = document.querySelector('.cardCreate')
let action = document.querySelector('.action')

    
function showard(){
    cardCreate.style.display ="block"
    console.log(1);
    action.style.display = "none"
    let save = document.querySelector('.save');
    console.log(save);
    save.lastElementChild.addEventListener('click', nonecard) 
}

button.addEventListener('click', showard)
function nonecard(){
    cardCreate.style.display ="none"
    console.log(1);
    action.style.display = "block" 
}
 
