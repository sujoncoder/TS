"use strict";
{
    // access modifire
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        ;
        getBalance() {
            return this._balance;
        }
        ;
        addDeposite(amount) {
            this._balance = this._balance + amount;
            console.log(this._balance + amount);
        }
        ;
    }
    ;
    const sujon = new BankAccount(1, "sujon", 50);
    sujon.addDeposite(12);
    const currentBalance = sujon.getBalance();
    console.log(currentBalance);
}
