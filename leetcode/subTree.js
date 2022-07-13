var isSubtree = function (root, subRoot) {
  function isSameTree(tree1, tree2) {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2 || tree1.val !== tree2.val) return false;
    return (
      isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
    );
  }

  function dfs(node) {
    if (!node) return false;
    if (isSameTree(node, subRoot)) return true;
    return dfs(node.left) || dfs(node.rigth);
  }

  return dfs(root);
};
