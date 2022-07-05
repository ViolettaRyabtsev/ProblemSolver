const { arrayBuffer } = require("stream/consumers");

const maxSumSubArray = (arr, num) => {
  //define max sum and temp sum
  let maxSum = 0;
  let tempSum = 0;
  //find the first sum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  console.log(tempSum);
  // iterate thr arr with start index num
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - [arr[i - num]] + arr[i];
    console.log(tempSum);
    maxSum = Math.max(tempSum, maxSum);
  }
  console.log(maxSum);
  return maxSum;
  // subst first number and add next number
};

maxSumSubArray([1, 3, 1, 5, 6, 7, 2, 9], 3);
