//BFS

function binaryBFSTraversal() {
  let arr = [];
  let queue = [];
  let node = this.root;
  queue.push(this.root);

  while (queue.length > 0) {
    node = queue.shift();
    arr.push(node);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    return arr;
  }
}
