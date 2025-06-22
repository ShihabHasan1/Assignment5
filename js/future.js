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

function showSection(id){
    document.getElementById('section1').classList.add('hidden');
    document.getElementById('section2').classList.add('hidden');
    document.getElementById('section3').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}