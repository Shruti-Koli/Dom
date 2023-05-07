var form = document.getElementById("addForm");
var itemlist = document.getElementById("items");

form.addEventListener("submit",additem);
itemlist.addEventListener("click",remove);

function additem(e){
    e.preventDefault();
    var newItem= document.getElementById("item");

    var li = document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem.value))
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