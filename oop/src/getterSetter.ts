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

        // getBalance() {
        //     return this._balance
        // };

        get balance() {
            return console.log(this._balance);
        };

        // addDeposite(amount: number) {
        //     this._balance = this._balance + amount;
        //     console.log(this._balance + amount)
        // };

        set deposite(amount: number) {
            this._balance = this._balance + amount
        };
    };


    const sujon = new BankAccount(1, "sujon", 56);

    // sujon.addDeposite(12)
    // const currentBalance = sujon.getBalance();
    // console.log(currentBalance);

    // Getter
    sujon.balance

    // Setter
    const depo = sujon.deposite = 10;
    console.log(depo)

}