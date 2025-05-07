// TASK ONE
const test: string = "Hello World, I will complete this course successfully and become a Next level Web Developer!";

console.log(test)


// TASK TWO
type UserRoleType = 'admin' | 'user' | 'guest';

const showUserDetails = (name: string, age: number, role?: UserRoleType): void => {
    const user = `Name: ${name}, Age: ${age}, Role: ${role ?? 'not specified'}`;
    console.log(user)
};

showUserDetails("sujon", 27, "user");


// TASK THREE
type Person = {
    name: string;
    hair: string;
    EyeColor: string;
    Income: number;
    Expense: number;
    Hobbies: string;
    FamilyMembers: number;
    job: string;
    skills: string[];
    MaritalStatus: boolean;
    Friends: string[];
}