console.log('------------- # 4')

function summation(num1, num2) {
    return num1 + num2;
}

console.log(summation(55, 5))

let sum = function(subtr1, subtr2){
    return subtr1 - subtr2;
}

console.log(sum(16, 5))

function multiplication(multip1, multip2){
    return multip1 * multip2;
}

console.log(multiplication(5,6))

function division(division1, division2){
    return division1 / division2;
}

console.log(division(10,2))

console.log('------------- # 5')


function outputNumbers (number){
    let numbers = '';
    for (i = 1; i <= number; i++){
        numbers = numbers + i + ' ';
    }
    return numbers
}

console.log(outputNumbers(5))

console.log('------------- # 6')

function countdown (downNumber){
    let toStr = '';
    for (i = downNumber; i >= 1; --i){
        toStr = toStr + i + ' ';
    }
    return toStr
}

console.log(countdown(5))

console.log('------------- # 7')

function pow(x,n){
    return x ** n
}

console.log(pow(2,2))

console.log('------------- # 8')

function isBigger(a, b){
    return a > b;
}

console.log(isBigger(5, -1))

console.log('------------- # 9')

function isSmaller(c, d){
    return c < d;
}

console.log(isSmaller(5, -1))