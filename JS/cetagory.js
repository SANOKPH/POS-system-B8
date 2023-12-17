let button = document.querySelector('button');
let card = document.querySelector('.cardCreate')
let action = document.querySelector('.action')
let save = document.querySelector('.save');
let tbody = document.querySelector('tbody');
let input = document.querySelector('input');
let inputName = document.querySelector('#name');
let inputDescript = document.querySelector('#descript');
let stocks = [];
<<<<<<< HEAD
// ---------save stoc-----------
=======
console.log(stocks)

>>>>>>> remove_category
function saveStorage() {
    localStorage.setItem('stocks', JSON.stringify(stocks));
}

function getStorage() {
    if (JSON.parse(localStorage.getItem('stocks')) != null) {
        stocks = JSON.parse(localStorage.getItem('stocks'));
    }
}
function showcard(event) {
    event.style.display = "block";
}

function hidecard(event) {
    event.style.display = 'none';
}

button.onclick = () => {
    hidecard(action);
    showcard(card);
}

// =================Table//====================================
// function create() {
//     let obj = {}
//     obj.name = input.lastElementChild.value;
//     stocks.push(obj)
//     console.log(stocks);

// }

function addCard() {
    card.style.display = 'block'
    action.style.display = 'none'
}
function createCard() {
    if (inputName.value === ""){
        return alert('You must input value before create ')
    }
    let uniqesID = localStorage.getItem('id');
    if (uniqesID === null) {
        uniqesID = 1;
        localStorage.setItem('id', JSON.stringify(uniqesID));
    } else {
        uniqesID = parseInt(uniqesID) + 1;
        localStorage.setItem('id', JSON.stringify(uniqesID));
    }
    let cards = {
        id: uniqesID,
        name: inputName.value
    }
    stocks.push(cards);
    // console.log(stocks);
    createRow()
    saveStorage();
    location.reload()
}
function cencel() {
    hidecard(card);
    showcard(action);
};
//===================== Delete products================================
function deleteProduct(e) {
    let tr = e.target.closest('tr');
    let id = tr.firstElementChild.textContent;
    let idToDelete = stocks.findIndex(cards => cards.id === parseInt(id));
    let isConfirm = confirm('Are you sure you want to delete this card?');
    if (idToDelete !== -1 && isConfirm) {
        tr.remove();
        stocks.splice(idToDelete, 1);
    } else {
        console.log('Canceled delete!');
    }
    saveStorage();

<<<<<<< HEAD

=======
}
>>>>>>> remove_category
function createRow() {
    for (let stock of stocks) {
        let tr = document.createElement('tr')
        let id = document.createElement('td');
        id.textContent = stock.id
        let nameproduct = document.createElement('td')
        nameproduct.textContent = stock.name
        let sell_progrese = document.createElement('td');
        let imge = document.createElement('img')
        imge.classList.add('image')
        imge.src = '../image/edit.png';
        imge.addEventListener('click', addCard)

        let images = document.createElement('img');
        images.classList.add('image')
        images.src = '../image/trash.png';
<<<<<<< HEAD
        console.log(images);


        imge.addEventListener('click', addCard)
    
        console.log(images);
=======
        images.addEventListener('click', deleteProduct)

>>>>>>> remove_category
        sell_progrese.appendChild(imge)
        sell_progrese.appendChild(images)
        tr.appendChild(id);
        tr.appendChild(nameproduct);

        tr.appendChild(sell_progrese);
        tbody.appendChild(tr);
    }

}

getStorage();
createRow()
// localStorage.clear();