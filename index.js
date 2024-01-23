function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split("").reverse().join("");

  if (word.toLowerCase() === reversedWord.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
let word = "madam";
console.log(isPalindrome(word));
// isPalindrome(madam)

/* 
  Add your pseudocode here
  if  letters spell same forwards and backwards -> true

  else return false iterate through every letter to confirm the condition.

  only strings allowed
  no empty strings--no spaces

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;