let displayArray = [];
let resultArray = [];
let numberArray = [];

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
const normalCElements = ["clearEntryBtn", "clearBtn", "backspaceBtn", "equalBtn", "pointBtn" ,"divideBtn", "multiplyBtn", "minusBtn", "plusBtn"];
for (let i = 0; i < normalCElements.length; i++){
    normalCArray[i] = document.getElementById(normalCElements[i])
}

const normalCContent = ["CE", "C", "⌫", "=", ".", "➗", "x", "-", "+"]; //functions must be behind the array.
for(let i = 0; i < normalCArray.length; i++){
    let button = document.createElement("button");
    button.textContent = normalCContent[i];
    normalCArray[i].append(button);
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
//CE button
normalCArray[0].addEventListener("click", function(){
    answerDiv.textContent = "";
})


// C button 
normalCArray[1].addEventListener("click", function(){
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

//function button start from 3;
for(let i = 0; i < normalCArray.length; i++){
    //ADD THE PREVIOUS NUM TO THE ARRAY.
    let newI = i +5;
    normalCArray[newI].addEventListener("click", function(){
        combineScatteredNums();
        let finalIndex = displayArray.length -1;
        
        if(displayArray[finalIndex] != normalCContent[5] && 
            displayArray[finalIndex] != normalCContent[6] &&
            displayArray[finalIndex] != normalCContent[7] &&
            displayArray[finalIndex] != normalCContent[8]){
                
            console.log("pushing "+ normalCContent[newI]);
            displayArray.push(normalCContent[newI]);
            answerDiv.textContent += normalCContent[newI];
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

//equal button function
