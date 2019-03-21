// render a staircase with the given input number of rows
// align to the right; increase number of stars by 1 per row

const renderStars = function (n) {
    for(let i = 1; i <= n; i++){
        let string = "";
        const numSpaces = n - i
        for(let j = numSpaces - 1; j >= 0; j--){
            string += " ";
        }
        for(let k = 1; k < n - numSpaces + 1; k++){
            string += "*";
        }
        console.log(string);
    }
}

renderStars(7);