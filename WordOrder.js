// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

const wordOrder = function (words) {
    const wordArray = words.split(" ");
    const newArray = [];
    for(let i = 0; i < wordArray.length; i++){
        for(let j = 0; j < wordArray.length; j++){
            const index = wordArray[j].indexOf((i+1).toString());
            if(index >= 0){
                newArray.push(wordArray[j]);
            }
        }
    }
    const newString = newArray.toString().replace(/,/g, " ");
    return newString;
}

console.log(wordOrder("4of Fo1r pe6ople g3ood th5e the2"));