
let data = JSON.parse(localStorage.getItem("Destination-Book")) || [];

let table = document.querySelector("tbody");
table.append(row);

let row = document.createElement("tr");

let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4 = document.createElement("td");
let td5 = document.createElement("td");
let td6 = document.createElement("td");
let td7 = document.createElement("td");
let td8 = document.createElement("td");


row.append(td1, td2, td3, td4, td5, td6, td7, td8);