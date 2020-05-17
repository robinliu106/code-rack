const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("This is my resolved data"); //Promise can only resolve/reject once, only one argument
        reject("This is the error");
    }, 1000);
});

console.log("before");

promise
    .then((data) => {
        //second argument into then can be the catch handler
        console.log("1", data);
    })
    .catch((error) => {
        console.log("error! ", error);
    });

console.log("after");
