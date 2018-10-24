const fs = require('fs');

let age = 'age';
let birthYear = 'year';
let birthDay = 'day';
let birthMonth = 'month';

let arrayOfUserData1 = ['name', 'surname', age, birthYear];

let arrayCombinations = [
  arrayOfUserData1
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
