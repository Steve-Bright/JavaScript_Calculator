const plus = {
    elementString: "plusBtn",
    value: "+",
    operator: "+",
}
const minus = {
    elementString: "minusBtn",
    value:"-",
    operator:"-"
}
const multiply = {
    elementString: "multiplyBtn",
    value: "x",
    operator: "*"
}
const divide = {
    elementString: "divideBtn",
    value: "➗", 
    operator: "/"
}
const zero = {
    elementString: "zeroBtn",
    value: "0"
}
const one = {
    elementString: "oneBtn",
    value: "1"
}
const two = {
    elementString: "twoBtn",
    value: "2"
}
const three = {
    elementString: "threeBtn",
    value: "3",
}
const four = {
    elementString: "fourBtn",
    value: "4"
}
const five = {
    elementString: "fiveBtn",
    value: "5",
}
const six = {
    elementString: "sixBtn",
    value: "6"
}
const seven = {
    elementString: "sevenBtn",
    value: "7"
}
const eight = {
    elementString: "eightBtn",
    value: "8"
}
const nine = {
    elementString: "nineBtn",
    value: "9"
}
const point = {
    elementString: "pointBtn",
    value: "."
}
const clearEntry = {
    elementString: "clearEntryBtn",
    value: "CE"
}
const clear = {
    elementString: "clearBtn",
    value: "C"
}
const backspace = {
    elementString: "backspaceBtn",
    value: "⌫"
}
const equal = {
    elementString: "equalBtn",
    value: "="
}
const inverse = {
    elementString: "invBtn",
    value: "inv"
}
const radian = {
    elementString: "radBtn",
    value: "Rad"
}
const sine = {
    elementString: "sinBtn",
    value: "Sin"
}
const cos = {
    elementString: "cosBtn",
    value: "Cos"
}
const tangent = {
    elementString: "tanBtn",
    value: "Tan"
}
const percent = {
    elementString: "percentBtn",
    value: "%"
}
const naturalL = {
    elementString: "lnBtn",
    value: "Ln"
}
const log = {
    elementString: "logBtn",
    value: "Log"
}
const exclaim = {
    elementString: "exclaimBtn",
    value: "!"
}
const conjunction = {
    elementString: "conjunctionBtn" ,
    value: "^"
}
const pi = {
    elementString: "piBtn",
    value: "Π"
}

// e, openBracket, closeBracket, root
const e = {
    elementString: "eBtn",
    value: "e"
}
const openBracket = {
    elementString: "openBracketBrn",
    value: "("
}
const closeBracket = {
    elementString: "closeBracketBtn",
    value: ")"
}
const squareRoot = {
    elementString: "rootBtn",
    value: "√"
}

let displayArray = [];
let resultArray = [];  
let singleNumArray = [];  // array for each individual digit
const operatorsArray = [plus, minus, multiply, divide];
const numbersArray = [zero, one, two, three, four, five, six, seven, eight, nine, point];
const normalFunctionalities = [clearEntry, clear, backspace, equal];