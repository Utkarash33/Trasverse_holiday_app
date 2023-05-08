let Container = document.getElementById("Destination-Data");
let Data =  JSON.parse(localStorage.getItem("Destination-Book")) || [];
let Login  = document.getElementById("LoginText");

async function FetchData(){
    try{
        let request = await fetch("https://frail-show.onrender.com/data");
        request = await request.json();
        console.log(request);
        Display(request);
    }catch(error){
        console.log(error);
    }
}

FetchData();

function Display(data){
    // e.preventDefault()
    Container.innerHTML = "";
    data.forEach((element) => {
        let card = document.createElement("div");
        let location = document.createElement("h5");
        location.textContent = element.location;

        let image = document.createElement("img");
        image.src = element.img;

        card.append(image,location);
        card.addEventListener("click",()=>
        {
            singleCards(element.id)
        })
        Container.append(card);
    });
}

let DestinationData = document.getElementById("tourist-Data");

FetchTouristData()
async function FetchTouristData(){
    try{
        let request = await fetch("https://frail-show.onrender.com/data");
        request = await request.json();
        //console.log(request);
        //Display(request);
        DisplayTouristData(request)
        //searchData(request);
    }catch(error){
        console.log(error);
    }
}


function DisplayTouristData(data){
    DestinationData.innerHTML=null
    data.forEach(ele => {
        let data2 = ele.tourist;
        data2.forEach((element) => {

            let card = document.createElement("div");
            card.setAttribute("class", "card");

            let left = document.createElement("div");
            left.setAttribute("class", "cardLeft");

            let middle = document.createElement("div");
            middle.setAttribute("class", "cardMiddle");
            middle.innerHTML=null
            let right = document.createElement("div");
            right.setAttribute("class", "cardiRght");

            let image = document.createElement("img");
            let name = document.createElement("h4");
            let info = document.createElement("p");

            let packageDiv = document.createElement("div");
            packageDiv.setAttribute("class", "packageD");
            let package = document.createElement("p");
            let catogary = document.createElement("p");

            let rating = document.createElement("p");
            rating.setAttribute("id", "ratingD");

            let EMIDiv = document.createElement("div");
            EMIDiv.setAttribute("class", "EMI-D");
            let Emi = document.createElement("p");
            let Emiprice = document.createElement("p");
            let Emidisprice = (element.price * 8) / 100;

            Emi.textContent = 'EMI';
            Emiprice.textContent = `Rs. ${Emidisprice}`;

            let priceDiv = document.createElement("div");
            priceDiv.setAttribute("class", "price-D");

            let price = document.createElement("s");
            price.style.color = "gray";
            let dprice = document.createElement("h4");
            let disprice = (element.price * 15) / 100;
            let dp = element.price - disprice
            price.textContent = `Rs. ${element.price}`;
            dprice.textContent = `Rs. ${dp}`;
 
            let priceDsc = document.createElement("p");
            priceDsc.setAttribute("class", "priceDsc");
            priceDsc.textContent = 'Per Person on twin sharing';

            let book_Now = document.createElement("button");


            book_Now.textContent = "Book Now";
            book_Now.addEventListener("click",() =>{
             if(Login.innerText == "Log Out")
             {
              Data.push(element);
              localStorage.setItem("Destination-Book", JSON.stringify(Data))
               window.location.href = "./address.html"
             }
  
             else
                {
                    alert("User has to Login")
                    window.location.href = "./userlogin.html"
                }
             });

            image.src = element.images;
            name.textContent = element.name;
            info.textContent = element.info;
            package.textContent = element.package;
            catogary.textContent = element.catogary;
            rating.textContent = element.Rating;
        

            
            left.append(image);
            packageDiv.append(package,catogary)
            EMIDiv.append(Emi,Emiprice)
            priceDiv.append(price,dprice)
            middle.append(name,info,packageDiv,rating);
            right.append(EMIDiv,priceDiv,priceDsc,book_Now);
            card.append(left,middle,right);
            DestinationData.append(card);
        });
    });

}
// ====================================================login===============================================================//


let data=JSON.parse(localStorage.getItem("userdata"))||[];
let x= false;
  data.forEach((elm)=>
  {
    if(elm.present==true)
    {
      x= true;
    }
  })
  if(x==false)
  {
    Login.innerText="Resister"
  }
  else
  {
    Login.innerText = "Log Out"
  }
