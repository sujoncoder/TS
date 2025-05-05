{

    // Union types
    type Dev = "frontend" | "backend";

    const position: Dev = "backend"


    type User = {
        name: string;
        age: number;
        gender: "male" | "female";
    };


    const person: User = {
        name: "sujon",
        age: 27,
        gender: "male"
    };


    // Intersection types

    type FrontentDev = {
        skills: string[],
        designation1: "Frontend Developer"
    };

    type BackendDev = {
        skills: string[],
        designation2: "Backend Developer"
    };

    type FullstackDev = FrontentDev & BackendDev;

    const webDev: FullstackDev = {
        skills: ["react", "node"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"
    }
    console.log(webDev)
}