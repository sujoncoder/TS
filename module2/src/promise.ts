const createPromise = (): Promise<string> => {

    return new Promise<string>((resolve, reject) => {

        const data: string = "something";

        if (data) {
            resolve(data)
        } else {
            reject("Failed to load data")
        };
    })
};



// show data using async await function.
const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    return data
};

showData();