Login.addEventListener("click",()=>
{ 
  if(Login.innerText == "Resister")
    {
    window.location.href="./userlogin.html"
    }
     else if(Login.innerText == "Log Out")
    { 
     data.forEach((elm)=>
     {
      elm.present= false;
     })
      localStorage.setItem("userdata",JSON.stringify(data))
      Login.innerText = "Resister"
    }
})
 let myBooking = document.getElementById("mybookings")
 myBooking.addEventListener("click",()=>
 {
  if(Login.innerText == "Log Out")
  {
    window.location.href ="./mybookings.html"
  }
  
  else
  {
    alert("User has to Login")
    window.location.href = "./userlogin.html"
  }
 })

// =================================================catogory buttons=================================================//



let Beach = document.getElementById("Beach")
Beach.addEventListener("click",(()=>{filterData("Beach")}))
 let Hills = document.getElementById("Hills")
 Hills.addEventListener("click",()=>{filterData("Hills")})
 let Temple = document.getElementById("Temple")
 Temple.addEventListener("click",()=>{filterData("Temple")})
 let Desert = document.getElementById("Desert")
 Desert.addEventListener("click",()=>{filterData("Desert")})
 let Lake = document.getElementById("Lake")
 Lake.addEventListener("click",()=>{filterData("Lake")})
 let Fort = document.getElementById("Fort")
 Fort.addEventListener("click",()=>{filterData("Fort")})
 let MountainS = document.getElementById("Mountain Snawfall")
 MountainS.addEventListener("click",()=>{filterData("Mountain snowfall")})
 let Mountain = document.getElementById("Mountain")
 Mountain.addEventListener("click",()=>{filterData("Mountain")})
 let MountainC = document.getElementById("Mountain Climbing")
 MountainC.addEventListener("click",()=>{filterData("Mountain Climbing")})
 let Dam = document.getElementById("Dam")
 Dam.addEventListener("click",()=>{filterData("Dam")})
 let Museum = document.getElementById("Museum")
 Museum.addEventListener("click",()=>{filterData("Museum")})

let all = document.getElementById("trend")
all.addEventListener("click",()=>{FetchTouristData()})

 function filterData(val)
            { 
            let arr=[]
            for(let y=1;y<=8;y++)
            {
            fetch(`https://frail-show.onrender.com/data/${y}`)
            .then(response => response.json())
            .then(data => {
                data.tourist.forEach((elm)=>
                {
                if(elm["catogary"]==val)
                {
                    arr.push(elm)
                }
                })
                
                })
                .catch((err)=>
                {
                    console.log(err)
                })
                }
                setTimeout(()=>
                {
                    DestinationData.innerHTML=""
                    arr.forEach((element) => {
                    
                        let card = document.createElement("div");
                        card.setAttribute("class", "card");

                        let left = document.createElement("div");
                        left.setAttribute("class", "cardLeft");

                        let middle = document.createElement("div");
                        middle.setAttribute("class", "cardMiddle");
                        let right = document.createElement("div");
                        right.setAttribute("class", "cardiRght");

                        let image = document.createElement("img");
                        let name = document.createElement("h4");
                        let info = document.createElement("p");

                        let packageDiv = document.createElement("div");
                        packageDiv.setAttribute("class", "packageD");
                        let package = document.createElement("p");
                        let catogary = document.createElement("p");

                        let rating = document.createElement("p");
                        rating.setAttribute("id", "ratingD");

                        let EMIDiv = document.createElement("div");
                        EMIDiv.setAttribute("class", "EMI-D");
                        let Emi = document.createElement("p");
                        let Emiprice = document.createElement("p");
                        let Emidisprice = (element.price * 8) / 100;

                        Emi.textContent = 'EMI';
                        Emiprice.textContent = `Rs. ${Emidisprice}`;

                        let priceDiv = document.createElement("div");
                        priceDiv.setAttribute("class", "price-D");

                        let price = document.createElement("s");
                        price.style.color = "gray";
                        let dprice = document.createElement("h4");
                        let disprice = (element.price * 15) / 100;
                        let dp = element.price - disprice
                        price.textContent = `Rs. ${element.price}`;
                        dprice.textContent = `Rs. ${dp}`;
            
                        let priceDsc = document.createElement("p");
                        priceDsc.setAttribute("class", "priceDsc");
                        priceDsc.textContent = 'Per Person on twin sharing';

                        let book_Now = document.createElement("button");


                        book_Now.textContent = "Book Now";
                        book_Now.addEventListener("click",() =>{
                            Data.push(element);
                            localStorage.setItem("Destination-Book", JSON.stringify(Data))
                            window.location.href = "./address.html"
                        });

                        image.src = element.images;
                        name.textContent = element.name;
                        info.textContent = element.info;
                        package.textContent = element.package;
                        catogary.textContent = element.catogary;
                        rating.textContent = element.Rating;
                    

                        
                        left.append(image);
                        packageDiv.append(package,catogary)
                        EMIDiv.append(Emi,Emiprice)
                        priceDiv.append(price,dprice)
                        middle.append(name,info,packageDiv,rating);
                        right.append(EMIDiv,priceDiv,priceDsc,book_Now);
                        card.append(left,middle,right);
                        DestinationData.append(card);
                    });
                },1000)
            
 }






