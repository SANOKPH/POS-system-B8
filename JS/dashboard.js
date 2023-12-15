let tbody = document.querySelector('tbody');
let show_result = document.querySelector('.show_result')
let Income = document.querySelector('.Income');
let instoks = [
    {
        id: 1,
        NameProduct: 'Nike',
        Cetagory: "addidas",
        price: 200,
        Amount: "rith",
        Sell_program: 'thearith'
    },
    {
        id: 1,
        NameProduct: 'Nike',
        Cetagory: "addidas",
        price: 200,
        Amount: "rith",
        Sell_program: 'thearith'
    },
    {
        id: 1,
        NameProduct: 'Nike',
        Cetagory: "addidas",
        price: 200,
        Amount: "rith",
        Sell_program: 'thearith'
    },
    {
        id: 1,
        NameProduct: 'Nike',
        Cetagory: "nike",
        price: 200,
        Amount: "rith",
        Sell_program: 'thearith'
    },
    {
        id: 1,
        NameProduct: 'Nike',
        Cetagory: "nike",
        price: 200,
        Amount: "rith",
        Sell_program: 'thearith'
    },
    {
        id: 1,
        NameProduct: 'Nike',
        Cetagory: "nike",
        price: 200,
        Amount: "rith",
        Sell_program: 'thearith'
    },
    {
        id: 1,
        NameProduct: 'Nike',
        Cetagory: "nike",
        price: 200,
        Amount: "rith",
        Sell_program: 'thearith'
    },
]

//  --------------display products Row ----------------------------------

function CreateRow(stock){
    let tr = document.createElement('tr')
    let Id = document.createElement('td');
    Id.textContent = stock.id
    let product = document.createElement('td');
    product.textContent = stock.NameProduct;
    let Cgy = document.createElement('td');
    Cgy.textContent = stock.Cetagory;
    let pri = document.createElement('td');
    pri.textContent = stock.price;
    let AMT = document.createElement('td');
    AMT.textContent = stock.Amount;
    let program = document.createElement('td')
    program.textContent = stock.Sell_program;
    tr.appendChild(Id);
    tr.appendChild(product);
    tr.appendChild(Cgy);
    tr.appendChild(pri);
    tr.appendChild(AMT);
    tr.appendChild(program);
    tbody.appendChild(tr)
}
let count = 0
let someprice = 0
let checkecategory = instoks[0].Cetagory
for(let i = 0; i <instoks.length; i++){
    if(i < 4){
      CreateRow(instoks[i])  
    }
    count += 1
    someprice += instoks[i].price
;
}

Income.lastElementChild.lastElementChild.textContent = someprice+"$"
show_result.firstElementChild.textContent = count
// ------------save date ------------
function savestock() {
    localStorage.setItem("stok", JSON.stringify(instoks));
}
function getStock() {
    if (JSON.parse(localStorage.getItem("stok") != null)) {
        instoks = JSON.parse(localStorage.getItem("stok"));
    }
    console.log(instoks);
}
// -----------------get localStorage--------
savestock()
getStock()
// localStorage.clear()