function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0);
}

const array = [1, 33, 45, 23, 4, 3];

console.log(somaNumeros(array));