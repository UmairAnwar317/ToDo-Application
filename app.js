 var list = document.getElementById("list");


 function addTodo(){
    var todo_item = document.getElementById("todo-item");

    // Create li tag with Text

    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    // Create Delete Button

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.appendChild(delText)
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    

    //Create Edit Button

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onclick","editItem(this)")


    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = ""
    console.log(li)
}

function deleteItem(e){

    e.parentNode.remove()
}
function editItem(e){
    
    var editValue = prompt("Enter edit value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editValue
    

}

function deleteAll(){
    list.innerHTML= ""

}