//  ===================================================================price filter=================================================]//

 let one = document.getElementById("one")
 let two = document.getElementById("two")
 let three = document.getElementById("three")
 let four = document.getElementById("four")
 let five = document.getElementById("five")
 let six = document.getElementById("six")
 let seven = document.getElementById("seven")
 let eight = document.getElementById("eight")
 let nine = document.getElementById("nine")
 one.addEventListener("click",()=>{prices(1000,3000)})
 two.addEventListener("click",()=>{prices(3000,8000)})
 three.addEventListener("click",()=>{prices(8000,10000)})
 four.addEventListener("click",()=>{prices(10000,15000)})
 five.addEventListener("click",()=>{prices(15000,20000)})
 six.addEventListener("click",()=>{prices(20000,25000)})
 seven.addEventListener("click",()=>{prices(25000,30000)})
 eight.addEventListener("click",()=>{prices(30000,35000)})
 nine.addEventListener("click",()=>{prices(35000,10000000)})
 
 function prices(a,b)
 {
    let arr=[]
    for(let y=1;y<=8;y++)
    {
    fetch(`https://frail-show.onrender.com/data/${y}`)
    .then(response => response.json())
    .then(data => {
        data.tourist.forEach((elm)=>
        {
        if(elm["price"]>=a && elm["price"]<=b)
        {
            arr.push(elm)
        }
        })
        
        })
        .catch((err)=>
        {
            console.log(err)
        })
        }
        setTimeout(()=>
        {
            DestinationData.innerHTML=""
            arr.forEach((element) => {
            
                let card = document.createElement("div");
                card.setAttribute("class", "card");

                let left = document.createElement("div");
                left.setAttribute("class", "cardLeft");

                let middle = document.createElement("div");
                middle.setAttribute("class", "cardMiddle");
                let right = document.createElement("div");
                right.setAttribute("class", "cardiRght");

                let image = document.createElement("img");
                let name = document.createElement("h4");
                let info = document.createElement("p");

                let packageDiv = document.createElement("div");
                packageDiv.setAttribute("class", "packageD");
                let package = document.createElement("p");
                let catogary = document.createElement("p");

                //let ratingDiv = document.createElement("div");
                let rating = document.createElement("p");
                rating.setAttribute("id", "ratingD");

                let EMIDiv = document.createElement("div");
                EMIDiv.setAttribute("class", "EMI-D");
                let Emi = document.createElement("p");
                let Emiprice = document.createElement("p");
                let Emidisprice = (element.price * 8) / 100;

                Emi.textContent = 'EMI';
                Emiprice.textContent = `Rs. ${Emidisprice}`;

                let priceDiv = document.createElement("div");
                priceDiv.setAttribute("class", "price-D");

                let price = document.createElement("s");
                price.style.color = "gray";
                let dprice = document.createElement("h4");
                let disprice = (element.price * 15) / 100;
                let dp = element.price - disprice
                price.textContent = `Rs. ${element.price}`;
                dprice.textContent = `Rs. ${dp}`;
    
                let priceDsc = document.createElement("p");
                priceDsc.setAttribute("class", "priceDsc");
                priceDsc.textContent = 'Per Person on twin sharing';

                let book_Now = document.createElement("button");


                book_Now.textContent = "Book Now";
                book_Now.addEventListener("click",() =>{
                    Data.push(element);
                    localStorage.setItem("Destination-Book", JSON.stringify(Data))
                    window.location.href = "./address.html"
                });

                image.src = element.images;
                name.textContent = element.name;
                info.textContent = element.info;
                package.textContent = element.package;
                catogary.textContent = element.catogary;
                rating.textContent = element.Rating;
            
                left.append(image);
                packageDiv.append(package,catogary)
                EMIDiv.append(Emi,Emiprice)
                priceDiv.append(price,dprice)
                middle.append(name,info,packageDiv,rating);
                right.append(EMIDiv,priceDiv,priceDsc,book_Now);
                card.append(left,middle,right);
                DestinationData.append(card);
            });
        },1000)
 }


