const findAnagram = (str1, str2) => {
  let obj1 = {};
  let obj2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (let value of str1) {
    obj1[value] = (obj1[value] || 0) + 1;
  }

  for (let value of str2) {
    obj2[value] = (obj2[value] || 0) + 1;
  }

  console.log(obj1, obj2);

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(findAnagram("qwetvy", "qeywrt"));

const sameFrequency = (num1, num2) => {
  let arr1 = num1.toString().split("");
  let arr2 = num2.toString().split("");
  console.log(arr1, arr2);
  let obj1 = {};
  let obj2 = {};

  for (let value of arr1) {
    obj1[value] = (obj1[value] || 0) + 1;
  }

  for (let value of arr2) {
    obj2[value] = (obj2[value] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
    if (!key in obj2) {
      return false;
    }
  }
  console.log(obj1, obj2);
  return true;
};

console.log(sameFrequency(282, 281));
