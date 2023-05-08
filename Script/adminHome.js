
let data1 = JSON.parse(localStorage.getItem("mybookings")) || [];
let data2 = JSON.parse(localStorage.getItem("Destination-Book")) || [];


let table = document.querySelector("tbody");


appendData();
function appendData(){
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");
    let td9 = document.createElement("td");

    data1.forEach(ele => {
        
        td1.innerText = ele.name;
        td2.innerText = ele.phone;
        td3.innerText = ele.people;
        td4.innerText = ele.date;
        
    });

    data2.forEach(ele => {

        td5.innerText = ele.name;
        td6.innerText = ele.catogary;
        td7.innerText = ele.package;
        td8.innerText = `Rs.${ele.price}`;
        
    });

    td9.innerText = `Rs.${(+td8.innerText)*(+td3.innerText)}`;
    // if(td9.innerText = '0'){
    //     td9.innerText = null;
    // };

    row.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
    table.append(row);
};