//  =========================================sort====================================================================//


let sortBtn = document.getElementById("select-tag")

sortBtn.addEventListener("change",()=>
    {
       sortData()
    })
 
 function sortData()
 {
  let arr=[]
  for(let y=1;y<=8;y++)
  {
  fetch(`https://frail-show.onrender.com/data/${y}`)
  .then(response => response.json())
  .then(data => {
      data.tourist.forEach((elm)=>
      {
      
          arr.push(elm)
      })
      
      })
      .catch((err)=>
      {
          console.log(err)
      })
      }
      setTimeout(()=>
      {
         if(sortBtn.value=="Price Low To High")
         {
            arr.sort((a,b)=>
            {
               return a.price-b.price
            })
           DestinationData.innerHTML=""
           arr.forEach((element) => {
           
               let card = document.createElement("div");
               card.setAttribute("class", "card");
 
               let left = document.createElement("div");
               left.setAttribute("class", "cardLeft");
 
               let middle = document.createElement("div");
               middle.setAttribute("class", "cardMiddle");
               let right = document.createElement("div");
               right.setAttribute("class", "cardiRght");
 
               let image = document.createElement("img");
               let name = document.createElement("h4");
               let info = document.createElement("p");
 
               let packageDiv = document.createElement("div");
               packageDiv.setAttribute("class", "packageD");
               let package = document.createElement("p");
               let catogary = document.createElement("p");
 
               let rating = document.createElement("p");
               rating.setAttribute("id", "ratingD");
 
               let EMIDiv = document.createElement("div");
               EMIDiv.setAttribute("class", "EMI-D");
               let Emi = document.createElement("p");
               let Emiprice = document.createElement("p");
               let Emidisprice = (element.price * 8) / 100;
 
               Emi.textContent = 'EMI';
               Emiprice.textContent = `Rs. ${Emidisprice}`;
 
               let priceDiv = document.createElement("div");
               priceDiv.setAttribute("class", "price-D");
 
               let price = document.createElement("s");
               price.style.color = "gray";
               let dprice = document.createElement("h4");
               let disprice = (element.price * 15) / 100;
               let dp = element.price - disprice
               price.textContent = `Rs. ${element.price}`;
               dprice.textContent = `Rs. ${dp}`;
   
               let priceDsc = document.createElement("p");
               priceDsc.setAttribute("class", "priceDsc");
               priceDsc.textContent = 'Per Person on twin sharing';
 
               let book_Now = document.createElement("button");
 
 
               book_Now.textContent = "Book Now";
               book_Now.addEventListener("click",() =>{
                   Data.push(element);
                   localStorage.setItem("Destination-Book", JSON.stringify(Data))
                   window.location.href = "./address.html";
                });
 
               image.src = element.images;
               name.textContent = element.name;
               info.textContent = element.info;
               package.textContent = element.package;
               catogary.textContent = element.catogary;
               rating.textContent = element.Rating;
           
 
               
               left.append(image);
               packageDiv.append(package,catogary)
               EMIDiv.append(Emi,Emiprice)
               priceDiv.append(price,dprice)
               middle.append(name,info,packageDiv,rating);
               right.append(EMIDiv,priceDiv,priceDsc,book_Now);
               card.append(left,middle,right);
               DestinationData.append(card);
           });
           
         }
         else if(sortBtn.value="Price High To Low")
           {
            arr.sort((a,b)=>
            {
               return b.price-a.price
            })
           DestinationData.innerHTML=""
           arr.forEach((element) => {
           
               let card = document.createElement("div");
               card.setAttribute("class", "card");
 
               let left = document.createElement("div");
               left.setAttribute("class", "cardLeft");
 
               let middle = document.createElement("div");
               middle.setAttribute("class", "cardMiddle");
               let right = document.createElement("div");
               right.setAttribute("class", "cardiRght");
 
               let image = document.createElement("img");
               let name = document.createElement("h4");
               let info = document.createElement("p");
 
               let packageDiv = document.createElement("div");
               packageDiv.setAttribute("class", "packageD");
               let package = document.createElement("p");
               let catogary = document.createElement("p");
 
               //let ratingDiv = document.createElement("div");
               let rating = document.createElement("p");
               rating.setAttribute("id", "ratingD");
 
               let EMIDiv = document.createElement("div");
               EMIDiv.setAttribute("class", "EMI-D");
               let Emi = document.createElement("p");
               let Emiprice = document.createElement("p");
               let Emidisprice = (element.price * 8) / 100;
 
               Emi.textContent = 'EMI';
               Emiprice.textContent = `Rs. ${Emidisprice}`;
 
               let priceDiv = document.createElement("div");
               priceDiv.setAttribute("class", "price-D");
 
               let price = document.createElement("s");
               price.style.color = "gray";
               let dprice = document.createElement("h4");
               let disprice = (element.price * 15) / 100;
               let dp = element.price - disprice
               price.textContent = `Rs. ${element.price}`;
               dprice.textContent = `Rs. ${dp}`;
   
               let priceDsc = document.createElement("p");
               priceDsc.setAttribute("class", "priceDsc");
               priceDsc.textContent = 'Per Person on twin sharing';
 
               let book_Now = document.createElement("button");
 
 
               book_Now.textContent = "Book Now";
               book_Now.addEventListener("click",() =>{
                   Data.push(element);
                   localStorage.setItem("Destination-Book", JSON.stringify(Data))
                   window.location.href = "./address.html";
                });
 
               image.src = element.images;
               name.textContent = element.name;
               info.textContent = element.info;
               package.textContent = element.package;
               catogary.textContent = element.catogary;
               rating.textContent = element.Rating;
           
 
               
               left.append(image);
               packageDiv.append(package,catogary)
               EMIDiv.append(Emi,Emiprice)
               priceDiv.append(price,dprice)
               middle.append(name,info,packageDiv,rating);
               right.append(EMIDiv,priceDiv,priceDsc,book_Now);
               card.append(left,middle,right);
               DestinationData.append(card);
           });
           }
      },1000)
 }


