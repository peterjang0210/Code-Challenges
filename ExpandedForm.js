// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

const expandedForm = function (num) {
    const numArray = [...num.toString()];
    let newString = "";
    for(let i = 0; i < numArray.length; i++){
        let iterator = numArray.length - i;
        if(numArray[i] !== "0"){
            newString += numArray[i];
            while(iterator > 1){
                newString += "0";
                iterator--;
            }
            if(newString.length > 1 && i !== numArray.length - 1){
                newString += " + ";
            }
        }
    }
    if(newString.length > 1 && newString[newString.length - 2] === "+"){
        newString = newString.slice(0, newString.length - 3);
    }
    return newString;
}

console.log(expandedForm(900));