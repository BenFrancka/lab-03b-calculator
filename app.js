//Addition Section

const addIntegerFirst = document.getElementById('add-integer-first');
const addIntegerSecond = document.getElementById('add-integer-second');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');


addButton.addEventListener('click', () => {
    addResults.textContent = +(addIntegerFirst.value) + +(addIntegerSecond.value);
});

//Subtraction Section

const subIntegerFirst = document.getElementById('sub-integer-first');
const subIntegerSecond = document.getElementById('sub-integer-second');
const subButton = document.getElementById('sub-button');
const subResults = document.getElementById('sub-results');

subButton.addEventListener('click', () => {
    subResults.textContent = +(subIntegerFirst.value) - +(subIntegerSecond.value);
    console.log(subResults.textContent);
});

//Multiplication Section

const multiplyIntegerFirst = document.getElementById('multiply-integer-first');
const multiplyIntegerSecond = document.getElementById('multiply-integer-second');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResults = document.getElementById('multiply-results');

multiplyButton.addEventListener('click', () => {
    multiplyResults.textContent = +(multiplyIntegerFirst.value) * +(multiplyIntegerSecond.value);
});

//Division Section

const divideIntegerFirst = document.getElementById('divide-integer-first');
const divideIntegerSecond = document.getElementById('divide-integer-second');
const divideButton = document.getElementById('divide-button');
const divideResults = document.getElementById('divide-results');

divideButton.addEventListener('click', () => {
    divideResults.textContent = +(divideIntegerFirst.value) / +(divideIntegerSecond.value);
});