// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function (nums, target) {
  //create a array of pair indexes
  var arrayOfIndexPair = [];
  // iterate through the nums
  for (var i = 0; i < nums.length; i++) {
    // iterate through the nums again with start point is a next value in array
    for (var j = i + 1; j < nums.length; j++) {
      //if sum = target
      if (nums[i] + nums[j] === target) {
        arrayOfIndexPair.push(i, j);
      }
      // push index of this pair in array
    }
  }
  //return the array
  return arrayOfIndexPair;
};

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
