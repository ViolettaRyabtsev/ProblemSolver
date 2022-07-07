class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) {
          return undefined;
        }
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        }
        if (value > current.value) {
          if (current.right === null) {
            current.right = node;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    let node = new Node(value);
    if (this.root === null) {
      return false;
    }
    var current = this.root;
    found = false;
    while (current && !found) {
      if (value > current.value) {
        this.root = current.right;
      } else if (value < current.value) {
        this.root = current.left;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  //preorder
  traverseDepthFirstSearch() {
    var arr = [];
    let current = this.root;
    function helper(node) {
      arr.push(node.value);
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
    }
    helper(current);
    return arr;
  }
}

let tree = new BinaryTree();

console.log(tree);
