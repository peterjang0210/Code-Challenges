// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


const findOdd = function (A){
    const newNumArray = [];
    const countArray  = [];
    for(let i = 0; i < A.length; i++){
        if(!newNumArray.includes(A[i])){
            newNumArray.push(A[i]);
            countArray.push(0);
        } 
    }
    for(let j = 0; j < newNumArray.length; j++){
        for(let l = 0; l < A.length; l++){
            if(newNumArray[j] === A[l]){
                countArray[j] += 1;
            }
        }
    }
    for(let k = 0; k < newNumArray.length; k++){
        if( countArray[k] % 2 === 1){
            return newNumArray[k];
        }
    }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));