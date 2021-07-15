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
      [this.data[index], this.data[this.parent(index)]] = [
        this.data[this.parent(index)],
        this.data[index],
      ];
      index = this.parent(index);
    }
    return this;
  }

  getTop(): number | null {
    return null;
  }

  getData(): number[] {
    return [...this.data];
  }

  private biggerThan(a: number, b: number): boolean {
    return a > b;
  }

  private smallerThan(a: number, b: number): boolean {
    return a < b;
  }

  private parent(index: number): number {
    return Math.floor(index / 2);
  }

  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  private rightChild(index: number): number {
    return 2 * index + 2;
  }
}

export default Heap;
