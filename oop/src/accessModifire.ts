{
    // access modifire

    class BankAccount {
        id: number;
        name: string;
        // private _balance: number;        // never can acces this property even child.
        protected _balance: number;         // Just access child

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        };

        getBalance() {
            return this._balance
        };

        addDeposite(amount: number) {
            this._balance = this._balance + amount;
            console.log(this._balance + amount)
        };
    };


    const sujon = new BankAccount(1, "sujon", 50);

    sujon.addDeposite(12)
    const currentBalance = sujon.getBalance();
    console.log(currentBalance);



    // student account
    // class StudentAccount extends BankAccount {
    //     tset() {
    //         this.
    //     }
    // };


}