const inputItem = document.getElementById("input-item");
const buttonItem = document.getElementById("button-item");
const itemList = document.getElementById("item-list");
let cont = 0;

buttonItem.addEventListener("click", addItem);

function addItem(event) {
    event.preventDefault();

    
    const li = document.createElement('li');

    const listaContainer = document.createElement("div");
    listaContainer.classList.add("container-list");

    const nomeContainer = document.createElement("div");
    nomeContainer.classList.add("container-name");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("container-button");

    
    const checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.setAttribute("id", "checkbox-" + cont++);
    
    const inputValue = inputItem.value;
    const nameItem = document.createElement("p");
    nameItem.innerText = inputValue;

    const removeButton = document.createElement('button');
    removeButton.classList.add("action-button");
    const removeImg = document.createElement("img");
    removeImg.setAttribute("src","/img/delete.svg");
    removeImg.setAttribute("alt","Remover item");
    removeButton.appendChild(removeImg);
    removeButton.addEventListener("click", removeItem);

    const editButton = document.createElement('button');
    editButton.classList.add("action-button");
    const editImg = document.createElement("img");
    editImg.setAttribute("src","/img/edit.svg");
    editImg.setAttribute("alt","Editar item");
    editButton.appendChild(editImg);
    editButton.addEventListener("click", editItem);

    nomeContainer.appendChild(checkboxInput);
    nomeContainer.appendChild(nameItem);

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(removeButton);

    listaContainer.appendChild(nomeContainer);
    listaContainer.appendChild(buttonContainer);

    li.appendChild(listaContainer);

    itemList.appendChild(li);

}

function removeItem(event) {
    console.log(event.target);
}
function editItem(event) {
    console.log(event.target);
}
