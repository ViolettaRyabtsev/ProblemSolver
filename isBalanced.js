// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

//     a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

var isBalanced = function(root) {

    function helper(root){
       if(root==null){
           return 0;
       } 
        
       let left=helper(root.left)
       let right=helper(root.right)
     
       if(left===null || right===null || Math.abs(left-right)>1) return  null
   
        return Math.max(left, right)+1
      }
       
       return helper(root)!==null 
   
   }