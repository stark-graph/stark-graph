export default {
  maxHeap: `function MaxHeap() {
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
    const temp = this.arr[pIdx];
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
    const tmp = this.arr[idx];
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
};`,
};
