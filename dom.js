var header1 = document.getElementById('header-title');
console.log(header1);
header1.style.borderBottom="3px solid black";
var addItem = document.getElementsByClassName("title");
console.log(addItem[0]);
addItem[0].style.color="green";
addItem[0].style.fontWeight="bold"; 

// Make the 3 rd element in the list have green background color
var items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";

// Make all the elements in the list have bold color font
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}