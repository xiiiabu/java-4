let userName = prompt("Введите ваше имя:");
let birthYear = prompt("Введите ваш год рождения:");
let currentYear = prompt("Введите нынешний год:");



function calculateAge(name, birthYear, currentYear) {
    let age = currentYear - birthYear;
    return 'Ваше имя ' + (name), 'Ваш возраст ' + (age);
    
}


let result = calculateAge(userName, birthYear, currentYear);
console.log(result);
alert (result)


//2nd program


function generateRandomExample() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let operators = ['+', '-', '*', '/'];
    let operator = operators[Math.floor(Math.random() * operators.length)];

    let correctAnswer;
    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = (num1 / num2); 
            break;
    }

    return {
        example: (num1) + (operator) + (num2),
        correctAnswer: correctAnswer
    };
}



let numberOfExamples = prompt("Введите количество решаемых примеров:");
solveExamples(numberOfExamples);

function solveExamples(numberOfExamples) {
    for (let i = 0; i < numberOfExamples; i++) {
        let exampleData = generateRandomExample();
        let userAnswer = parseFloat(prompt('Решите: ' + (exampleData.example)));
        
        if (userAnswer === parseFloat(exampleData.correctAnswer)) {
            console.log('Ваш ответ верный ' + (userAnswer));
        } else {
            console.log("Ваш ответ не верный: " + (userAnswer) + " Правильный ответ: " + (exampleData.correctAnswer));
        }
    }
}

