// display Div
const questionDiv = document.getElementById("questionDisplay");
const answerDiv = document.getElementById("answerDisplay");


let calArray = [];
const calElements = ["invBtn", "radBtn", "sinBtn", "cosBtn", "tanBtn", "percentBtn", "lnBtn", "logBtn",
                    "exclaimBtn", "conjunctionBtn", "piBtn", "eBtn", "openBracketBtn", "closeBracketBtn", "rootBtn"
                    ];

const buttonContent = ["inv", "Rad", "Sin", "Cos", "Tan", "%", "Ln", "Log", "!", "^", "Π", "e", "(", ")", "√"];

for(let i = 0; i < buttonContent.length; i++){
    calArray[i] = document.getElementById(calElements[i])
}

for(let i = 0; i < buttonContent.length; i ++){
    const btn = document.createElement("button");
    btn.textContent = buttonContent[i];
    calArray[i].append(btn);
}

//NUMBER BUTTON
//number button - grabs div and attach the button
for(let i = 0; i < numbersArray.length; i++){

    //grabs the div
    numbersArray[i].div = document.getElementById(numbersArray[i].elementString);

    //creates the button for the div
    numbersArray[i].button = document.createElement("button");
    numbersArray[i].button.textContent = numbersArray[i].value;
    numbersArray[i].div.append(numbersArray[i].button);
}

//number button - function
for(let i = 0; i < numbersArray.length; i++){
    numbersArray[i].button.addEventListener("click", function(){
        answerDiv.textContent += numbersArray[i].value;
        singleNumArray.push(numbersArray[i].value);
    })
}

// OPERATORS BUTTON
// Operators button - grabs div and attach the button
for(let i = 0; i <operatorsArray.length; i++){
    //grabs the div
    operatorsArray[i].div = document.getElementById(operatorsArray[i].elementString);

    //creates operators buttons
    operatorsArray[i].button = document.createElement("button");
    operatorsArray[i].button.textContent = operatorsArray[i].value;
    operatorsArray[i].div.append(operatorsArray[i].button);
}

//Operators Function
for(let i = 0; i < operatorsArray.length; i++){
    operatorsArray[i].button.addEventListener("click", function(){
        let condition = true;
        combineScatteredNums();
        let finalIndex = displayArray.length -1;
        
        if(displayArray.length > 0){
            operatorsArray.forEach((element) =>{
                if(displayArray[finalIndex] == element.value){
                    condition = false;
                }
            });

            if(condition == true){
                displayArray.push(operatorsArray[i].operator);
                answerDiv.textContent += operatorsArray[i].value;
            }
        }
    })
}

//NORMAL FUNCTIONAL BUTTONS
//normal buttons - grabs div and attach the button
for(let i = 0; i < normalFunctionalities.length; i++){
    normalFunctionalities[i].div = document.getElementById(normalFunctionalities[i].elementString);

    normalFunctionalities[i].button = document.createElement("button");
    normalFunctionalities[i].button.textContent = normalFunctionalities[i].value;
    normalFunctionalities[i].div.append(normalFunctionalities[i].button);
}

//normal buttons - functions
//= button function
normalFunctionalities[3].button.addEventListener("click", function(){
    combineScatteredNums();
    render(questionDiv, displayArray);
    answerDiv.textContent = calculate(displayArray);
})

//CE button function
normalFunctionalities[0].button.addEventListener("click", function(){
    displayArray = [];
    resultArray = [];
    answerDiv.textContent = "";
})

//C button function
normalFunctionalities[1].button.addEventListener("click", function(){
    displayArray = [];
    resultArray = [];
    questionDiv.textContent = "";
    answerDiv.textContent = "";
})

//combine each number from the Array
function combineScatteredNums(){
    if(singleNumArray.length > 0){
        displayArray.push(singleNumArray.join(""));
        singleNumArray = [];
    }
}

//calculate function
function calculate(array){
    let answer = eval(array.join(" "));
    return answer;
}

//render on the display
function render(division, array){
    division.textContent =  array.join(" ");
}