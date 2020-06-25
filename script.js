//change edit svg
//disable amend/complete buttons when clicked

//Event listener to run code when page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // set text input, submit & clear buttons, error msg
    const addText = document.getElementById("newItem");
    const addButton = document.getElementById("addItem");
    const clearButton = document.getElementById("clearItems");
    const outputContainer = document.querySelector(".outputContainer");
    

    // set list item icons
    let deleteSVG = `<svg viewBox="-57 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m156.371094 30.90625h85.570312v14.398438h30.902344v-16.414063c.003906-15.929687-12.949219-28.890625-28.871094-28.890625h-89.632812c-15.921875 0-28.875 12.960938-28.875 28.890625v16.414063h30.90625zm0 0"/><path d="m344.210938 167.75h-290.109376c-7.949218 0-14.207031 6.78125-13.566406 14.707031l24.253906 299.90625c1.351563 16.742188 15.316407 29.636719 32.09375 29.636719h204.542969c16.777344 0 30.742188-12.894531 32.09375-29.640625l24.253907-299.902344c.644531-7.925781-5.613282-14.707031-13.5625-14.707031zm-219.863282 312.261719c-.324218.019531-.648437.03125-.96875.03125-8.101562 0-14.902344-6.308594-15.40625-14.503907l-15.199218-246.207031c-.523438-8.519531 5.957031-15.851562 14.472656-16.375 8.488281-.515625 15.851562 5.949219 16.375 14.472657l15.195312 246.207031c.527344 8.519531-5.953125 15.847656-14.46875 16.375zm90.433594-15.421875c0 8.53125-6.917969 15.449218-15.453125 15.449218s-15.453125-6.917968-15.453125-15.449218v-246.210938c0-8.535156 6.917969-15.453125 15.453125-15.453125 8.53125 0 15.453125 6.917969 15.453125 15.453125zm90.757812-245.300782-14.511718 246.207032c-.480469 8.210937-7.292969 14.542968-15.410156 14.542968-.304688 0-.613282-.007812-.921876-.023437-8.519531-.503906-15.019531-7.816406-14.515624-16.335937l14.507812-246.210938c.5-8.519531 7.789062-15.019531 16.332031-14.515625 8.519531.5 15.019531 7.816406 14.519531 16.335937zm0 0"/><path d="m397.648438 120.0625-10.148438-30.421875c-2.675781-8.019531-10.183594-13.429687-18.640625-13.429687h-339.410156c-8.453125 0-15.964844 5.410156-18.636719 13.429687l-10.148438 30.421875c-1.957031 5.867188.589844 11.851562 5.34375 14.835938 1.9375 1.214843 4.230469 1.945312 6.75 1.945312h372.796876c2.519531 0 4.816406-.730469 6.75-1.949219 4.753906-2.984375 7.300781-8.96875 5.34375-14.832031zm0 0"/></svg>`;
    let completeSVG = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 477.867 477.867" style="enable-background:new 0 0 477.867 477.867;" xml:space="preserve"><g><g><path d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933
           C477.726,107.033,370.834,0.141,238.933,0z M238.933,443.733c-113.108,0-204.8-91.692-204.8-204.8s91.692-204.8,204.8-204.8
           s204.8,91.692,204.8,204.8C443.611,351.991,351.991,443.611,238.933,443.733z"/></g></g><g><g><path d="M370.046,141.534c-6.614-6.388-17.099-6.388-23.712,0v0L187.733,300.134l-56.201-56.201
           c-6.548-6.78-17.353-6.967-24.132-0.419c-6.78,6.548-6.967,17.353-0.419,24.132c0.137,0.142,0.277,0.282,0.419,0.419
           l68.267,68.267c6.664,6.663,17.468,6.663,24.132,0l170.667-170.667C377.014,158.886,376.826,148.082,370.046,141.534z"/></g></g></svg>`;
    let editSVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><polygon points="51.2,353.28 0,512 158.72,460.8 		"/></g></g><g><g><rect x="89.73" y="169.097" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -95.8575 260.3719)" width="353.277" height="153.599"/></g></g><g>	<g><path d="M504.32,79.36L432.64,7.68c-10.24-10.24-25.6-10.24-35.84,0l-23.04,23.04l107.52,107.52l23.04-23.04 C514.56,104.96,514.56,89.6,504.32,79.36z"/></g></g></svg>'

   // user clicks add button
   addButton.addEventListener("click", function(e){
        //prevents page refresh, esp Edge
        e.preventDefault();

        //grab text input
        let newItem = addText.value;

        //check if empty
        if(newItem!=""){
            //check if already on list by
            // grab all list items
            const items = document.querySelectorAll("li");
            //set list to check
            const currentList = [];
            //iterate through list items and add text only
            items.forEach((item)=>{
                currentList.push(item.innerText);
            });
            //compares to input
            if(currentList.includes(newItem)){
                error("dup");
            }else{
                //run add item to shopping list
                addNewItem(newItem);
                //clear text field
                addText.value = "";
                //clear alert message
                error("clear");
                //show list and clear button
                clearButton.style.display="block";
                outputContainer.style.display="flex";
            }
        }else{
            //show empty error message
            error("empty");
        }
    });

    // user hits enter in text input
    addText.addEventListener("keypress", function(e){
        // did the user press *enter*? if yes then continue
        if (e.keyCode === 13){
            let newItem = addText.value;

            //check if empty
            if(newItem!=""){
                //check if already on list by
                // grab all list items
                const items = document.querySelectorAll("li");
                //set list to check
                const currentList = [];
                //iterate through list items and add text only
                items.forEach((item)=>{
                    currentList.push(item.innerText);
                });
                //compares to input
                if(currentList.includes(newItem)){
                    error("dup");
                }else{
                    //run add item to shopping list
                    addNewItem(newItem);
                    //clear text field
                    addText.value = "";
                    //clear alert message
                    error("clear");
                    //show list and clear button
                    clearButton.style.display="block";
                    outputContainer.style.display="flex";
                }
            }else{
                //show empty error message
                error("empty");
            }
        };
    });


    function error(err){
        //grab error box, create error text
        const alertMessage = document.querySelector(".alert");
        let alertText = "";

        //cycle through error options
        switch (err){
            case "empty" : 
                //assign error text
                alertText = "Please enter an item to add";
                alertMessage.innerText = alertText;
                //show error box
                alertMessage.style.display = "block";
                break;
            case "dup" : 
                alertText = "Item is already on the list";
                alertMessage.innerText = alertText;
                //show error box
                alertMessage.style.display = "block";
                break;
            case "complete" :
                alertText = "No items have been completed";
                alertMessage.innerText = alertText;
                //show error box
                alertMessage.style.display = "block";
                break;
            case "clear" :
                alertMessage.innerText = alertText;
                //hide error box
                alertMessage.style.display = "none";
                break;
        }
    }

    function addNewItem(inputText){
        //set front ul
        const shoppingUL = document.querySelector("#shoppingList");

        //create new li
        const newLI = document.createElement('li');

        //create li complete button
        const completeButton = document.createElement('button');
        completeButton.classList.add("completeButton");
        completeButton.innerHTML = completeSVG;
        completeButton.addEventListener("click",completeLI);

        //add complete button to li
        newLI.appendChild(completeButton);

        //create entered text p
        const liText = document.createElement('p');
        liText.innerText = inputText;

        //add entered text to li
        newLI.appendChild(liText);

        // create li edit button
        const editButton = document.createElement('button');
        editButton.classList.add("editButton");
        editButton.innerHTML = editSVG;
        editButton.addEventListener("click",editLI);

        //create li delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add("deleteButton");
        deleteButton.innerHTML = deleteSVG;
        deleteButton.addEventListener("click",deleteLI);

        //create container div for edit/delete
        const container = document.createElement('div');
        container.appendChild(editButton);
        //add edit/delete container to li
        container.appendChild(deleteButton);
        newLI.appendChild(container);

        //add completed li to front of ul
        shoppingUL.insertBefore(newLI,shoppingUL.childNodes[0]);
    };

    function deleteLI(){
        //grab li via parent nodes (button -> div -> li)
        const item = this.parentNode.parentNode;
        //grab ul via parent node (li -> ul)
        const list = item.parentNode;
        //remove li from list
        list.removeChild(item);
        //check if no items left, hide list
        if(list.children.length==0){
            clearButton.style.display="none";
            outputContainer.style.display="none";
        }
    }

    function editLI(){
        //grab li via parent nodes (button -> div -> li)
        const item = this.parentNode.parentNode;
        //populate text input with current value
        // addText.value += item.innerText;
        //add edit class

        //hide add text input
        addText.style.display = "none";
        //create update text input
        const updateText = document.createElement("input");
        updateText.setAttribute("id","updateText");
        updateText.setAttribute("type","text");
        updateText.innerText = "update";
        //set previous item text
        updateText.value = item.innerText;

        //hide add button
        addButton.style.display = "none";
        //create update button
        const updateButton = document.createElement("button");
        updateButton.setAttribute("id","updateItem");
        updateButton.innerText = "update";

        //grab shopping form to add new elements
        const form = document.getElementById("shoppingForm");
        //add update text to start of form
        form.insertBefore(updateText,form.childNodes[0]);
        //add update button to end of form
        form.appendChild(updateButton);

        //event to save edited item
        updateButton.addEventListener("click", function(e){
            //prevents page refresh, esp Edge
            e.preventDefault();
    
            //grab text input
            let updatedItem = updateText.value;
            console.log(updatedItem);
            //check if empty
            if(updatedItem!=""){
                //check if already on list by
                // grab all list items
                const items = document.querySelectorAll("li");
                //set list to check
                const currentList = [];
                //iterate through list items and add text only
                items.forEach((item)=>{
                    currentList.push(item.innerText);
                });
                //compares to input
                if(currentList.includes(updatedItem)){
                    error("dup");
                }else{
                    //assigns current list item to updated text
                    //grab list item inner text (li -> p -> text)
                    const itemtext = item.childNodes[1];
                    //set to newly updated item
                    itemtext.innerHTML = updatedItem;
                    //clear text field
                    addText.value = "";
                    //clear alert message
                    error("clear");
                    //remove created update text input and button
                    form.removeChild(updateText);
                    form.removeChild(updateButton);
                    //show add text input and button
                    addButton.style.display="block";
                    addText.style.display="block";
                }
            }else{
                //show empty error message
                error("empty");
            }
        });
    }

    function completeLI(){
        //grab li via parent node (button -> li)
        const item = this.parentNode;
        //add completed li class
        item.classList.add("completed");
    }

    clearButton.addEventListener("click",()=>{
        //set front ul and li
        const shoppingUL = document.querySelector("#shoppingList");
        const items = document.querySelectorAll("li");
        //set count
        let completedCount = 0;
        //run through all child list items
        items.forEach((item)=>{
            // checks if class is completed
            if(item.classList.contains("completed")){
                //remove from ul
                shoppingUL.removeChild(item);
                //iterate count
                completedCount ++;
            }
        });
        //checks for no items removed error msg
        if (!completedCount>0){
           error("complete"); 
        }

        //check if no items left, hide list
        if(shoppingUL.children.length==0){
            clearButton.style.display="none";
            outputContainer.style.display="none";
        }

    });

    
    //end load
});