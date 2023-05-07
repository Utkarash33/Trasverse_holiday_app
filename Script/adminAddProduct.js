

let loc = document.getElementById("location");

function CreateObject(name, information, image, price, package, catogary){
    this.name = name;
    this.info = information;
    this.images = image;
    this.price = price;
    this.package = package;
    this.catogary = catogary;
    
};
let form = document.getElementById("product_form");
form.addEventListener("submit", (e)=>
{
    
    e.preventDefault();
    postDataToAPI();
    

    // setTimeout(() => {
    //   window.location.href="./adminProductPage.html";
    // }, 3000)
    
})
function postDataToAPI(){
    
    let id;
    fetch(`https://frail-show.onrender.com/data`)
    .then(res => res.json())
    .then((data) => {
          
        data.forEach(element => {
            if(element.name == loc.value || element.location == loc.value){
                addLoc(element.id)
            }
        });
    }) 
};

function addLoc(id)
{
    fetch(`https://frail-show.onrender.com/data/${id}`)
    .then(response => response.json())
    .then(data => {
      let name = document.getElementById("name").value;
      let information = document.getElementById("info").value;
      let image = document.getElementById("image").value;
      let price = document.getElementById("price").value;
      let package = document.getElementById("package").value;
      let catogary = document.getElementById("catogary").value;

      const newTourist = new CreateObject(name, information, image, price, package, catogary);
      
      data.tourist.push(newTourist);
      //console.log(data.tourist)
      fetch(`https://frail-show.onrender.com/data/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(result => {
          console.log(result.tourist);
        })
        .catch(error => {
          console.error( error);
        });
    })
    .catch(error => {
      console.error(error);
    });
    alert (`Data has been added !`);
    //window.location.href="./adminProductPage.html";
}