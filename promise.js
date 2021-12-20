// const promise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve({user: "Fiaz"});
//     }, 5000);
// });

// promise.then(result => {
//     console.log(result);
// })

const youTube = new Promise(resolve => {
    setTimeout(() => {
        console.log("Getting videos from YouTube");
        resolve({videos : [1, 2, 3, 4, 5]});
    }, 2000);
});

const faceBook = new Promise(resolve =>{
    setTimeout(() => {
        console.log("Users from Facebook");
        resolve({user: 'Marks Zucks'});
    }, 4000);
});
Promise.all([youTube, faceBook]).then(result => console.log(result));