function solve(arrays) {
    let banknotesInATM = [];

    let getTotalCashInATM = () => banknotesInATM.reduce((a, b) => a + b, 0);

    arrays.forEach(array => {
        if (array.length > 2) {
            array.forEach(banknote => banknotesInATM.push(banknote));

            let insertedCash = array.reduce((a, b) => a + b);
            let totalCashInATM = getTotalCashInATM();

            console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${totalCashInATM}$.`)
        } else if (array.length === 2) {
            let accountBalance = array[0];
            let moneyToWithdraw = array[1];

            if (accountBalance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`);
            } else if (getTotalCashInATM() < moneyToWithdraw) {
                console.log(`ATM machine is out of order!`);
            } else {
                let withdraw = 0;

                banknotesInATM.sort((a, b) => b - a);

                for (let i = 0; i < banknotesInATM.length; i++) {
                    if (banknotesInATM[i] +  withdraw <= moneyToWithdraw) {
                        withdraw += banknotesInATM[i];
                        banknotesInATM.splice(i, 1);
                        i--;
                    }

                    if (withdraw === moneyToWithdraw) {
                        break;
                    }
                }

                accountBalance -= withdraw;

                console.log(`You get ${withdraw}$. Account balance: ${accountBalance}$. Thank you!`)
            }
        } else if (array.length === 1) {
            let banknote = array[0];

            let banknoteCount = banknotesInATM.filter(value => value === banknote).length;

            console.log(`Service Report: Banknotes from ${banknote}$: ${banknoteCount}.`);
        }
    });
}