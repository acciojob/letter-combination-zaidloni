function letterCombinations(input_digit) {
  //brute force approach
  var numberStringHt = {
    2:"abc",
    3:"def",
    4:"ghi",
    5:"jkl",
    6:"mno",
    7:"pqrs",
    8:"tuv",
    9:"wxyz",
  }

  var allCombinations = [];

  for (let i = 0; i < input_digit.length; i++) {
    let firstString = numberStringHt[input_digit[i]] || "";
    let secondString = numberStringHt[input_digit[i+1]] || "";
    let thirdString = numberStringHt[input_digit[i+2]] || "";

    if(secondString){
      for (const firstLetter of firstString) {
        for (let secondLetter of secondString) {
          if(input_digit.length == 3){
            for(let thirdLetter of thirdString){
              allCombinations.push(firstLetter + secondLetter + thirdLetter)
            }
          }else{
              allCombinations.push(firstLetter + secondLetter)
          }
        }
      }
    }
  }

  return allCombinations;
}

module.exports = letterCombinations;
