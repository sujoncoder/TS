"use strict";
const friends = ["sujon", "alomgir", "khobir"];
const anotherF = ["toukir", "tondra"];
friends.push(...anotherF);
function bondus(...dosts) {
    dosts.forEach((dost) => console.log(`Dosto name is ${dost}`));
}
;
bondus("ss", "sa", "jk");
