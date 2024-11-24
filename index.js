console.log("hello input field");

let InputCount = 0;

document.querySelector('#addInputButton').addEventListener('click',()=>{

    // Create a new div to wrap each input field
    let InputDiv = document.createElement('div')

    // create a input Field
    let NewField = document.createElement('input');
    NewField.type = "text";
    NewField.id = 'input'+InputCount;
    NewField.placeholder = "Enter the value."+ (InputCount + 1);

    // Append the input field to the div
    InputDiv.appendChild(NewField)

    // Append the div to the container
    document.getElementById('inputContainer').appendChild(InputDiv);

    // Increment counter to create unique IDs for inputs
    InputCount++;

});

document.querySelector('#collectValue_Button').addEventListener('click',()=>{
    console.log("button clicked")
    let InputValues = [];

    // Get all input elements from the container

    let inputs = document.querySelectorAll('#inputContainer input');

    inputs.forEach((input)=>{
        InputValues.push(input.value);
    })

    // Display the collected values
    document.querySelector('#output').innerHTML = 'Collected values: ' + InputValues.join(', ');

})

