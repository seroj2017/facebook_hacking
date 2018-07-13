const fs = require('fs');

let age = 34;
let birthYear = 1984;
let birthDay = 02;
let birthMonth = 12;

let arrayOfUserData1 = ['gayan', 'avagyan', age, birthYear];
let arrayOfUserData2 = ['gay', 'avagyan', age, birthYear];
let arrayOfUserData3 = ['gayush', 'avagyan', age, birthYear];
let arrayOfUserData4 = ['gayan', 'ars', age, birthYear];
let arrayOfUserData5 = ['gay', 'arsen', age, birthYear];
let arrayOfUserData6 = ['gay', 'ars', age, birthYear];
let arrayOfUserData7 = ['gayush', 'ars', age, birthYear];
let arrayOfUserData8 = ['gayush', 'arsen', age, birthYear];
let arrayOfUserData9 = ['sam', 'hov', age, birthYear];
let arrayOfUserData10 = ['samul', 'hovul', age, birthYear];
let arrayOfUserData11 = ['sam', 'hovul', age, birthYear];
let arrayOfUserData12 = ['samul', 'hov', age, birthYear];
let arrayOfUserData13 = ['samul', 'hovulik', age, birthYear];
let arrayOfUserData14 = ['samvelik', 'hovul', age, birthYear];
let arrayOfUserData15 = ['samvelik', 'hovulik', age, birthYear];
let arrayOfUserData16 = ['gayan', 'saqo', age, birthYear];
let arrayOfUserData17 = ['gay', 'saqo', age, birthYear];
let arrayOfUserData18 = ['gayush', 'saqo', age, birthYear];
let arrayOfUserData19 = ['gayan', 'saq', age, birthYear];
let arrayOfUserData20 = ['gay', 'saq', age, birthYear];
let arrayOfUserData21 = ['gayush', 'saq', age, birthYear];

let arrayCombinations = [
  arrayOfUserData1,
  arrayOfUserData2,
  arrayOfUserData3,
  arrayOfUserData4,
  arrayOfUserData5,
  arrayOfUserData6,
  arrayOfUserData7,
  arrayOfUserData8,
  arrayOfUserData9,
  arrayOfUserData10,
  arrayOfUserData11,
  arrayOfUserData12,
  arrayOfUserData13,
  arrayOfUserData14,
  arrayOfUserData15,
  arrayOfUserData16,
  arrayOfUserData17,
  arrayOfUserData18,
  arrayOfUserData19,
  arrayOfUserData20,
  arrayOfUserData21
];

function passwordsArray1(array){
  let results = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      results.push(`${array[i]}${array[j]}`);
    }
  }
  return results.join('\n');
}

function passwordsArray2(array){
  let results = [];

  for (let i = array.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      results.push(`${array[i]}${array[j]}`);
    }
  }
  return results.join('\n');
}

function generatePassword(array){
  let arrData = [];
  for(let i=0; i<array.length; i++){
    arrData.push(passwordsArray1(array[i]) + passwordsArray2(array[i]));
  }
  return arrData.join('\n');
}

let otherData1 = generatePassword(arrayCombinations);

function writeFileWordlist(otherData){
  fs.readFile('./wordlist.txt', (err, data) => {
    if (err) throw err;
    fs.writeFile('./wordlist.txt', otherData+data, (err) => {
      if (err) throw err;
    });
  });
}

writeFileWordlist(otherData1);
