export default {
  BST: `class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(val) {
    const { root } = this;

    if (!root) {
      this.root = new Node(val);
      return;
    }

    let currentNode = root;
    const newNode = new Node(val);

    while (currentNode) {
      if (val < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}`,
};
