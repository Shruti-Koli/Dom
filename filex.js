var form = document.getElementById("addForm");
var itemlist = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit",additem);
itemlist.addEventListener("click",remove);
filter.addEventListener("keyup",filterItems);

function additem(e){
    e.preventDefault();
    var newItem= document.getElementById("item");
    var descr = document.getElementById("description");
    
    var li = document.createElement("li");
    li.className="list-group-item";
    
    li.appendChild(document.createTextNode(newItem.value))
    li.appendChild(document.createTextNode(descr.value))
    //console.log(li);

    //create delete button 
    var del = document.createElement("button");
    del.className="btn btn-danger btn-sm float-right delete";
    del.appendChild(document.createTextNode("X"));

    li.appendChild(del);

    itemlist.appendChild(li);

    //add edit button:
    var edit = document.createElement("button");
    edit.className="btn btn-danger btn-sm float-right delete";
    edit.appendChild(document.createTextNode("Edit"));
    li.appendChild(edit);
    itemlist.appendChild(li);
}

function remove(e){
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure?")){
            var todel = e.target.parentElement;
            itemlist.removeChild(todel);
        }
    }
}

function filterItems(e){
    //convert to lower case
    var text = e.target.value.toLowerCase();
    var ilist = document.getElementsByTagName("li");
    //console.log(ilist[0].childNodes[0])
    //convert to array and then for
    Array.from(ilist).forEach(function(i){
        var itemname = i.childNodes[0].textContent;
        var itemname2 = i.childNodes[1].textContent;
        console.log(itemname);

        if((itemname.toLowerCase().indexOf(text) != -1)  || (itemname2.toLowerCase().indexOf(text) != -1)){
            i.style.display="block";
        }
        else{
            i.style.display="none";
        }
    });
}