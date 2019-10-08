/*

Working individually or in pairs write out differnt tests which will
count the number of even numbers in an array. 

Try to have at least three different tests which test differnt values
put into your method, such as an empty array.

Once you have done done this, write out the method and check if it passes. 

Example: countEvens = ([1,2,3,4]) => 2

Hint:
If your having trouble writing tests, look up some of the previous challenges or try
Google - mocha tests to get an idea.

*/

const countEvens = (arr) => {
    let count = 0;
    for (num of arr){
        if (num % 2 == 0){
            count +=1;
        }
    }
    console.log(count)
}
countEvens([1,2,3,4])
// Your tests here