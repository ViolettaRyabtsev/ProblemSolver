// const countUniqValues = (arr) => {
//   let left = 0;

//   for (let right = 1; right < arr.length; right++) {
//     if (arr[left] !== arr[right]) {
//       left++;
//       arr[left] = arr[right];
//     }
//   }
//   console.log(left + 1);
//   console.log(arr);
// };
// console.log(countUniqValues([1, 3, 4, 4, 5, 5, 7, 7, 9]));

function multiplePointers() {
  let obj = {};
  for (let key in arguments) {
    obj[arguments[key]] = (obj[arguments[key]] || 0) + 1;
  }

  for (let key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(multiplePointers(1, 2, 2));

function multiplePointers2() {
  let arr = [];
  for (let key in arguments) {
    arr.push(arguments[key]);
  }

  let left = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[left] !== arr[i]) {
      left++;
    } else if (arr[left] === arr[i]) {
      return true;
    }
  }
  return false;
}

multiplePointers2(1, 2, 2, 4, 5);

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let average = 0;
  for (let i = 1; i < arr.length; i++) {
    average = (arr[left] + arr[i]) / 2;

    console.log(average, "avg");
    left++;
    if (average === target) {
      return true;
    }
  }
  return false;
}

averagePair([1, 2, 3], 2.5);

function isSubsequence() {}
isSubsequence("hello", "hello world");