//==============================================search=====================================================================//
  let searchD = document.getElementById("search2")
  searchD.addEventListener("keyup",()=>
  {
    if(searchD.value=="")
    {
        FetchData()
    }
    else 
    {
    let arr=[]
    for(let y=1;y<=8;y++)
    {
    fetch(`https://frail-show.onrender.com/data/${y}`)
    .then(response => response.json())
    .then(data => {
        data.tourist.forEach((elm)=>
        {
        if(elm["name"].toUpperCase().includes(searchD.value.toUpperCase()))
        {
            arr.push(elm)
        }
        })
        
        })
        .catch((err)=>
        {
            console.log(err)
        })
        }
        setTimeout(()=>
        {
            DestinationData.innerHTML=""
            arr.forEach((element) => {
            
                let card = document.createElement("div");
                card.setAttribute("class", "card");

                let left = document.createElement("div");
                left.setAttribute("class", "cardLeft");

                let middle = document.createElement("div");
                middle.setAttribute("class", "cardMiddle");
                let right = document.createElement("div");
                right.setAttribute("class", "cardiRght");

                let image = document.createElement("img");
                let name = document.createElement("h4");
                let info = document.createElement("p");

                let packageDiv = document.createElement("div");
                packageDiv.setAttribute("class", "packageD");
                let package = document.createElement("p");
                let catogary = document.createElement("p");

                //let ratingDiv = document.createElement("div");
                let rating = document.createElement("p");
                rating.setAttribute("id", "ratingD");

                let EMIDiv = document.createElement("div");
                EMIDiv.setAttribute("class", "EMI-D");
                let Emi = document.createElement("p");
                let Emiprice = document.createElement("p");
                let Emidisprice = (element.price * 8) / 100;

                Emi.textContent = 'EMI';
                Emiprice.textContent = `Rs. ${Emidisprice}`;

                let priceDiv = document.createElement("div");
                priceDiv.setAttribute("class", "price-D");

                let price = document.createElement("s");
                price.style.color = "gray";
                let dprice = document.createElement("h4");
                let disprice = (element.price * 15) / 100;
                let dp = element.price - disprice
                price.textContent = `Rs. ${element.price}`;
                dprice.textContent = `Rs. ${dp}`;
    
                let priceDsc = document.createElement("p");
                priceDsc.setAttribute("class", "priceDsc");
                priceDsc.textContent = 'Per Person on twin sharing';

                let book_Now = document.createElement("button");


                book_Now.textContent = "Book Now";
                book_Now.addEventListener("click",() =>{
                    Data.push(element);
                    localStorage.setItem("Destination-Book", JSON.stringify(Data))
                    window.location.href = "./address.html"
                });

                image.src = element.images;
                name.textContent = element.name;
                info.textContent = element.info;
                package.textContent = element.package;
                catogary.textContent = element.catogary;
                rating.textContent = element.Rating;
            
                
                left.append(image);
                packageDiv.append(package,catogary)
                EMIDiv.append(Emi,Emiprice)
                priceDiv.append(price,dprice)
                middle.append(name,info,packageDiv,rating);
                right.append(EMIDiv,priceDiv,priceDsc,book_Now);
                card.append(left,middle,right);
                DestinationData.append(card);
            });
        },2000)
    }
  })


