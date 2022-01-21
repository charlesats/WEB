function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }
    }
    console.log('Os números pares são: ', evenNums);
}

let array = [12, 41, 2, 50, 33, 22];

returnEvenValues(array);