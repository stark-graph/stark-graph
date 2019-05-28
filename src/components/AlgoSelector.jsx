import React from 'react';

const codeString = `class Node {
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
    const root = this.root;

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
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
}`;

const AlgoSelector = () => (
  <div
    className="algo"
    style={{
      width: 'auto',
      height: '100%',
      overflowY: 'auto',
    }}
  >
    <pre>
      <code className="language-javascript">{codeString}</code>
    </pre>
  </div>
);

export default AlgoSelector;
