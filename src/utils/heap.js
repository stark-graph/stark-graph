class Node {
  constructor(val, isNewest) {
    this.name = val.toString();
    this.attributes = {};
    this.isNewest = isNewest;
    this.nodeSvgShape = {
      shape: 'circle',
      shapeProps: {
        r: 10,
        x: 0,
        y: 0,
        fill: isNewest ? 'red' : 'grey',
      },
    };
    this.children = ['', ''];
  }
}

function assembleHeap(arr, i = 1, newestVal) {
  if (i >= arr.length) {
    return {
      name: 'null',
    };
  }

  let isNewest = false;
  if (arr[i] === newestVal) {
    isNewest = true;
  }

  const node = new Node(arr[i], isNewest);

  node.children[0] = assembleHeap(arr, i * 2);
  node.children[1] = assembleHeap(arr, i * 2 + 1);

  return node;
}

export function buildMaxHeap(arr) {
  const newestVal = arr[arr.length - 1];
  // const arrCopy = [...arr];
  // console.log('arrCopy: ', arrCopy);
  // let i = Math.floor(arrCopy.length / 2 - 1);

  // // Build a max heap out of
  // // all arrCopy elements passed in.
  // for (i; i >= 0; i--) {
  //   heapify(arrCopy, i, arrCopy.length);
  // }
  // return arrCopy;
  const heap = new MaxHeap();
  for (let el of arr) {
    heap.insert(el);
  }
  console.log('sdfoidskflbsf', heap.arr);
  return assembleHeap(heap.arr, 1, newestVal);
}

function heapify(heap, i, max) {
  while (i < max) {
    let index = i;
    let leftChild = 2 * i + 1;
    let righChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    } else if (righChild < max && heap[righChild] > heap[index]) {
      index = righChild;
    }

    if (index == i) {
      return;
    }

    [heap[i], heap[index]] = [heap[index], heap[i]];
    i = index;
  }
}

function MaxHeap() {
  this.arr = [null];
}

MaxHeap.prototype.insert = function(n) {
  this.arr.push(n);
  this.swim(this.arr.length - 1);
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
  while (2 * idx <= N) {
    let childIdx = 2 * idx;
    if (childIdx < N && this.arr[childIdx] < this.arr[childIdx + 1]) {
      childIdx += 1;
    }
    if (this.arr[childIdx] < this.arr[idx]) break;
    let tmp = this.arr[idx];
    this.arr[idx] = this.arr[childIdx];
    this.arr[childIdx] = tmp;
    idx = childIdx;
  }
};

MaxHeap.prototype.delMax = function() {
  const tmpMax = this.arr[1];
  this.arr[1] = this.arr[this.arr.length - 1];
  this.arr.pop();
  this.sink(1);
  return tmpMax;
};

// function assembleHeap(arr, i = 1, maxI, tree = new Node(null)) {
//   if (i >= maxI) {
//     return {
//       name: null,
//     };
//   }
//   const node = new Node(arr[0]);
//   const leftChildIdx = i === 0 ? 1 : i*2;
//   const rightChildIdx = i === 0 ? 2 : i*2 + 1;
//   node.children[0] = assembleHeap(arr, leftChildIdx, maxI);
//   node.children[1] = assembleHeap(arr, rightChildIdx, maxI);
//   return node;
// }

// a = new MaxHeap()
// console.log(a)
// a.insert(5)
// a.insert(8)
// a.insert(2)
// a.insert(12)
// a.insert(9)
// a.insert(15)
// console.log(a)
// a.delMax()
// console.log(a)
// a.insert(22)
// console.log(a)
// a.insert(15)
// a.insert(7)
// console.log(a)
