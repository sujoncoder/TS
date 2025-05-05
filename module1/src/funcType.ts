// Regular function
function add(one: number, two: number): number {
    return one * two
};

add(12, 3);

// arrow function
const addArrow = (one: number, two: number = 10): number => one * two;

addArrow(22, 5)

// method
const gorib = {
    name: "sujon",
    balanced: 12,
    addMoney(taka: number): string {
        return `My balanced is ${this.balanced + taka}.`
    }
};

gorib.addMoney(10);



// array map or something method
const numbrsArray = [12, 34, 2, 1, 2];
const newArray: number[] = numbrsArray.map((ele: number): number => ele * ele);