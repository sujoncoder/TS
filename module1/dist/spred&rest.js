"use strict";
var friends = ["sujon", "alomgir", "khobir"];
var anotherF = ["toukir", "tondra"];
friends.push.apply(friends, anotherF);
function bondus() {
    var dosts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dosts[_i] = arguments[_i];
    }
    dosts.forEach(function (dost) { return console.log("Dosto name is ".concat(dost)); });
}
;
bondus("ss", "sa", "jk");
