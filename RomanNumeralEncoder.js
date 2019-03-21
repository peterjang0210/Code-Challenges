//convert an input number < 4000 to a roman numeral

const encoder = function(number) {
  let romanNumeral = "";
  let thousands,
    hundreds,
    tens,
    ones = 0;
  if (number >= 1000) {
    thousands = Math.floor(number / 1000) * 1000;
    number -= thousands;
  }
  if (number >= 100) {
    hundreds = Math.floor(number / 100) * 100;
    number -= hundreds;
  }
  if (number >= 10) {
    tens = Math.floor(number / 10) * 10;
    number -= tens;
  }
  if (number >= 1) {
    ones = Math.floor(number / 1);
    number -= ones;
  }
  for (let i = 0; i < thousands / 1000; i++) {
    romanNumeral += "M";
  }
  for (i = 0; i < hundreds / 100; i++) {
    if (hundreds / 100 === 9) {
      romanNumeral += "CM";
      i += 9;
    } else if (hundreds / 100 >= 5) {
      if (i >= 5) {
        romanNumeral += "C";
      } else {
        romanNumeral += "D";
        i += 4;
      }
    } else {
      if (hundreds / 100 === 4) {
        romanNumeral += "CD";
        i += 4;
      } else {
        romanNumeral += "C";
      }
    }
  }
  for(i = 0; i < tens / 10; i++){
    if (tens / 10 === 9) {
        romanNumeral += "XC";
        i += 9;
      } else if (tens / 10 >= 5) {
        if (i >= 5) {
          romanNumeral += "X";
        } else {
          romanNumeral += "L";
          i += 4;
        }
      } else {
        if (tens / 10 === 4) {
          romanNumeral += "XL";
          i += 4;
        } else {
          romanNumeral += "X";
        }
      }
  }
  for(i = 0; i < ones; i++){
    if (ones === 9) {
        romanNumeral += "IX";
        i += 9;
      } else if (ones >= 5) {
        if (i >= 5) {
          romanNumeral += "I";
        } else {
          romanNumeral += "V";
          i += 4;
        }
      } else {
        if (ones === 4) {
          romanNumeral += "IV";
          i += 4;
        } else {
          romanNumeral += "I";
        }
      }
  }
  return romanNumeral;
}
