// Task 4: Remove Duplicates from Array
// Write a function that takes an array and returns a new array with duplicates removed.

function removeDuplicates(arr) {
    return[...new Set(arr)] // Set is a built-in JavaScript object that only allows unique 
                            // values, making it perfect for removing duplicates.
  }
  
  console.log(removeDuplicates([1,1,2,3,4,5,6,6,6,6,3,3,2]))