/* Given 2 arrays, create a function that
let's a user know (true/false), whether
these two arrays contain any common items

For Example:
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
should return false
------------------------------------
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x];
should return true;

*/

//! Function that save memory, but sacrifice speed
function containsCommonItem(arr1, arr2) {
  for (let i=0; i < arr1.length; i++) {
    for ( let j=0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false
}

//*BigO = O(a*b) = O(n^2)
//*O(1) - Space Complexity

//! This function its fast, but takes more memory
function commonItemsInArray(array1, array2) {
   // creating a loop throught first array and create an object where properties === array values
   // loop for each element in array2 and compare if the object has the same value;
   let map = {};
   array1.forEach(i => {
       if(!map[i]) {
           const item = i;
           map[item] = true;
       }
   })

   for(let j = 0; j < array2.length; j++){
       if(map[array2[j]]) {
           console.log('true')
           return true;
       }
   }

   console.log('false')
   return false
}

//*Big O = O(a+b)
//*O(a) - Time complexity

commonItemsInArray(['a', 'b', 'c', 'x'], ['z', 'y', 'x']);


// Another solution with js methods

const commonItemsInArray2 = (array1, array2) => {
    return array1.some(item => array2.includes(item))
}

commonItemsInArray2(['a', 'b', 'c', 'x'], ['z', 'y', 'x'])
