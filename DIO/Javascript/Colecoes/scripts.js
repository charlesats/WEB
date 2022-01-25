function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Lucas', 'Admin');
usuarios.set('Gabriel', 'Admin');
usuarios.set('Charles', 'Admin');
usuarios.set('Gabriel Antonio', 'User');
usuarios.set('André', 'User');
usuarios.set('Igor', 'User');

//console.log(getAdmins(usuarios));

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));