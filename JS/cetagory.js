let button = document.querySelector('button');
let cardCreate = document.querySelector('.cardCreate')
let action = document.querySelector('.action')
let save = document.querySelector('.save');
let tbody = document.querySelector('tbody');
let input = document.querySelector('input');
let iput = document.querySelector('.iput');
// console.log(iput.lastElementChild.value);

function showard() {
    cardCreate.style.display = "block"
    action.style.display = "none"


    save.lastElementChild.addEventListener('click', nonecard)
}

button.addEventListener('click', showard)
function nonecard() {
    cardCreate.style.display = "none"
    action.style.display = "block"
}

// table//====================================
let stocks = []
function create() {
    
    let obj = {}
    obj.name = iput.lastElementChild.value;
    obj.id = iput.firstElementChild.nextElementSibling.value;
    stocks.push(obj)
    console.log(stocks);
    for (let stock of stocks) {
        createRow(stock)
    }
    nonecard()

}
function saveCetagory() {
    localStorage.setItem('stocks', JSON.stringify(stocks));
}

// function loadProducts() {
//     let loadProducts = JSON.parse(localStorage.getItem('stocks'));
//     console.log(loadProducts);
//     if (loadProducts != null) {
//         loadProducts=stocks
//     }
//     else {
//         saveCetagory()
//     }
// }





save.firstElementChild.addEventListener('click', create)
function createRow(stock) {
    let tr = document.createElement('tr')
    let id = document.createElement('td');
    id.textContent = 1
    let nameproduct = document.createElement('td')
    nameproduct.textContent = stock.name
    let sell_progrese = document.createElement('td');
    let imge = document.createElement('img')
    imge.classList.add('image')
    imge.src = '../image/edit.png';

    let images = document.createElement('img');
    images.classList.add('image')
    images.src = '../image/trash.png';

    sell_progrese.appendChild(imge)
    sell_progrese.appendChild(images)
    tr.appendChild(id);
    tr.appendChild(nameproduct);

    tr.appendChild(sell_progrese);
    tbody.appendChild(tr);
    console.log(tbody);
    

}

// loadProducts() 
createRow()