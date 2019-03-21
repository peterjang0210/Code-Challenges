// isograms are words that do not contain the same letter twice
// write a function that returns true or false based on if it is an isogram or not

const isIsogram = function(str){
    if(str.length > 0){
      for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i].toLowerCase() === str[j].toLowerCase())
              return false;
        }
      }  
      return true;
    } else 
        return true;
  }
