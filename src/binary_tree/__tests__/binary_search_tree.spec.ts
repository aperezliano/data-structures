import { Node, BinaryTree } from '../binary_search_tree';

it('creates a node with data', () => {
  const node = new Node({ key: 1, data: 'foo' });
  expect(node).not.toBeNull();
  expect(node.value.data).toBe('foo');
});

it('adds a left child', () => {
  const node = new Node({ key: 1, data: 'foo' });
  node.setLeftChild(new Node({ key: 2, data: 'left' }));
  const leftChild = node.getLeftChild() as Node;
  expect(leftChild.value.data).toBe('left');
});

it('adds a right child', () => {
  const node = new Node({ key: 1, data: 'foo' });
  node.setLeftChild(new Node({ key: 2, data: 'right' }));
  const leftChild = node.getLeftChild() as Node;
  expect(leftChild.value.data).toBe('right');
});

describe('tree', () => {
  let tree: BinaryTree;
  beforeEach(() => (tree = new BinaryTree()));

  it('creates a tree', () => {
    expect(tree).not.toBeNull();
  });

  it('adds an element to the tree', () => {
    tree.addNode({ key: 1, data: 'foo' });
    expect(tree.getNode(1)?.data).toBe('foo');
  });

  it('adds 2 elements to the tree', () => {
    tree.addNode({ key: 1, data: 'foo' });
    tree.addNode({ key: 2, data: 'baz' });
    expect(tree.getNode(2)?.data).toBe('baz');
  });

  it('throws error when adding an existing key to the tree', () => {
    tree.addNode({ key: 1, data: 'foo' });
    expect(() => tree.addNode({ key: 1, data: 'baz' })).toThrow();
  });
});
