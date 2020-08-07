/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


var rangeSumBST = function (root, L, R) {
    var sum = 0;
    if (root == null) {
        return 0;
    }
    if (root.val >= L && root.val <= R) {
        sum += root.val

    } if (L < root.val) {
        sum += rangeSumBST(root.left, L, R)
    } if (R >= root.val) {
        sum += rangeSumBST(root.right, L, R)
    }

    return sum;

};