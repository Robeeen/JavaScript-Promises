const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    addColor(1000, '.first', 'red')
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
