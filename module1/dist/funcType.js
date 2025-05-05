"use strict";
// Regular function
function add(one, two) {
    return one * two;
}
;
add(12, 3);
// arrow function
var addArrow = function (one, two) {
    if (two === void 0) { two = 10; }
    return one * two;
};
addArrow(22, 5);
// method
var gorib = {
    name: "sujon",
    balanced: 12,
    addMoney: function (taka) {
        return "My balanced is ".concat(this.balanced + taka, ".");
    }
};
gorib.addMoney(10);
// array map or something method
var numbrsArray = [12, 34, 2, 1, 2];
var newArray = numbrsArray.map(function (ele) { return ele * ele; });
