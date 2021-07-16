type HeapTypes = 'min' | 'max';

// Min Heap
class Heap {
  private data: number[] = [];
  private compFunc: Function;

  constructor(type?: HeapTypes) {
    switch (type) {
      case 'max':
        this.compFunc = this.biggerThan;
        break;
      case 'min':
      default:
        this.compFunc = this.smallerThan;
    }
  }

  add(num: number): Heap {
    let index = this.data.length;
    this.data.push(num);
    while (this.compFunc(this.data[index], this.data[this.parent(index)])) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
    return this;
  }

  getTop(): number | null {
    let root = this.data[0];
    if (this.data.length > 0) {
      this.data[0] = this.data.pop() as number;
    }
    this.heapify(0);

    return root;
  }

  getData(): number[] {
    return [...this.data];
  }

  private heapify(index: number) {
    let leftChild = this.leftChild(index);
    let rightChild = this.rightChild(index);
    let smallest = index;
    if (
      leftChild < this.data.length &&
      this.compFunc(this.data[leftChild], this.data[index])
    ) {
      smallest = leftChild;
    }
    if (
      rightChild < this.data.length &&
      this.compFunc(this.data[rightChild], this.data[smallest])
    ) {
      smallest = rightChild;
    }
    if (index !== smallest) {
      this.swap(index, smallest);
      this.heapify(smallest);
    }
  }

  private swap(i1: number, i2: number) {
    [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
  }

  private biggerThan(a: number, b: number): boolean {
    return a > b;
  }

  private smallerThan(a: number, b: number): boolean {
    return a < b;
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  private rightChild(index: number): number {
    return 2 * index + 2;
  }
}

export default Heap;
