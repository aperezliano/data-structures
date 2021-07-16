import Heap from '../heap';

let heap: Heap;

describe('Min Heap', () => {
  beforeEach(() => {
    heap = new Heap();
  });

  it('creates a heap', () => {
    expect(heap).not.toBeNull();
  });

  it('adds an element to the heap', () => {
    heap.add(3);
    expect(heap.getData()).toContain(3);
  });

  it('adds increasing elements to a min Heap', () => {
    heap.add(1).add(2).add(3).add(4);
    expect(heap.getData()).toEqual([1, 2, 3, 4]);
  });

  it('adds non increasing elements to a min Heap', () => {
    heap.add(4).add(5).add(6).add(3);
    expect(heap.getData()).toEqual([3, 4, 6, 5]);
  });

  it('gets the min element each time', () => {
    heap.add(4).add(5).add(6).add(3);
    expect(heap.getTop()).toBe(3);
    expect(heap.getTop()).toBe(4);
    expect(heap.getTop()).toBe(5);
    expect(heap.getTop()).toBe(6);
  });
});

describe('Max Heap', () => {
  beforeEach(() => {
    heap = new Heap('max');
  });

  it('creates a heap', () => {
    expect(heap).not.toBeNull();
  });

  it('adds an element to the heap', () => {
    heap.add(3);
    expect(heap.getData()).toContain(3);
  });

  it('adds decreasing elements to a max Heap', () => {
    heap.add(3).add(2).add(1);
    expect(heap.getData()).toEqual([3, 2, 1]);
  });

  it('adds non decreasing elements to a max Heap', () => {
    heap.add(4).add(5).add(6).add(3);
    expect(heap.getData()).toEqual([6, 4, 5, 3]);
  });

  it('gets the max element each time', () => {
    heap.add(4).add(5).add(6).add(3);
    expect(heap.getTop()).toBe(6);
    expect(heap.getTop()).toBe(5);
    expect(heap.getTop()).toBe(4);
    expect(heap.getTop()).toBe(3);
  });
});
