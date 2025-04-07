const account = {
    accountName: "Jay Vaskrip",
    balance: 500,

        getBalance() {
            alert(`Balance: ${this.balance}`);
        },

        deposit(amount) {
            if (amount <= 0 || isNaN(amount)) {
                this.accountError ("That doesn't look like a valid amount. Try again.");
                return;
            }
          
            this.balance += amount;
            alert(`Deposit successful! You deposited: ${amount}. Your new balance is ${this.balance}`);
        },

        withdrawal(amount) {
            if (amount <= 0 || isNaN(amount)) {
                this.accountError ("That doesn't look like a valid amount. Try again.");
                return;
            }

            if (this.balance < amount) {
                this.accountError ("Try a smaller amount.");
                return;
            }

            this.balance -= amount;
                alert(`You withdrew: ${amount}. Your new balance: ${this.balance}`);
        },

        getAccountName() {
            alert(`This account belongs to: ${this.accountName}`);
        },

        accountError(message) {
            alert(`Error: 
            ${message}`);
        },

        exit() {
            alert("Goodbye!");
     
        },
    };

function atm() {
    let loopActive = true;
    
    while (loopActive) {   
        const userSelection = 
        prompt(`Select a choice:
        1) See balance
        2) Make a deposit
        3) Make a withdrawal
        4) Get account name
        5) Exit`);

        if (userSelection === null) {
            account.exit();
            break;
        }

        const selectedOption = parseFloat(userSelection);

        switch (selectedOption) {
        case 1: {
            account.getBalance();
            break;
        }
        case 2: {
            const amount = parseFloat(prompt("How much would you like to deposit?"));
            account.deposit(amount);
            break;
        }
        
        case 3: {
            const amount = parseFloat(prompt("How much do you wish to withdraw?"));
            account.withdrawal(amount);
            break;
        }
        
        case 4: {
            account.getAccountName();
            break;
        }
        case 5: {
            account.exit();
            loopActive = false;
            break;
        }
        default: 
            account.accountError("That's not a valid choice. Pick a number between 1 and 5.");
            break;
        }
    }
}
           
atm();