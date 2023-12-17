let button = document.querySelector('button');
let card = document.querySelector('.cardCreate')
let action = document.querySelector('.action')
let save = document.querySelector('.save');
let tbody = document.querySelector('tbody');
let input = document.querySelector('input');
let inputName = document.querySelector('#name');
let inputDescript = document.querySelector('#descript');
let stocks = [];

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

// table//====================================
function create() {
    let obj = {}
    obj.name = iput.lastElementChild.value;
    stocks.push(obj)
    console.log(stocks);

}

function addCard() {
    card.style.display = 'block'
    action.style.display = 'none'
}
function createCard() {
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
    showcard(action)
}
// Delete products================================
// function deleteProduct(element) {
//     let trs = element.target.closest('tr');FFF

//     stocks.splice(tr -2, 2);
//     console.log(products);
//     if (confirm("do you want to delete this product?")) {
//         saveProducts();
//         createROW();
//     }


// }






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
        // images.addEventListener('click', deleteProduct)


        sell_progrese.appendChild(imge)
        sell_progrese.appendChild(images)
        tr.appendChild(id);
        tr.appendChild(nameproduct);

        tr.appendChild(sell_progrese);
        tbody.appendChild(tr);
        // console.log(tbody);
    }

}

getStorage();
createRow()
// localStorage.clear();