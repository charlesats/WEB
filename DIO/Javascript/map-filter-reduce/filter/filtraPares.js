function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const array = [12, 34, 434, 32, 311, 55, 98];

console.log(filtraPares(array));