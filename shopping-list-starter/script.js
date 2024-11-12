let shoppingListItems = ["milk", "eggs", "bread"];

const addItem = () => {
    let item = document.getElementById("new-item-text").value.trim();
    shoppingListItems.push(item);
    console.log(shoppingListItems);
    updateItems();
};

const updateItems = () => {
    // locate the li
    let listElement = document.getElementById("shopping-list-items");
    // clear the li of any existing items
    listElement.innerHTML = "";

    // loop through the shopping list items and add them to the list
    for (const shoppingItem of shoppingListItems) {
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }

    // clear the input field after adding the item
    const inputElement = document.getElementById("new-item-text");
    inputElement.value = "";
    inputElement.placeholder = "";
};

const clearList = () => {
    // Clear the shopping list items from the array and update the list on the page
    shoppingListItems = [];
    updateItems();
};

// call the update items function immediately without any interaction on the page (make sure function is declared above)
updateItems();