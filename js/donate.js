document.getElementById('donate-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateAmount = getInputValuedByID('input-value');
        const currentBalance = getInputTextValueById('current-balance');
        const newBalance = donateAmount + currentBalance;
        document.getElementById('current-balance').innerText = newBalance;
        const setBalance = getInputTextValueById('set-balance');
        const newSetBalance = setBalance - donateAmount;
        document.getElementById('set-balance').innerText = newSetBalance;
    })
