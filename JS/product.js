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
        name: "Shoes",
        categroy: "Shoes",
        quantity: "3",
        price: "20$",
        total: "20$",

    },
    {
        id: 4,
        name: "Bags",
        categroy: "Bags",
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

    for (const object of products) {
        if (id == object.id) {
            object.quantity = e.target.value;
            object.total = (e.target.value * object.price.replace("$", "")) + "$";
        }
    }
    saveProducts()
    createROW()

}
function createROW() {
    loadProducts();
    for (const tr of document.querySelectorAll('tbody tr')) {
        tr.remove();
    }

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

        let btnEdit = document.createElement('button')
        btnEdit.classList.add('edit')
        btnEdit.textContent = 'edit'
        btnEdit.addEventListener('click', editProduct)

        tdId.textContent = product.id
        tdName.textContent = product.name
        tbody.appendChild(tr)

        tr.setAttribute("data-id", product.id);
        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tr.appendChild(tdCategory)
        tr.appendChild(tdqauntity)
        tdqauntity.append(qtyInput)
        tr.appendChild(tdprice)
        tr.appendChild(tdTotalPrice)
        tr.appendChild(tdAction)
        tdAction.appendChild(btnEdit)
        tdAction.appendChild(btnDelete)
    }

}
let quantities = document.querySelectorAll('input');
function getQuantities(event) {
    let qty = event.target.value
    let price = event.target.parentElement.nextElementSibling.textContent.replace('$', "");
    event.target.parentElement.nextElementSibling.nextElementSibling.textContent = event.target.value * price + '$'
}
for (let qty of quantities) {
    qty.addEventListener('change', getQuantities);

}
function deleteProduct(event) {

    let id = event.target.closest('tr').firstElementChild.textContent;

    products.splice(id - 1, 1);
    console.log(products);
    if (confirm("do you want to delete this product?")) {
        saveProducts();
        createROW()
    }
}
// ======================search product=================================
function searchProduct() {
    let search = searchDataInput.value.toLowerCase();
    for (const product of products) {
        let productName = product.name.toLowerCase();
        let productCategory = product.categroy.toLowerCase();
        if (productName.includes(search) || productCategory.includes(search)) {
            document.querySelector(`tr[data-id="${product.id}"]`).style.display =
                "table-row";
        } else {
            document.querySelector(`tr[data-id="${product.id}"]`).style.display =
                "none";
        }
        saveProducts();
    }

}
let searchDataInput = document.querySelector(".input-search");
searchDataInput.addEventListener("keyup", searchProduct);
// =================================search short- product================

function searchCategory() {
    const selectedCategory = shortProduct.value;
    console.log(selectedCategory);
    for (const tr of document.querySelectorAll("tbody tr")) {
        const category = tr.querySelector("td:nth-child(3)").textContent;

        if (selectedCategory === "All Category" || selectedCategory === category) {
            tr.style.display = "table-row";
        } else {
            tr.style.display = "none";
        }
    }
    saveProducts();
}
let shortProduct = document.getElementById("short-product");
shortProduct.addEventListener("change", searchCategory);

// let short_product = document.querySelector('#short-product')
let saveCTYs;
saveCTYs = JSON.parse(localStorage.getItem('stocks'))
console.log(saveCTYs);
for(let save of saveCTYs){
    let option = document.createElement('option')
    option.textContent = save.name
    shortProduct.appendChild (option)
}
// =======================add product================

let newProducts = [];

function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}
let dom_click_add_product = document.querySelector("#click-add");
dom_click_add_product.addEventListener("click", (e) => {
    let dom_dialog = document.querySelector("#product-dialog");
    show(dom_dialog);
});
let onCancel = document.querySelector(".cancel");
onCancel.addEventListener("click", (e) => {
    let dom_dialog = document.querySelector("#product-dialog");
    hide(dom_dialog);
});

