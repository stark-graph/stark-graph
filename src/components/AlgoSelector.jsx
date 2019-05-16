import React from 'react';

const BSTstring = `class Node {
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

    const currentNode = root;
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

const heapString = `function MaxHeap() {
  this.arr = [null];
}

MaxHeap.prototype.insert = function(n) {
  this.arr.push(n);
  this.swim(this.arr.length - 1)
};

MaxHeap.prototype.swim = function(idx) {
  let pIdx = Math.floor(idx / 2);
  while (idx > 1 && this.arr[idx] >= this.arr[pIdx]) {
    // swap
    let temp = this.arr[pIdx];
    this.arr[pIdx] = this.arr[idx];
    this.arr[idx] = temp;

    // reset idx, pidx
    idx = pIdx;
    pIdx = Math.floor(idx / 2);
  }
};

MaxHeap.prototype.sink = function(idx) {
const N = this.arr.length - 1;
  while(2 * idx <= N) {
   let childIdx = 2 * idx;
   if (childIdx < N && this.arr[childIdx] < this.arr[childIdx + 1]) {
     childIdx += 1;
   }
   if (this.arr[childIdx] < this.arr[idx])  break;
   let tmp = this.arr[idx];
   this.arr[idx] = this.arr[childIdx];
   this.arr[childIdx] = tmp;
   idx = childIdx;
  }
}

MaxHeap.prototype.delMax = function() {
  const tmpMax = this.arr[1];
  this.arr[1] = this.arr[this.arr.length - 1];
  this.arr.pop();
  this.sink(1);
  return tmpMax
}`;

const AlgoSelector = () => {
  return (
    <div
      className="algo"
      style={{
        width: 'auto',
        height: '100%',
        borderStyle: 'solid',
        borderWidth: '2px',
        overflowY: 'auto',
      }}
    >
      <pre>
        <code className="language-javascript">{codeString}</code>
      </pre>
    </div>
  );
};

export default AlgoSelector;
