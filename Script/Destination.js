let Container = document.getElementById("Destination-Data");
let Data =  JSON.parse(localStorage.getItem("Destination-Book")) || [];

// let logggedIn = localStorage.getItem("loggedIn") || false;
// let sign_in = document.getElementById("sign-in");
// if(logggedIn !== false){
//     sign_in.innerText = "Sign Out"
//     sign_in.href="index.html";
// }

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
        let location2 = document.createElement("h5");
        let image = document.createElement("img");
        let visit = document.createElement("button");

        visit.textContent = "Select Destination";
        location.textContent = element.name;
        location2.textContent = element.location;
        image.src = element.img;

        card.append(image,location2,location);
        Container.append(card);
    });
}



let DestinationData = document.getElementById("tourist-Data");

FetchTouristData()
async function FetchTouristData(){
    try{
        let request = await fetch("https://frail-show.onrender.com/data");
        request = await request.json();
        console.log(request);
        //Display(request);
        DisplayTouristData(request)
    }catch(error){
        console.log(error);
    }
}


function DisplayTouristData(data){
    data.forEach(ele => {
        let data2 = ele.tourist;
        data2.forEach((element) => {
            //let card = getCard(item.images, item.name, item.catogary, item.package, item.price);

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
                // console.log(logggedIn)
            // if (logggedIn == false) {
            //     alert("Make sure you have logged in!")
                Data.push(element);
                localStorage.setItem("Destination-Book", JSON.stringify(Data))
                // window.location.href = "sign-in.html"
                  // return
            // }
            // else{
            //     window.location.href = "payment.html"
            // }
        });

            image.src = element.images;
            name.textContent = element.name;
            info.textContent = element.info;
            package.textContent = element.package;
            catogary.textContent = element.catogary;
        

            
            left.append(image);
            packageDiv.append(package,catogary)
            EMIDiv.append(Emi,Emiprice)
            priceDiv.append(price,dprice)
            middle.append(name,info,packageDiv);
            right.append(EMIDiv,priceDiv,priceDsc,book_Now);
            card.append(left,middle,right);
            DestinationData.append(card);
        });
    });

}



