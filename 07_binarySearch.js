/*
Write a method which will act as a binary search which will find the 
position and the actual number of steps required to find the position. 
When the binArr has an even number of values the midpoint index will be rounded up.

Example:
    binarybinArr = [1,5,8,12,20,21,35]
    searchValue = 8

    In this case the index returned would be 2 and it should take 3 steps. 
    In the first step, 3 is the midpoint index (value = 12). 
    In the second step 1 is the midpoint index (value = 5). 
    In the third and final step we are only left with 8 at index 2.

*/
    function binarySearch(binArr, searchValue){
        let startIndex = 0;
        let endIndex = binArr.length - 1;
        let steps = 0;
        while(startIndex <= endIndex) {
          let middleIndex = Math.floor((startIndex + endIndex) / 2);
          steps += 1 
          if(searchValue === binArr[middleIndex]) {
            return [middleIndex, steps]
          }
          else if(searchValue > binArr[middleIndex]) {
            startIndex = middleIndex + 1;
          }
          else if(searchValue < binArr[middleIndex]) {
             endIndex = middleIndex - 1;
          }
          else {
            console.log("Not Found this loop iteration. Looping another iteration.")
          }
        }
        
        console.log("searchValue value not found in binArr");
      }


module.exports = {
    binarySearch
};