const add = (step) => {
    console.log("add function");
// We gave the number element an id of number so we can use that to get the element
    let numberElement = document.getElementById("number");
// We can use the innerText property to get the text inside the element
    let number = numberElement.innerText;
    console.log("add function", number);
    number = parseInt(number) + step;
    console.log("add function complete", number);
        numberElement.innerText = number;
};

const minus = (step) => {
    console.log("minus function");
// We gave the number element an id of number so we can use that to get the element
    let numberElement = document.getElementById("number");
// We can use the innerText property to get the text inside the element
    let number = numberElement.innerText;
    console.log("minus function", number);
    number = parseInt(number) - step;
    console.log("add function complete", number);
        numberElement.innerText = number;
};

