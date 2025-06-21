function getInputValuedByID(id){
    const inputValue = document.getElementById(id).value;
    const donateAmount = parseFloat(inputValue);
    console.log(typeof donateAmount)
    return donateAmount;
}


function getInputTextValueById(id){
    const currentAmount = document.getElementById(id).innerText;
    const currentBalance = parseFloat(currentAmount);
    return currentBalance;
}