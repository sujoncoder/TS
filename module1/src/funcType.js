"use strict";
// Regular function
function add(one, two) {
    return one * two;
}
;
add(12, 3);
// arrow function
const addArrow = (one, two = 10) => one * two;
addArrow(22, 5);
// method
const gorib = {
    name: "sujon",
    balanced: 12,
    addMoney(taka) {
        return `My balanced is ${this.balanced + taka}.`;
    }
};
gorib.addMoney(10);
// array map or something method
const numbrsArray = [12, 34, 2, 1, 2];
const newArray = numbrsArray.map((ele) => ele * ele);
