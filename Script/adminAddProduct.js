
let id = '';
let location = document.getElementById("location");

let information = document.getElementById("information").value;
let image = document.getElementById("image").value;
let price = document.getElementById("price").value;
let package = document.getElementById("package").value;
let catogary = document.getElementById("catogary").value;



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
    let name = document.getElementById("name").value;
    e.preventDefault();
     console.log("hiii")
    let obj = new CreateObject(name, information, image, price, package, catogary);

    //postDataToAPI(obj);
    
})
//postDataToAPI()
// function postDataToAPI(obj){
//     //e.preventDefault();
    
//     fetch(`https://frail-show.onrender.com/data`)
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data)
          
//         data.forEach(element => {
//             console.log(element)
//             if(element.name == location.value){
//                 //element.tourist.push(obj);
//                 id=element.id;
//                 console.log(id);
//             }
//         });
        
//     })
// }



