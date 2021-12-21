const button = document.querySelector('.btn');

//Create a function to Change Color, select the Div class and then add time effect

button.addEventListener('click', () => {
    addColor(1000, '.first', 'red')
    .then(() => addColor(2000, '.second', 'green'))
    .then(() => addColor(5000, '.third', 'blue'))
    .catch((err) => console.log(err))
});


function addColor(time, selector, color){
    const items = document.querySelector(selector);
    return new Promise((resolve, reject) => {
        if (items){
            setTimeout(() => {
                items.style.color = color;
            }, time)
            resolve()
        }else{
            reject(`There is no such items : "${selector}"`);
        }
    })
}
