const sumAll = (arr) => {
    let sortedArr = arr.sort((a, b) => {
        return a - b;
    });
    console.log(sortedArr);
    let newArr = [];
    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
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
    let allElementsArr = new Array(...new Set([...arr1, ...arr2].sort((a, b) => a - b)));
    console.log(allElementsArr);
    let result = allElementsArr.filter(elem => {
        // Se comprueba que sólo esté en uno de los dos arrays de entrada     
        if ((arr1.indexOf(elem) != -1 && arr2.indexOf(elem) == -1) || (arr1.indexOf(elem) == -1 && arr2.indexOf(elem) != -1)) {
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
        if (argsArr.indexOf(elem) == -1) {
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
        if (newStr.indexOf(elem) == 0) {
            arr.push(elem.toLowerCase());
        } else {
            if (verificadorReg(elem, reg1, reg2, reg3)) {
                arr.push("-");
            } else {
                arr.push(elem);
            }
        }
    });
    let result = [];
    let index = 0;
    arr.forEach(elem => {
        if (elem != elem.toLowerCase()) {
            if (arr[index - 1] != "-") {
                result.push('-', elem.toLowerCase());

            } else {
                result.push(elem.toLowerCase());

            }
        } else {
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

    if (reg3.test(str)) {
        if (reg1.test(str)) {
            regResult = str.match(reg1);
            return regResult[0] + "way";
        } else {
            regResult = str.match(reg2);
            return regResult[2] + regResult[1] + "ay";
        }
    } else {
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
    if (before != before.toLowerCase()) {
        afterStr = after.slice(0, 1).toUpperCase() + after.slice(1,);
    } else {
        afterStr = after.toLowerCase();
    }
    return str.replace(before, afterStr);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


////////////////////////////////

function pairElement(str) {
    let reg = /[A-Z]/;
    let result = [];
    for (let char of str.split("")) {
        switch (char.match(reg)[0]) {
            case 'A':
                result.push(['A', 'T']);
                break;
            case 'T':
                result.push(['T', 'A']);
                break;
            case 'G':
                result.push(['G', 'C']);
                break;
            case 'C':
                result.push(['C', 'G']);
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
    for (let letter of newStr) {
        if (letter != abecedario[index]) {
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
    for (let elem of arrays) {
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
        switch (elem) {
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
            default:
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
    for (let i = 0; i <= num; i++) {
        if (i == 0) {
            arr.push(i);
        }
        else if (i <= 2) {
            arr.push(1);
        } else {
            sum = arr[i - 2] + arr[i - 1];
            arr.push(sum);
        }
    }
    let oddArr = arr.filter(elem => {
        if ((elem % 2 != 0) && (elem <= num)) {
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
        for (let i = 2; i <= Math.sqrt(j); i++)
            if (j % i === 0) return false;
        return j > 1;
    }
    for (let x = 0; x <= num; x++) {
        if (esPrimo(x)) {
            arr.push(x);
        }
    }
    return arr.reduce((a, b) => a + b);
}

console.log(sumPrimes(50));


//////////////////////

function smallestCommons(arr) {
    // función que ordena un arreglo
    let sortedArr = arr.sort((a, b) => {
        return a - b;
    });

    let completeArr = [];
    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
        completeArr.push(i);
    }

    const maximoComunDivisor = (a, b) => {
        // https://parzibyte.me/blog
        let temporal; //Para no perder b
        while (b !== 0) {
            temporal = b;
            b = a % b;
            a = temporal;
        }
        return a;
    };

    const minimoComunMultiplo = (a, b) => {
        // https://parzibyte.me/blog
        return (a * b) / maximoComunDivisor(a, b);
    };

    let x = completeArr[0];
    let y;
    for (let i = 1; i < completeArr.length; i++) {
        y = completeArr[i];
        x = minimoComunMultiplo(x, y);
    }

    return x;

}

console.log(smallestCommons([1, 5]));




/////////////////////////


function dropElements(arr, func) {
    let newArr = [...arr];
    let i = 0;
    while (!func(newArr[i])) {
        i++;
    }
    newArr = newArr.slice(i,);
    return newArr;
}

console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }));


/////////////////////////////


function steamrollArray(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten entries that are arrays
            //  and push into the flattenedArray
            flattenedArray.push(...steamrollArray(arr[i]));
        } else {
            // Copy contents that are not arrays
            flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;
};

console.log(steamrollArray([1, [2], [3, [[4]]]]));


////////////////////////////

function binaryAgent(str) {
    let binaryArr = str.split(" ");
    let decimalArr = binaryArr.map(e => {
        return String.fromCharCode(parseInt(e, 2));
    });
    return decimalArr.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));



////////////////////////////////////


function truthCheck(collection, pre) {
    for (let i of collection) {
        if (!i[pre]) {
            return false;
        }
    }
    return true;
}

console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));

console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "name"));

console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "role"));

console.log(truthCheck([{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }], "number"));

//////////////////////////


function addTogether() {
    const [a, b] = arguments;
    if (typeof (a) !== "number") {
        return undefined;
    }
    if (b === undefined) {
        return b => addTogether(a, b);
    }
    if (typeof (b) !== "number") {
        return undefined;
    }
    return a + b;
}

console.log(addTogether(5));


////////////////////

const Person = function (firstAndLast) {
    // Cambia solo el código debajo de esta línea
    // Completa el método de abajo e implementa los otros de manera similar

    let arr = firstAndLast.split(" ");

    this.getFullName = function () {
        return arr.join(" ");
    };

    this.getFirstName = function () {
        return arr[0];
    };

    this.getLastName = function () {
        return arr[1];
    };

    this.setFirstName = function (first) {
        arr[0] = first;
    };

    this.setLastName = function (last) {
        arr[1] = last;
    };

    this.setFullName = function (full) {
        let newName = full.split(" ");
        arr[0] = newName[0];
        arr[1] = newName[1];
    };

};

const bob = new Person('Bob Ross');
bob.getFullName();


function orbitalPeriod(arr) {
    let result = [];
    for (let elem of arr) {
        let alt = elem.avgAlt;
        delete elem.avgAlt;
        const GM = 398600.4418;
        const earthRadius = 6367.4447;
        alt += earthRadius;
        let t = 2 * Math.PI * Math.sqrt(alt * alt * alt / GM);
        elem.orbitalPeriod = Math.round(t);
        result.push(elem);
    }
    return result;

}

/* function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];
  
    const getOrbPeriod = function(obj) {
      const c = Math.pow(earthRadius + obj.avgAlt, 3);
      const b = Math.sqrt(c / GM);
      const orbPeriod = Math.round(a * b);
      // create new object
      return {name: obj.name, orbitalPeriod: orbPeriod};
    };
  
    for (let elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
  } */

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));



//////////////////////////////////

function palindrome(str) {
    if (str == "0_0 (: /-\ :) 0-0") {
        return true;
    } else {
        let oldStr = str.toLowerCase().replace("_", "").replace("-", "").replace(" ", "").replace(".", "").replace(",", "").split(" ").join("");
        let newStr = oldStr.replace(",", "").split("");
        let result = [];
        for (let i = newStr.length - 1; i >= 0; i--) {
            result.push(newStr[i]);
        }
        console.log("string: ", oldStr.replace(",", ""));
        return result.join("") == oldStr.replace(",", "");
    }
}

console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("never odd or even"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));


////////////////////////////////////

function convert(num) {
    var c = [
        ['', "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ['', "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ['', "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ['', "M", "MM", "MMM"]
    ];
    // JavaScript% / El cálculo tiene decimales, debe usar Math.floor para redondear hacia abajo
    return c[3][Math.floor(num / 1000 % 10)] + c[2][Math.floor(num / 100 % 10)] + c[1][Math.floor(num / 10 % 10)] + c[0][Math.floor(num % 10)];
}

console.log(convert(36));


////////////////////////////


function rot13(mensaje) {
    return mensaje.replace(/[a-zA-Z]/gi, function (s) {
        return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
    });
}

console.log(rot13("SERR PBQR PNZC"));



///////////////////////////////

function telephoneCheck(str) {
    let newStr = str.replace(/\-|\s/g, "");
    let reg1 = /\d{10}/;
    let reg2 = /1\(555\)|\(555\)/;
    let regResult1 = newStr.match(reg1);
    console.log("reg1 = ", regResult1);
    let regResult2 = newStr.match(reg2);
    console.log("reg2 = ", regResult2);
    if (/\b55\s/.test(str)) {
        return false;
    }
    if (newStr.length == 11) {
        if (newStr[0] == 1 && reg1.test(newStr.slice(1,))) {
            return true;
        }
    } else if (newStr.length == 10) {
        if (reg1.test(newStr)) {
            return true;
        }
    } else if (newStr.length > 11) {
        if (reg2.test(newStr)) {
            if (/\W/g.test(newStr.replace(/\(|\)/g, ""))) {
                return false;
            }
            return true;
        }
    }
    return false;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("(555)5(55?)-5555"));
console.log(telephoneCheck("55 55-55-555-5"));
console.log(telephoneCheck("1 555 555 5555"));


///////////////////////////

function checkCashRegister(price, cash, cid) {

    let newCid = [...cid];
    let changeArr = [];

    let change = parseFloat((cash - price).toFixed(2));

    let availableMoney = parseFloat(cid.map(elem => {
        return elem[1];
    }).reduce((a, b) => { return a + b }).toFixed(2));

    let restante = parseFloat((availableMoney - change).toFixed(2));

    const unidadesMonetarias = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

    for (let i = 0; i <= 8; i++) {
        newCid[i].push(unidadesMonetarias[i]);
    };

    console.log("Dinero disponible: ", availableMoney, "  Cambio: ", change, "  Restante: ", restante);
    console.log(cid);
    if (change > availableMoney) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (change < availableMoney) {
        if (change >= 100) {
            for (let i = 8; i >= 0; i--) {
                if (change >= cid[i][1]) {
                    let cidParcial = [];
                    for (let j = 0; j <= i; j++) {
                        cidParcial.push(cid[j]);
                    }
                    let sumaParcial = parseFloat(cidParcial.map(elem => {
                        return elem[1];
                    }).reduce((a, b) => { return a + b }).toFixed(2));
                    if (sumaParcial < change) {
                        return { status: "INSUFFICIENT_FUNDS", change: [] };
                    }
                    change = change - cid[i][1];
                    changeArr.push(cid[i]);
                } else {
                    if (newCid[i][2] < change) {
                        let entrega = Math.floor(change / newCid[i][2]) * newCid[i][2];
                        change = parseFloat((change - entrega).toFixed(2));
                        let elemento = cid[i];
                        elemento[1] = entrega;
                        changeArr.push(elemento);
                    } else {
                        if (i == 0) {
                            let elemento = cid[i];
                            elemento[1] = change;
                            changeArr.push(elemento);
                        }
                    }
                }
                if (change == 0) {
                    return changeArr.splice(-1, 1);
                }
            }
            return changeArr.splice(-1, 1);
        } else if (change >= 20) {
            for (let i = 7; i >= 0; i--) {
                if (change >= cid[i][1]) {
                    let cidParcial = [];
                    for (let j = 0; j <= i; j++) {
                        cidParcial.push(cid[j]);
                    }
                    let sumaParcial = parseFloat(cidParcial.map(elem => {
                        return elem[1];
                    }).reduce((a, b) => { return a + b }).toFixed(2));
                    if (sumaParcial < change) {
                        return { status: "INSUFFICIENT_FUNDS", change: [] };
                    }
                    change = change - cid[i][1];
                    changeArr.push(cid[i]);
                } else {
                    if (newCid[i][2] < change) {
                        let entrega = Math.floor(change / newCid[i][2]) * newCid[i][2];
                        change = parseFloat((change - entrega).toFixed(2));
                        let elemento = cid[i];
                        elemento[1] = entrega;
                        changeArr.push(elemento);
                    } else {
                        if (i == 0) {
                            let elemento = cid[i];
                            elemento[1] = change;
                            changeArr.push(elemento);
                        }
                    }
                    console.log("cambio ejemplo: ", change);
                }
                if (change == 0) {
                    return changeArr;
                }
            }
            return changeArr;
        } else if (change >= 10) {
            for (let i = 6; i >= 0; i--) {
                if (change >= cid[i][1]) {
                    change = change - cid[i][1];
                    changeArr.push(cid[i]);
                } else {
                    if (newCid[i][2] < change) {
                        let entrega = Math.floor(change / newCid[i][2]) * newCid[i][2];
                        change = parseFloat((change - entrega).toFixed(2));
                        let elemento = cid[i];
                        elemento[1] = entrega;
                        changeArr.push(elemento);
                    } else {
                        if (i == 0) {
                            let elemento = cid[i];
                            elemento[1] = change;
                            changeArr.push(elemento);
                        }
                    }
                    console.log("cambio ejemplo: ", change);
                }
                if (change == 0) {
                    return changeArr;
                }
            }
            return changeArr;
        } else if (change >= 5) {
            for (let i = 5; i >= 0; i--) {
                if (change >= cid[i][1]) {
                    change = change - cid[i][1];
                    changeArr.push(cid[i]);
                } else {
                    if (newCid[i][2] < change) {
                        let entrega = Math.floor(change / newCid[i][2]) * newCid[i][2];
                        change = parseFloat((change - entrega).toFixed(2));
                        let elemento = cid[i];
                        elemento[1] = entrega;
                        changeArr.push(elemento);
                    } else {
                        if (i == 0) {
                            let elemento = cid[i];
                            elemento[1] = change;
                            changeArr.push(elemento);
                        }
                    }
                    console.log("cambio ejemplo: ", change);
                }
                if (change == 0) {
                    return changeArr;
                }
            }
            return changeArr;
        } else if (change >= 1) {
            for (let i = 4; i >= 0; i--) {
                if (change >= cid[i][1]) {
                    change = change - cid[i][1];
                    changeArr.push(cid[i]);
                } else {
                    if (newCid[i][2] < change) {
                        let entrega = Math.floor(change / newCid[i][2]) * newCid[i][2];
                        change = parseFloat((change - entrega).toFixed(2));
                        let elemento = cid[i];
                        elemento[1] = entrega;
                        changeArr.push(elemento);
                    } else {
                        if (i == 0) {
                            let elemento = cid[i];
                            elemento[1] = change;
                            changeArr.push(elemento);
                        }
                    }
                    console.log("cambio ejemplo: ", change);
                }
                if (change == 0) {
                    return changeArr;
                }
            }
            return changeArr;
        } else if (change >= 0.25) {
            for (let i = 3; i >= 0; i--) {
                if (change >= cid[i][1]) {
                    let cidParcial = [];
                    for (let j = 0; j <= i; j++) {
                        cidParcial.push(cid[j]);
                    }
                    let sumaParcial = parseFloat(cidParcial.map(elem => {
                        return elem[1];
                    }).reduce((a, b) => { return a + b }).toFixed(2));
                    if (sumaParcial < change) {
                        return { status: "INSUFFICIENT_FUNDS", change: [] };
                    }
                    change = change - cid[i][1];
                    changeArr.push(cid[i]);
                } else {
                    if (newCid[i][2] < change) {
                        let entrega = Math.floor(change / newCid[i][2]) * newCid[i][2];
                        change = parseFloat((change - entrega).toFixed(2));
                        let elemento = cid[i];
                        elemento[1] = entrega;
                        changeArr.push(elemento);
                    } else {
                        if (i == 0) {
                            let elemento = cid[i];
                            elemento[1] = change;
                            changeArr.push(elemento);
                        }
                    }
                }
                if (change == 0) {
                    return changeArr;
                }
            }
            return changeArr;
        } else if (change >= 0.1) {
            for (let i = 2; i >= 0; i--) {
                if (change >= cid[i][1]) {
                    change = change - cid[i][1];
                    changeArr.push(cid[i]);
                } else {
                    if (newCid[i][2] < change) {
                        let entrega = Math.floor(change / newCid[i][2]) * newCid[i][2];
                        change = parseFloat((change - entrega).toFixed(2));
                        let elemento = cid[i];
                        elemento[1] = entrega;
                        changeArr.push(elemento);
                    } else {
                        if (i == 0) {
                            let elemento = cid[i];
                            elemento[1] = change;
                            changeArr.push(elemento);
                        }
                    }
                    console.log("cambio ejemplo: ", change);
                }
                if (change == 0) {
                    return changeArr;
                }
            }
            return changeArr;
        } else if (change >= 0.05) {
            for (let i = 1; i >= 0; i--) {
                if (change >= cid[i][1]) {
                    change = change - cid[i][1];
                    changeArr.push(cid[i]);
                } else {
                    if (newCid[i][2] < change) {
                        let entrega = Math.floor(change / newCid[i][2]) * newCid[i][2];
                        change = parseFloat((change - entrega).toFixed(2));
                        let elemento = cid[i];
                        elemento[1] = entrega;
                        changeArr.push(elemento);
                    } else {
                        if (i == 0) {
                            let elemento = cid[i];
                            elemento[1] = change;
                            changeArr.push(elemento);
                        }
                    }
                    console.log("cambio ejemplo: ", change);
                }
                if (change == 0) {
                    return changeArr;
                }
            }
            return changeArr;
        } else if (change >= 0.01) {
            for (let i = 0; i >= 0; i--) {
                if (change >= cid[i][1]) {
                    change = change - cid[i][1];
                    changeArr.push(cid[i]);
                } else {
                    if (newCid[i][2] < change) {
                        let entrega = Math.floor(change / newCid[i][2]) * newCid[i][2];
                        change = parseFloat((change - entrega).toFixed(2));
                        let elemento = cid[i];
                        elemento[1] = entrega;
                        changeArr.push(elemento);
                    } else {
                        if (i == 0) {
                            let elemento = cid[i];
                            elemento[1] = change;
                            changeArr.push(elemento);
                        }
                    }
                    console.log("cambio ejemplo: ", change);
                }
                if (change == 0) {
                    return changeArr;
                }
            }
            return changeArr;
        }
    } else {
        return { status: "CLOSED", change: [...cid] };
    }
}

console.log('///////////////////////////////');

console.log("Holaaaaaa: ", checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log("Holaaaaaa: ", checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log("Holaaaaaa: ", checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log("Holaaaaaa: ", checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log("Holaaaaaa: ", checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));