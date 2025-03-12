const addition = document.querySelector("#addition");
addition.addEventListener('click', () => {
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    let sum = numOne + numTwo;
    document.querySelector("#display").value = sum;
});

const subtraction = document.querySelector("#subtraction");
subtraction.addEventListener('click', () => {
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    let sub = numOne - numTwo;
    document.querySelector("#display").value = sub;
});

const multiplication = document.querySelector("#multiplication");
multiplication.addEventListener('click', () => {
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    let mul = numOne * numTwo;
    document.querySelector("#display").value = mul;
});

const division = document.querySelector("#division");
division.addEventListener('click', () => {
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    let div = numOne / numTwo;
    document.querySelector("#display").value = div;
});