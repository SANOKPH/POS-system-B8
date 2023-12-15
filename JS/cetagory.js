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
 

// table//==



let tbody=document.querySelector('tbody');

let stocks = [
    {
        Id: 1,
        cetagorys : "nike",
        Image:'../image/trash.png',
        image:'../image/edit.png',
    },
    {
        Id: 1,
        cetagorys : "nike",
        Image:'../image/trash.png',
        image:'../image/edit.png',
    },
    {
        Id: 1,
        cetagorys : "nike",
        Image:'../image/trash.png',
        image:'../image/edit.png',
    },
    {
        Id: 1,
        cetagorys : "nike",
        Image:'../image/trash.png',
        image:'../image/edit.png',
    },
    {
        Id: 1,
        cetagorys : "nike",
        Image:'../image/trash.png',
        image:'../image/edit.png',
    },
    {
        Id: 1,
        cetagorys : "nike",
        Image:'../image/trash.png',
        image:'../image/edit.png',
    },

]
function createRow (stock){
    let tr = document.createElement('tr')
    let id = document.createElement('td');
    id.textContent = stock.Id
    let nameproduct = document.createElement('td')
    nameproduct.textContent =stock.cetagorys
    let sell_progrese = document.createElement('td');
    let imge = document.createElement('img')
    imge.classList.add('image')
    imge.src = stock.Image;

    let images=document.createElement('img');
    images.classList.add('image')
    images.src=stock.image;

    // imge.classList.add('image')
    sell_progrese.appendChild(imge)
    sell_progrese.appendChild(images)
    tr.appendChild(id);
    tr.appendChild(nameproduct);
    // tr.appendChild(cetagory);
    // tr.appendChild(prices);
    // tr.appendChild(amouts);
    tr.appendChild(sell_progrese);
    tbody.appendChild(tr);
    console.log(tbody);

}



for(let stock of stocks){
    createRow(stock)
}

