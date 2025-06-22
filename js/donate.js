document.getElementById('donate-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateAmount = getInputValuedByID('input-value');
        if(isNaN(donateAmount)){
            alert('This is wrong Amount');
            return;
        }
        const currentBalance = getInputTextValueById('current-balance');
        const newBalance = donateAmount + currentBalance;
        document.getElementById('current-balance').innerText = newBalance+' ' +'BDT';
        const setBalance = getInputTextValueById('set-balance');
        const newSetBalance = setBalance - donateAmount;
        document.getElementById('set-balance').innerText = newSetBalance+' ' +'BDT';
        showDonationAlert();
        document.getElementById('history');
            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
                <h4 class = "text-2xl font-bold">Donate Money</h4>
                <p> ${donateAmount} TK. is Donated for famine-2024 at Feni, Bangladesh;
                const now = new Date();
                console.log(now.toString());
                                            
            `
            document.getElementById('history-section').appendChild(div);
        
    })

document.getElementById('donate-btn1')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateAmount = getInputValuedByID('input-value1');
        console.log(typeof donateAmount)
        if(isNaN(donateAmount)){
            alert('This is wrong Amount');
            return;
        }
        const currentBalance = getInputTextValueById('current-balance');
        const newBalance = donateAmount + currentBalance;
        document.getElementById('current-balance1').innerText = newBalance+' ' +'BDT';
        const setBalance = getInputTextValueById('set-balance');
        const newSetBalance = setBalance - donateAmount;
        document.getElementById('set-balance').innerText = newSetBalance+' ' +'BDT';
        showDonationAlert();
    })

document.getElementById('donate-btn2')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateAmount = getInputValuedByID('input-value2');
        console.log(typeof donateAmount)
        if(isNaN(donateAmount)){
            alert('This is wrong Amount');
            return;
        }
        const currentBalance = getInputTextValueById('current-balance');
        const newBalance = donateAmount + currentBalance;
        document.getElementById('current-balance2').innerText = newBalance+' ' +'BDT';
        const setBalance = getInputTextValueById('set-balance');
        const newSetBalance = setBalance - donateAmount;
        document.getElementById('set-balance').innerText = newSetBalance+ ' ' +'BDT';
        showDonationAlert();
    })


document.getElementById('history')
    .addEventListener('click', function(){
        showSection('history-section')
    })
