// var header1 = document.getElementById('header-title');
// console.log(header1);
// header1.style.borderBottom="3px solid black";
// var addItem = document.getElementsByClassName("title");
// console.log(addItem[0]);
// addItem[0].style.color="green";
// addItem[0].style.fontWeight="bold"; 

// // Make the 3 rd element in the list have green background color
// var items = document.getElementsByClassName("list-group-item");
// items[2].style.backgroundColor="green";

// // Make all the elements in the list have bold color font
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold";
// }


//And try editing it with getelementsbyclassname 
var li = document.querySelectorAll(".list-group-item");
// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor="#f4f4f4";
// }
//and then by getelementbytagname
// var li = document.querySelectorAll("li");
// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor="#f4f4f4";
//}

// Make the 2nd item have green background color
// var sec = document.querySelector("li:nth-child(2)");
// sec.style.backgroundColor="green";

// // Make the 3rd item invisible
// var third = document.querySelector("li:nth-child(3)");
// third.style.display="none";

// // Using QuerySelectorALL change the font color to green for 2nd item in the item list
//li[1].style.color="green";

// // Choose all the odd elements and make their background green using QuerySelectorALL
var oddli = document.querySelectorAll("li:nth-child(odd)");
for(var i=0;i<oddli.length;i++){
    oddli[i].style.backgroundColor="green";
}