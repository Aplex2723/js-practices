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

function commonItemsInArray(array1, array2) {
   // creating a loop throught first array and create an object where properties === array values
   // loop for each element in array2 and compare if the object has the same value;
   let map = {}; // O(1)
   array1.forEach(i => {
       if(!map[i]) {
           const item = i;
           map[item] = true;
       }
   }) //O(a)

   for(let j = 0; j < array2.length; j++){
       if(map[array2[j]]) {
           return true;
       }
   } //O(b)
   
   return false //O(1)
}

// BigO = O(a + b) = O(n)

commonItemsInArray(['a', 'b', 'c', 'x'], ['z', 'y', 'x']);
