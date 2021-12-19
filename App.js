//pending, rejected, fulfilled.

const value = 2


const promise = new Promise ((resolve, reject) => {
    const random = Math.floor(Math.random() * 3);
    if (random === value){
        resolve('hello world');
    }else{
        reject('Error');
    }
    
    
})

console.log(promise);

promise.then((data) => {console.log(data)});