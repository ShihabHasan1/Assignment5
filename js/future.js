function getInputValuedByID(id){
    const inputValue = document.getElementById(id).value;
    const donateAmount = parseFloat(inputValue);
    return donateAmount;
}


function getInputTextValueById(id){
    const currentAmount = document.getElementById(id).innerText;
    const currentBalance = parseFloat(currentAmount);
    return currentBalance;
}