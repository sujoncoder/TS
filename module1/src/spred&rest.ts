const friends: string[] = ["sujon", "alomgir", "khobir"];
const anotherF: string[] = ["toukir", "tondra"];

friends.push(...anotherF);

function bondus(...dosts: string[]) {
    dosts.forEach((dost: string) => console.log(`Dosto name is ${dost}`))
};

bondus("ss", "sa", "jk")