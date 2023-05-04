let Container = document.getElementById("Destination-Data");

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
        let location = document.createElement("h2");
        let image = document.createElement("img");
        let capital = document.createElement("p");
        let visit = document.createElement("button");

        visit.textContent = "Select Tourist";
        location.textContent = element.name;
        image.src = element.img;
        capital.textContent = element.capital;

        card.append(image,location,capital,visit);
        Container.append(card);
    });
}