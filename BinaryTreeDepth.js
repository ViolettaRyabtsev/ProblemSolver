// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

var minDepth = function (root) {
  let num = 0;
  if (root === null) {
    return null;
  }
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  if (left === null || right === null) {
    num += left + right + 1;
    console.log(num, "here");
    return num;
  }

  return Math.min(left + 1, right + 1);
};
