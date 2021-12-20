const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({user: "Fiaz"});
    }, 5000);
});

promise.then(result => {
    console.log(result);
})