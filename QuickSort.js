/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

var quicksort = function (array) {
    //I. not sorted array 
    //O. sorted array 
    //C.  need to use recursion and O(n)
    // E. arary of numbers, array is not empty 
    var index = (array.length / 2).toFixed()
    var pivot = array[index]

    // input array 
    var arrofSmaller = []
    var arrofBiger = []    // has a pivot 
    //portion array to 2 arrays 
    //iterate through the array 
    for (var i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            arrofSmaller.push(array[i])

        } if (array[i] > pivot) {
            arrofBiger.push(array[i])

        }
    }
    var arr = arrofSmaller.concat(pivot, arrofBiger)
    return arr;
};

//  var index = (array.length / 2).toFixed();

console.log(quicksort([1, 2, 6, 8, 5, 4, 9]))
