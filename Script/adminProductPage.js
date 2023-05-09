
let sidebarTwo = document.getElementById("sidebar-two");

fetchAndRenderUsers()
function fetchAndRenderUsers(){
    fetch(`https://frail-show.onrender.com/data`)
    .then(res => res.json())
    .then((data) => {
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
        let locEl = ele.location || ele.name;
        let id = ele.id;
        let arr = ele.tourist;

        arr.forEach(item => {
            let card = getCard(item.images, item.name, item.catogary, item.package, item.price, item.info , locEl, id);

            cardList.append(card);
            //console.log(cardList)
        })
    });
    return cardList;
    //console.log(cardList)
};


function getCard(image, nameEl, catogaryEl, packageEl, priceEl,infoEl,locEl,id){
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
    price.innerText = `Rs. ${priceEl}`;

    let cardBtn = document.createElement("div");
    cardBtn.classList.add("card-Btn");

    let removeBtn = document.createElement("button");
    removeBtn.classList.add("classBtn");
    removeBtn.setAttribute("id", "removeBtn");
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener("click",()=>
    {
      fetch(`https://frail-show.onrender.com/data`)
      .then(res => res.json())
      .then((data) => {
             
          data.forEach(element => {
              if(element.name == locEl || element.location == locEl){
                  addLoc(element.id)
              }
          });
          
      })  
  function addLoc(id)
  {
      fetch(`https://frail-show.onrender.com/data/${id}`)
      .then(response => response.json())
      .then(data => {
        let tour =[]
        data.tourist.filter((elm)=>
        {
          if(elm["name"]!=nameEl && elm["info"]!=infoEl)
          {
            tour.push(elm)
          }
          
        })
        data.tourist= tour
        fetch(`https://frail-show.onrender.com/data/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(result => {
          })
          .catch(error => {
            console.error( error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  } 
    setTimeout(() => {
      alert (`Data has been removed!`);
      //window.location.href="./adminProductPage.html";
    }, 1500);
    })
    let editBtn = document.createElement("button");
    editBtn.classList.add("classBtn");
    editBtn.setAttribute("id", "editBtn");
    editBtn.innerText = "Edit";
   
    editBtn.addEventListener("click",()=>
    {  let form = document.querySelector("form");
       let loc = document.getElementById("location");
       let namein = document.getElementById("name");
       let info = document.getElementById("info");
       let imag = document.getElementById("image");
       let price = document.getElementById("price");
       let  package = document.getElementById("package");
       let catogary = document.getElementById("catogary");
       let submt = document.getElementById("submit")

      namein.value = name.innerText;
      imag.value =  image;
      price.value = priceEl;
      package.value = packageEl;
      price.value = priceEl 
      info.value = infoEl;
      loc.value = locEl;
      catogary.value = catogaryEl;
       form.addEventListener("submit",(e)=>
       { 
        e.preventDefault();
            let name = document.getElementById("name").value;

            postDataToAPI();
            
            setTimeout(() => {
              alert (`Data has been updated !`);
             // window.location.href="./adminProductPage.html";
            }, 1500);
        })
        function postDataToAPI(){
            fetch(`https://frail-show.onrender.com/data`)
            .then(res => res.json())
            .then((data) => {
                   
                data.forEach(element => {
                    if(element.name == loc.value || element.location == loc.value){
                        addLoc(element.id)
                    }
                });
                
            })
            
        }
        function addLoc(id)
        {
            fetch(`https://frail-show.onrender.com/data/${id}`)
            .then(response => response.json())
            .then(data => {
              data.tourist.forEach((elm)=>
              {
                
                if(elm["info"] == info.value || elm["name"]== namein.value)
              {
                elm["name"] = namein.value;
                elm["images"] = imag.value;
                elm["catogary"]= catogary.value;
                elm["price"] = price.value;
                elm["info"] = info.value;
                elm["package"] = package.value;
                return elm
              }
              })
              fetch(`https://frail-show.onrender.com/data/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              })
                .then(response => response.json())
                .then(result => {
                })
                .catch(error => {
                  console.error( error);
                });
            })
            .catch(error => {
              console.error(error);
            });
        } 
        //location.reload()
        
       })

    cardBtn.append(removeBtn, editBtn);
    cardBody.append(name, ctgry, package, price);
    cardImage.append(img);
    card.append(cardImage, cardBody, cardBtn);

    return card;
}