// =======================================single==========================================================================//


function singleCards(id)
{
    let arr=[]
    fetch(`https://frail-show.onrender.com/data/${id}`)
    .then(response => response.json())
    .then(data => {
        data.tourist.forEach((elm)=>
        {
            arr.push(elm)
        })
        })
        .catch((err)=>
        {
            console.log(err)
        })
        setTimeout(()=>
        {
            console.log(arr)
            DestinationData.innerHTML=""
            arr.forEach((element) => {
                let card = document.createElement("div");
                card.setAttribute("class", "card");

                let left = document.createElement("div");
                left.setAttribute("class", "cardLeft");

                let middle = document.createElement("div");
                middle.setAttribute("class", "cardMiddle");
                let right = document.createElement("div");
                right.setAttribute("class", "cardiRght");

                let image = document.createElement("img");
                let name = document.createElement("h4");
                let info = document.createElement("p");

                let packageDiv = document.createElement("div");
                packageDiv.setAttribute("class", "packageD");
                let package = document.createElement("p");
                let catogary = document.createElement("p");

                //let ratingDiv = document.createElement("div");
                let rating = document.createElement("p");
                rating.setAttribute("id", "ratingD");

                let EMIDiv = document.createElement("div");
                EMIDiv.setAttribute("class", "EMI-D");
                let Emi = document.createElement("p");
                let Emiprice = document.createElement("p");
                let Emidisprice = (element.price * 8) / 100;

                Emi.textContent = 'EMI';
                Emiprice.textContent = `Rs. ${Emidisprice}`;

                let priceDiv = document.createElement("div");
                priceDiv.setAttribute("class", "price-D");

                let price = document.createElement("s");
                price.style.color = "gray";
                let dprice = document.createElement("h4");
                let disprice = (element.price * 15) / 100;
                let dp = element.price - disprice
                price.textContent = `Rs. ${element.price}`;
                dprice.textContent = `Rs. ${dp}`;
    
                let priceDsc = document.createElement("p");
                priceDsc.setAttribute("class", "priceDsc");
                priceDsc.textContent = 'Per Person on twin sharing';

                let book_Now = document.createElement("button");


                book_Now.textContent = "Book Now";
                book_Now.addEventListener("click",() =>{
                    Data.push(element);
                    localStorage.setItem("Destination-Book", JSON.stringify(Data))
                    window.location.href = "./address.html"
                });

                image.src = element.images;
                name.textContent = element.name;
                info.textContent = element.info;
                package.textContent = element.package;
                catogary.textContent = element.catogary;
                rating.textContent = element.Rating;
            
                
                left.append(image);
                packageDiv.append(package,catogary)
                EMIDiv.append(Emi,Emiprice)
                priceDiv.append(price,dprice)
                middle.append(name,info,packageDiv,rating);
                right.append(EMIDiv,priceDiv,priceDsc,book_Now);
                card.append(left,middle,right);
                DestinationData.append(card);
            });
        },2000)
}