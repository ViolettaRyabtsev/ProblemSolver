// child less then parent - max binary heap
// child bigger then parent - min binary heap
// left children fill first

//2n+ 1 left child
// 2n+2 right child

class MaxBinaryHeap {
  constructor() {
    values = [];
  }

  insert(value) {
    this.values.push(value);

    function bubbleUp() {
      let index = this.value.length - 1;
      const element = this.values[index];
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.values[parentIndex];
        if (parent <= element) break;
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    }

    bubbleUp();
  }
}
