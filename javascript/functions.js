const sumAll = (arr) => {
    let sortedArr = arr.sort((a, b) => {
        return a-b;
    });
    console.log(sortedArr);
    let newArr = [];
    for (let i = sortedArr[0]; i <= sortedArr[1]; i++){
        newArr.push(i);
    }
    return newArr.reduce((acum, nextVal) => {
        return acum + nextVal;
    });      
};

console.log('sumAll([1, 4]): ', sumAll([1, 4]))


///////////////////////////


const diffArray = (arr1, arr2) => {
    // Se crea un array con todos los elementos, ordenado y sin elementos repetidos. 
    // Para eliminar el los elementos repetidos se usa el new Set(data).
    // Finalmente se debe convertir a Array.
    let allElementsArr = new Array(...new Set([...arr1, ...arr2].sort((a,b) => a-b)));
    console.log(allElementsArr);
    let result = allElementsArr.filter(elem => {
        // Se comprueba que sólo esté en uno de los dos arrays de entrada     
        if ((arr1.indexOf(elem) != -1 && arr2.indexOf(elem) == -1) || (arr1.indexOf(elem) == -1 && arr2.indexOf(elem) != -1)){
            return elem;
        };
    });
    return result;
};

console.log('diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]): ', diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


//////////////////////////////////


const destroyer = (arr, ...args) => {
    let argsArr = [...args];
    let newArr = [...arr];
    console.log(argsArr);
    let result = [];
    return newArr.filter(elem => {
        for (let arg of argsArr){
            if (!(elem == arg)){
                return elem;
            }
        };
        /* argsArr.forEach(arg => {
            if (arg != elem){
               result.push(elem);
               
            }
        }) */
    });
    /* return result; */
}

console.log('destroyer([1, 2, 3, 1, 2, 3], 2, 3): ', destroyer([1, 2, 3, 1, 2, 3], 2, 3));