function add_product() {
    let dom_dialog = document.querySelector("#product-dialog");
    show(dom_dialog);
    for (const newProduct of newProducts) {
        let tr = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdCategory = document.createElement("td");
        let tdQuantity = document.createElement("td");
        let qtyInput = document.createElement("input");
        let tdPrice = document.createElement("td");
        let tdTotalPrice = document.createElement("td");
        let tdAction = document.createElement("td");
        let btnDelete = document.createElement("button");

        tdQuantity.dataset.id = newProduct.id;

        qtyInput.setAttribute("type", "number");
        qtyInput.setAttribute("min", "0");
        qtyInput.value = newProduct.quantity;
        qtyInput.addEventListener("change", updatePrice);

        btnDelete.classList.add("delete");
        btnDelete.textContent = "delete";
        btnDelete.addEventListener("click", deleteProduct);

        let btnEdit = document.createElement("button");
        btnEdit.classList.add("edit");
        btnEdit.textContent = "edit";
        btnEdit.addEventListener("click", editProduct);
        tdId.textContent = newProduct.id;
        // console.log(id);
        tdName.textContent = newProduct.name;
        tr.setAttribute("data-id", newProduct.id);
        tbody.appendChild(tr);
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdCategory);
        tr.appendChild(tdQuantity);
        tdQuantity.append(qtyInput);
        tr.appendChild(tdPrice);
        tr.appendChild(tdTotalPrice);
        tr.appendChild(tdAction);
        tdAction.appendChild(btnEdit);
        tdAction.appendChild(btnDelete);
    }
    createBtn()
}

 
function createBtn() {

    const title = document.querySelector("#title");
    
    const quantity = document.querySelector("#quantity");
    const price = document.querySelector("#price");
    const total = document.querySelector("#total");

    if (products.length === 0) {
        uniqueId = 1;
    } else {
        uniqueId = products[products.length - 1].id + 1;
    }


    let newProduct = {
        id: uniqueId,
        name: title.value,
        categroy: category.value,
        quantity: quantity.value,
        price: price.value,
    };
    // categories.push(newProduct.categroy);
    products.push(newProduct);
    saveProducts();
    loadProducts();
    // createROW();
    updatePrice();
    title.value = "";
    category.value = "";
    quantity.value = "";
    price.value = "";
    total.value = "";
    let dom_dialog = document.querySelector("#product-dialog");
    hide(dom_dialog);
}
let option_category= document.querySelector("#category")
saveCTYs = JSON.parse(localStorage.getItem('stocks'))
for(let save of saveCTYs){
    let option = document.createElement('option')
    option.textContent = save.name
    option_category.appendChild (option)
}
const create = document.querySelector(".create_Btn");
create.addEventListener("click", createBtn);
create.addEventListener("click", (e) => {
    let dom_dialog = document.querySelector("#product-dialog");

    hide(dom_dialog);
});


function editProduct(event) {
    
    let tr = event.target.closest('tr');
    let id = tr.dataset.id;
    let product = products.find((p) => p.id === parseInt(id));

    // Update the product details in the form
    
    let title = document.querySelector("#title");
    let category = document.querySelector("#category");
    category.style.display = 'none'
    let quantity = document.querySelector("#quantity");
    let price = document.querySelector("#price");
    let dom_dialog= document.querySelector("#product-dialog");
    let createBtn = document.querySelector(".create_Btn");

    title.value = product.name;
    category.value = product.categroy;
    quantity.value = product.quantity;
    price.value = product.price;

    // Show the dialog and update the create button
   
    show(dom_dialog);
    createBtn.textContent = "Update";
    createBtn.removeAttribute('onclick')
    createBtn.setAttribute('onclick', `updateProduct(${id})`)
    console.log(createBtn);
    // createBtn.removeEventListener("click", createBtn);
    // createBtn.addEventListener("click", () => updateProduct(id));
    // add_product()
}
function getStorage() {
    if (JSON.parse(localStorage.getItem('products')) != null) {
        products = JSON.parse(localStorage.getItem('products'));
    }
}

function updateProduct(id) {
    let product = products.find((p) => p.id === parseInt(id));

    // Get the updated product details from the form
    let title = document.querySelector("#title").value;
    let category = document.querySelector("#category").value;
    let quantity = document.querySelector("#quantity").value;
    let price = document.querySelector("#price").value;

    // Update the product in the array
    products[id].name = title;
    products[id].categroy = category;
    products[id].quantity = quantity;
    products[id].price = price;
    saveProducts();
    // createROW()
    getStorage() 
    // Hide the dialog
    let dom_dialog = document.querySelector("#product-dialog");
    hide(dom_dialog);
}
// getStorage()
loadProducts()
createROW();
// localStorage.clear()


