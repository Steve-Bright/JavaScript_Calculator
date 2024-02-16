let displayArray = [];
let resultArray = [];  
let numberArray = [];  // array for each individual digit


// display Div
const questionDiv = document.getElementById("questionDisplay");
const answerDiv = document.getElementById("answerDisplay");

// normal calculation div

// button area
let numArray = [];
const numElements = ["zeroBtn", "oneBtn", "twoBtn", "threeBtn", "fourBtn", "fiveBtn", "sixBtn", "sevenBtn", "eightBtn", "nineBtn"];
for(let i = 0; i <numElements.length; i++){
    numArray[i] = document.getElementById(numElements[i]);
}

const btnArray = [zeroBtn, oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, eightBtn, nineBtn];
for(let i = 0; i < btnArray.length; i++){
    let button = document.createElement("button");
    button.textContent = i;
    numArray[i].append(button);
}

// other normalC area
let normalCArray = [];
const normalCElements = ["clearEntryBtn", "clearBtn", "backspaceBtn", "equalBtn", "pointBtn"];
for (let i = 0; i < normalCElements.length; i++){
    normalCArray[i] = document.getElementById(normalCElements[i])
}

const normalCContent = ["CE", "C", "⌫", "=", "."]; //functions must be behind the array.
for(let i = 0; i < normalCArray.length; i++){
    let button = document.createElement("button");
    button.textContent = normalCContent[i];
    normalCArray[i].append(button);
}

//Grabs the div of operators
const operatorsArray = [plus, minus, multiply, divide];
for(let i = 0; i <operatorsArray.length; i++){
    operatorsArray[i].div = document.getElementById(operatorsArray[i].elementString);
}

//Creates button for operator
for(let i = 0; i < operatorsArray.length; i++){
    operatorsArray[i].button = document.createElement("button");
    operatorsArray[i].button.textContent = operatorsArray[i].value;
    operatorsArray[i].div.append(operatorsArray[i].button);
}

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


// button functions.
//equal button function
normalCArray[3].addEventListener("click", function(){
    combineScatteredNums();
    render(questionDiv, displayArray);
    answerDiv.textContent = calculate(displayArray);
    console.log(calculate(displayArray));
})

//CE button
normalCArray[0].addEventListener("click", function(){
    displayArray = [];
    resultArray = [];
    answerDiv.textContent = "";
})


// C button 
normalCArray[1].addEventListener("click", function(){
    displayArray = [];
    resultArray = [];
    questionDiv.textContent = "";
    answerDiv.textContent = "";
})

// number button
for(let i = 0; i < numArray.length; i ++){
    //ADD THE FUNCTION VALUE TO THE ARRAY LIKE +, - , /
    //IGNORE adding to array, if there is no function beforehand. 
    numArray[i].addEventListener("click", function(){
        answerDiv.textContent += i
        numberArray.push(i);
    })
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

//combine each number from the Array
function combineScatteredNums(){
    if(numberArray.length > 0){
        displayArray.push(numberArray.join(""));
        numberArray = [];
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