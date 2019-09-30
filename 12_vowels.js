/*
Vowels

Write a method that will take a string and
return an array of vowels used in that string.

Example:
vowels("The quick brown fox") should return ["e","u","i","o","o"]
vowels("Hello WOrld") should return ["e","o","O"]

Check your solution by running the tests:
npm test
*/

function vowels(string) {
   return string.match(/[aeiou]/gi)   
 }

// function vowels(string) {
//    let letters = string.split("")
//    console.log(letters)
//    for (let ind in letters){
//        if (letters[ind] !== "a" || "e" || "i" || "o" || "u"){
//         letters.splice(ind, 1)
//        }
//    }
//    return letters
// }

module.exports = {
    vowels
}