// Reference type - object

const user: {
    fname: string
    mname?: string // optional type
    lname: string
    readonly study: string  // type - literel type
} = {
    fname: "sujon",
    mname: "sheikh",
    lname: "sujon sheikh",
    study: "Programming hero"
};

// user.study = "hello"