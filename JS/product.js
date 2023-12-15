let products = [
    {
        id: 1,
        name: "jeans",
        categroy: "Boy's clothes",
        quantity: "1",
        price: "12$",
        total: "12$",

    },
    {
        id: 2,
        name: "T-shirt",
        categroy: "Girl's clothes",
        quantity: "1 ",
        price: "10$",
        total: "10$",

    },
    {
        id: 3,
        name: "shoes",
        categroy: "shoes",
        quantity: "3",
        price: "20$",
        total: "20$",

    },
    {
        id: 4,
        name: "Bags",
        categroy: "Justing Star",
        quantity: "1",
        price: "5$",
        total: "5$",

    },
];

const tbody = document.querySelector('tbody')
console.log(tbody);

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

function loadProducts() {
    let loadProducts = JSON.parse(localStorage.getItem('products'));
    console.log(loadProducts);
    if (loadProducts != null) {
        products = loadProducts
    }
    else {
        saveProducts()
    }
}
function updatePrice(e) {
    let id = e.target.parentElement.dataset.id;
    console.log(id);
    for (const object of products) {
        if (id == object.id) {
            object.quantity = e.target.value;
            object.total = (e.target.value * object.price.replace("$", "")) + "$";
        }
    }
    saveProducts()
    createROW()
    create_product();
}
// localStorage.clear()

function createROW() {
    loadProducts();
    for (const tr of document.querySelectorAll('tbody tr')) {
        tr.remove();
    }
    console.log(products);
    for (const product of products) {
        let tr = document.createElement('tr')
        let tdId = document.createElement('td');
        let tdName = document.createElement('td')
        let tdCategory = document.createElement('td')
        let tdqauntity = document.createElement('td')
        let qtyInput = document.createElement('input')
        let tdprice = document.createElement('td')
        let tdTotalPrice = document.createElement('td')
        let tdAction = document.createElement('td')
        let btnDelete = document.createElement('button')
        tdCategory.textContent = product.categroy

        tdqauntity.dataset.id = product.id;

        qtyInput.setAttribute('type', 'number');
        qtyInput.setAttribute('min', '0');
        qtyInput.value = product.quantity;
        qtyInput.addEventListener('change', updatePrice)
        tdprice.textContent = product.price
        tdTotalPrice.textContent = product.total
        btnDelete.classList.add('delete')
        btnDelete.textContent = 'delete'
        btnDelete.addEventListener("click", deleteProduct)

        let btnEdite = document.createElement('button')
        btnEdite.classList.add('edit')
        btnEdite.textContent = 'edit'

        tdId.textContent = product.id
        tdName.textContent = product.name
        tbody.appendChild(tr)
        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tr.appendChild(tdCategory)
        tr.appendChild(tdqauntity)
        tdqauntity.append(qtyInput)
        tr.appendChild(tdprice)
        tr.appendChild(tdTotalPrice)
        tr.appendChild(tdAction)
        tdAction.appendChild(btnEdite)
        tdAction.appendChild(btnDelete)
    }

}
let quantities = document.querySelectorAll('input');
function getQuantities(event) {
    // TODO
    let qty = event.target.value
    console.log(qty);
    let price = event.target.parentElement.nextElementSibling.textContent.replace('$', "");

    event.target.parentElement.nextElementSibling.nextElementSibling.textContent = event.target.value * price + '$'
    console.log(price);

}


for (let qty of quantities) {
    qty.addEventListener('change', getQuantities);
    
}

function deleteProduct(event) {
    console.log("hi");
    let id = event.target.closest('tr').firstElementChild.textContent;
    // console.log(element);
    products.splice(id - 1, 1);
    console.log(products);
    if (confirm("do you want to delete this product?")) {
        saveProducts();
        createROW();
    }
    
}
loadProducts()
createROW()
// localStorage.clear();