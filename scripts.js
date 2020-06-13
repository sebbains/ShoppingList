let shoppingItems = [];
const shoppingList = document.getElementById("shoppingList");
const newListItem = document.getElementById("newItem");
const shoppingForm = document.getElementById("shoppingForm");
shoppingForm.addEventListener("submit",addItem);
const clearItemsBtn = document.getElementById("clearItems");
clearItemsBtn.addEventListener("click",clearItems);
const outputContainer = document.querySelector(".outputContainer");
const alertMessage = document.querySelector(".alert");
document.querySelector("ul").addEventListener("click",editOrDeleteItem);

function addItem(){
    //clear alert message
    alertMessage.innerHTML = "";
    alertMessage.style.display="none";

    //check input is not empty
    if(newListItem.value != ""){
        //add item to list and show
        shoppingItems.push(newListItem.value);
        shoppingList.innerHTML += `<li><input type="checkbox">${newListItem.value}<span class="delete">×</span></li>`;
        shoppingForm.reset();
        //show list
        clearItemsBtn.style.display="block";
        outputContainer.style.display="flex";
    }else{
        //show empty error message
        alertMessage.innerHTML = "Please enter an item to add";
        alertMessage.style.display="block";
    }
}

function clearItems(){
    shoppingItems = [];
    shoppingList.innerHTML = "";
    clearItemsBtn.style.display="none";
    outputContainer.style.display="none";
}

function editOrDeleteItem(event){
    // console.log(event.target.parentNode.nodeName);
    if(event.target.className ==="delete"){
        deleteItem(event);
    }else{
        editItem(event);
    }
}

function deleteItem(event){
    let removeLi = event.target.parentNode;
    let ulItems = removeLi.parentNode;
    ulItems.removeChild(removeLi);
    console.log(shoppingItems);
    
    if(shoppingItems.length=0){
        //hide list
        clearItemsBtn.style.display="none";
        outputContainer.style.display="none";
    }
}

