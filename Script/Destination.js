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
        let location = document.createElement("h4");
        let location2 = document.createElement("h4");
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