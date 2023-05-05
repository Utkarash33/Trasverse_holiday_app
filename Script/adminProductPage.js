
let sidebarTwo = document.getElementById("sidebar-two");

fetchAndRenderUsers()
function fetchAndRenderUsers(){
    fetch(`https://frail-show.onrender.com/data`)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        
        sidebarTwo.innerHTML = null;
        let cardList = getCardList(data);
        sidebarTwo.append(cardList);

        return sidebarTwo;

    })
}

function getCardList(data){

    let cardList = document.createElement("div");
    cardList.classList.add("card-list");

    data.forEach(ele => {
        let arr = ele.tourist;

        arr.forEach(item => {
            let card = getCard(item.images, item.name, item.catogary, item.package, item.price);

            cardList.append(card);
            //console.log(cardList)
        })
    });
    return cardList;
    //console.log(cardList)
};


function getCard(image, nameEl, catogaryEl, packageEl, priceEl){
    let card = document.createElement("div");
    card.classList.add("card");

    let cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    let img = document.createElement("img");
    img.classList.add("img");
    img.src = image;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let name = document.createElement("h2");
    name.classList.add("cardBody");
    name.setAttribute("id", "card-name");
    name.innerText = nameEl;

    let ctgry = document.createComment("h3");
    // ctgry.classList.add("cardBody");
    // ctgry.setAttribute("id", "card-catogary");
    ctgry.innerText = catogaryEl;

    let package = document.createElement("h3");
    package.classList.add("cardBody");
    package.setAttribute("id", "card-package");
    package.innerText = packageEl;

    let price = document.createElement("h3");
    price.classList.add("cardBody");
    price.setAttribute("id", "card-price");
    price.innerText = priceEl;

    let cardBtn = document.createElement("div");
    cardBtn.classList.add("card-Btn");

    let removeBtn = document.createElement("button");
    removeBtn.classList.add("classBtn");
    removeBtn.setAttribute("id", "removeBtn");
    removeBtn.innerText = "Remove";

    let editBtn = document.createElement("button");
    editBtn.classList.add("classBtn");
    editBtn.setAttribute("id", "editBtn");
    editBtn.innerText = "Edit";

    cardBtn.append(removeBtn, editBtn);
    cardBody.append(name, ctgry, package, price);
    cardImage.append(img);
    card.append(cardImage, cardBody, cardBtn);

    return card;
}