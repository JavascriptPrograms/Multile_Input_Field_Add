console.log("hello js DOM");

let InputCount = 0;

document.querySelector('#create_input').addEventListener('click',()=>{
    // console.log("click the plus Button");

    let InputDiv = document.createElement('div')

    let createInput = document.createElement('input');
    createInput.type = "text"+InputCount
    createInput.id = "Enter the Name "
    createInput.style.marginBottom = "5px";
    createInput.placeholder = "Enter the Name";

    InputDiv.appendChild(createInput);

    document.querySelector('#divCounter').appendChild(InputDiv);

})

document.querySelector('#submitValues').addEventListener('click',()=>{
    console.log('click the submit button');
    let inputValue = [];

    let name_input = document.querySelector('#input_name').value;

    let inputs = document.querySelectorAll('#divCounter input');

    inputValue.push(name_input);
    inputs.forEach((input)=>{
        inputValue.push(input.value);
    })

    document.querySelector('#Output').innerHTML = 'Collected values: ' + inputValue.join(', ');

})