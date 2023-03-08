function addToDo() {
    let inputValue = document.getElementById("typeSection").value;
    if (inputValue == '') {
        alert("add something");
        return false
    }
    let listElement = document.getElementById("list");

    let node = document.createElement("li");
    node.classList.add("test");

    let textNode = document.createElement("span");
    textNode.textContent = inputValue;
    let imgNode = document.createElement("img");
    imgNode.setAttribute('src', 'icons8-remove-50.png');
    imgNode.setAttribute('onclick', 'removeToDo(this)');
    node.appendChild(textNode);
    node.appendChild(imgNode);

    listElement.appendChild(node);

    document.getElementById("typeSection").value = "";
}

function removeToDo(event) {
    console.log(event.parentNode.remove());

}