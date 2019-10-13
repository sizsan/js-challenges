/*
Write code which will return the common characters found in
two different strings. You should only need to return the
characters once.

Examples:
commonCharacters("efg", "feg") => "efg"
commonCharacters("We are both dragon energy", "I am God's vessel") => "eaodg"
commonCharacters("Alright alright alright", "") => ""

*/

const commonCharacters = (string1, string2) => {
    let string3 = string1 += string2;
    console.log(string3) 
}

module.exports = {
    commonCharacters
};