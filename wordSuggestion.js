const fs = require("fs");
const validWords = fs.readFileSync("./wordList.txt", "utf-8").split('\n');
const numToLetterMapping = {2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7:'pqrs', 8: 'tuv', 9: 'wxyz'};

function findMatchingWords(digits){
    if(digits.length==0) return [];
    let result = [];
    numToLetterMapping[digits[digits.length-1]].split('').forEach(letter=> result.push(letter));
    let i = digits.length-2;
    while(i>=0){ //To find all combination of words
        let newResult = [];
        numToLetterMapping[digits[i]].split('').forEach(e => {
            result.forEach(item => newResult.push(e+item));
        })
        result = newResult;
        i--;
    }
    return result.filter((word)=> validWords.includes(word));
}

console.log(findMatchingWords(''));
console.log(findMatchingWords('43556'));
console.log(findMatchingWords('2937663'));