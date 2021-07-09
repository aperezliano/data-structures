import { Node, BinaryTree } from '../binary_search_tree';

describe('node', () => {
  let node: Node;
  beforeEach(() => (node = new Node({ key: 1, data: 'foo' })));

  it('creates a node with data', () => {
    expect(node).not.toBeNull();
    expect(node.value.data).toBe('foo');
  });

  it('adds a left child', () => {
    node.setLeftChild(new Node({ key: 2, data: 'left' }));
    const leftChild = node.getLeftChild() as Node;
    expect(leftChild.value.data).toBe('left');
  });

  it('adds a right child', () => {
    node.setLeftChild(new Node({ key: 2, data: 'right' }));
    const leftChild = node.getLeftChild() as Node;
    expect(leftChild.value.data).toBe('right');
  });
});

describe('tree', () => {
  let tree: BinaryTree;
  beforeEach(() => (tree = new BinaryTree()));

  it('creates a tree', () => {
    expect(tree).not.toBeNull();
  });

  it('adds an element to the tree', () => {
    tree.add({ key: 1, data: 'foo' });
    expect(tree.get(1)?.data).toBe('foo');
  });

  it('adds 2 elements to the tree', () => {
    tree.add({ key: 1, data: 'foo' });
    tree.add({ key: 2, data: 'baz' });
    expect(tree.get(2)?.data).toBe('baz');
  });

  it('throws error when adding an existing key to the tree', () => {
    tree.add({ key: 1, data: 'foo' });
    expect(() => tree.add({ key: 1, data: 'baz' })).toThrow();
  });

  it('finds an existing element', () => {
    tree.add({ key: 1, data: 'foo' });
    tree.add({ key: 2, data: 'baz' });
    expect(tree.contains(1)).toBe(true);
  });

  it('does not find a non existing element', () => {
    tree.add({ key: 1, data: 'foo' });
    tree.add({ key: 2, data: 'baz' });
    expect(tree.contains(3)).toBe(false);
  });
});
