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
    return newArr.filter(elem => {
        if (argsArr.indexOf(elem) == -1){
            return elem;
        }
    });
    /* return result; */
}

console.log('destroyer([1, 2, 3, 1, 2, 3], 2, 3): ', destroyer([1, 2, 3, 1, 2, 3], 2, 3));



////////////////////////////

function whatIsInAName(collection, source) {
    let keys = Object.keys(source);
    return collection.filter(elem => {
        let pivot = false;
        let pivotG = keys.every(key => {
            if ((elem[key]) && (elem[key] == source[key])) {
                pivot = true;
                return pivot;
            };
        });
        console.log(pivotG);
        return pivotG;
    });
}
  
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));



///////////////////////////////

let testStr = "";


const verificadorReg = (char, ...regs) => {
    let regsArr = [...regs];
    
    let result = regsArr.some(reg => {
        return reg.test(char);
    });
    return result;
}

function spinalCase(str) {
    let reg1 = /_/;
    let reg2 = /\s/;
    let reg3 = /-/;
    let reg4 = /\w/;
    let arr = [];

    const verificadorReg = (char, ...regs) => {
        let regsArr = [...regs];
        
        let result = regsArr.some(reg => {
            return reg.test(char);
        });
        return result;
    }

    let newStr = str.slice().trim().split("");
    newStr.forEach(elem => {
        if (newStr.indexOf(elem) == 0){
            arr.push(elem.toLowerCase());
        }else {
            if (verificadorReg(elem, reg1, reg2, reg3)){
                arr.push("-");
            }else {
                arr.push(elem);
            } 
        }   
    });
    let result = [];
    let index = 0;
    arr.forEach(elem => {
        if (elem != elem.toLowerCase()){
            if (arr[index-1] != "-"){
                result.push('-', elem.toLowerCase());
                
            }else {
                result.push(elem.toLowerCase());
                
            }
        }else {
            result.push(elem);
            
        }
        index++;        
    });
    return result.join("");
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));



/////////////////////////////////

function translatePigLatin(str) {

    let reg1 = /(^[aeiou]+)(\w+)/;
    let reg2 = /(^[^aeiou]+)(\w+)/;
    let reg3 = /([aeiou]+)/;
    let regResult = [];

    if (reg3.test(str)){
        if (reg1.test(str)){
            regResult = str.match(reg1);
            return regResult[0] + "way";
        }else {
            regResult = str.match(reg2);
            return regResult[2] + regResult[1] + "ay";
        }
    }else{
        return str + "ay";
    }
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("schwartz"));


/* let reg1 = /^[aeiou]{1}/;
let textStr = 'adollknasdays';
console.log(reg1.test(textStr));
console.log(textStr.match(reg1));

let reg2 = /^[^aeiou]{1,8}/;
let textStr2 = 'dpollknasdays';
console.log(reg2.test(textStr2));
console.log(textStr2.match(reg2));


let reg3 = /(?<=([aeiou]))\w+/;
let textStr3 = 'ooollknasdays';
console.log(reg3.test(textStr3));
console.log(textStr3.match(reg3));*/

let reg4 = /[A-Z]/;
let textStr4 = 'Ooollknasdays';
console.log(reg4.test(textStr4));
console.log(textStr4.match(reg4));


///////////////////////////

function myReplace(str, before, after) {
    let afterStr = "";
    if (before != before.toLowerCase()){
        afterStr = after.slice(0,1).toUpperCase() + after.slice(1,);
    }else {
        afterStr = after.toLowerCase();
    }
    return str.replace(before, afterStr);
}
  
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


////////////////////////////////

function pairElement(str) {
    let reg = /[A-Z]/;
    let result = [];
    for (let char of str.split("")){
        switch (char.match(reg)[0]) {
            case 'A':
              result.push(['A','T']);
              break;
            case 'T':
                result.push(['T','A']);
              break;
            case 'G':
                result.push(['G','C']);
              break;
            case 'C':
                result.push(['C','G']);
              break;
        }
    }
    return result;
}
  
console.log(pairElement("GCG"));



///////////////////////


function fearNotLetter(str) {
    let abecedario = "abcdefghijklmnopqrstuvwxyz".split("");
    let newStr = str.split("");
    let index = abecedario.indexOf(newStr[0]);
    for (let letter of newStr){
        if (letter != abecedario[index]){
            return abecedario[index];
        }
        index++;
    }
}
  
console.log(fearNotLetter("abce"));


////////////////////////////////////

function uniteUnique(...arr) {
    let arrays = [...arr];
    let allArr = [];
    for (let elem of arrays){
        allArr.push(...elem);
    }
    let finalArray = new Set(allArr);
    return [...finalArray];
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


//////////////////

function convertHTML(str) {
    let newArr = str.split("");
    let newStr = newArr.map(elem => {
        switch (elem){
            case '&':
                return '&amp;';
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case "'":
                return '&apos;';
            default :
                return elem;
        }
    })
    //let newStr = newArr.replace('&','&amp;');
    
    return newStr.join("");
}
  
console.log(convertHTML("Dolce & Gabbana"));



////////////////////////////////

function sumFibs(num) {
    let arr = [];
    let sum = 0;
    for (let i = 0; i <= num; i++){
        if (i == 0){
            arr.push(i);
        }
        else if (i <= 2){
            arr.push(1);
        }else{
            sum = arr[i-2] + arr[i-1];
            arr.push(sum);
        }
    }
    let oddArr = arr.filter(elem => {
        if ((elem % 2 != 0) && (elem <= num)){
            return elem;
        }
    });
    return oddArr.reduce((acum, nextVal) => {
        return (acum + nextVal);
    });
}
  
console.log(sumFibs(10));
//console.log(sumFibs(1000));



//////////////////////////////


function sumPrimes(num) {
    let arr = [];
    function esPrimo(j) {    
        for(let i = 2; i <= Math.sqrt(j); i++)
            if(j % i === 0) return false;
        return j > 1;
    }
    for (let x=0;x<=num;x++) {
        if (esPrimo(x)){
            arr.push(x);
        }
    }
    return arr.reduce((a, b) => a + b);
}
  
console.log(sumPrimes(50));


//////////////////////

function smallestCommons(arr) {
    return arr;
}
  
console.log(smallestCommons([1,5]));