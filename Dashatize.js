// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

// Ex:
// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

const dashatize = function(num){
    if(!num || num === 1){
        return num.toString();
    }
    const numArray = [...(num.toString())];
    if(numArray[0] === "-"){
        numArray.shift();
        console.log(numArray);
        if(numArray.length === 1){
            console.log("test");
            return numArray[0];
        }
    }
    let string = "";
    for(let i = 0; i < numArray.length; i++){
        if(i !== 0 && i !== numArray.length - 1 && parseInt(numArray[i]) % 2 !== 0){
            if(numArray[i-1] % 2 === 1){
                string += (numArray[i] + "-");
            }
            else {
                string += ("-" + numArray[i] + "-");
            }
        } else if (i === 0 && parseInt(numArray[i]) % 2 !== 0) {
            string += (numArray[i] + "-");
        } else if (parseInt(numArray[i - 1]) % 2 === 0 && parseInt(numArray[i]) % 2 !== 0) {
            string += ("-" + numArray[i]);
        } else {
            string += numArray[i];
        }
    }
    return string;
}

console.log(dashatize(-1));