const value = 2

const promise = new Promise ((resolve, reject) => {
    resolve('hello world')
    //reject('Error')
})

console.log(promise);

promise.then((data) => {console.log(data)});