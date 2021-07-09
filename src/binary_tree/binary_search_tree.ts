class BinaryTree {
  private root: Node | null;

  add(data: NodeData) {
    const node = new Node(data);
    if (this.root == null) {
      this.root = node;
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value.key < data.key) {
        if (currentNode.getLeftChild() == null) {
          currentNode.setLeftChild(new Node(data));
          return;
        }

        currentNode = currentNode.getLeftChild() as Node;
        continue;
      }
      if (currentNode.value.key > data.key) {
        if (currentNode.getRightChild() == null) {
          currentNode.setRightChild(new Node(data));
          return;
        }

        currentNode = currentNode.getRightChild() as Node;
        continue;
      }
      throw 'Node with same key found';
    }
  }

  get(key: number) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value.key === key) return currentNode.value;

      if (currentNode.value.key < key) {
        currentNode = currentNode.getLeftChild();
      } else {
        currentNode = currentNode.getRightChild();
      }
    }
    return null;
  }

  contains(key: number) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value.key === key) return true;

      if (currentNode.value.key < key) {
        currentNode = currentNode.getLeftChild();
      } else {
        currentNode = currentNode.getRightChild();
      }
    }
    return false;
  }
}

class Node {
  readonly value: NodeData;
  private left: Node | null;
  private right: Node | null;

  constructor(data: NodeData) {
    this.value = data;
  }

  setRightChild(node: Node) {
    this.right = node;
  }

  getRightChild() {
    return this.right;
  }

  setLeftChild(node: Node) {
    this.left = node;
  }

  getLeftChild() {
    return this.left;
  }
}

export { Node, BinaryTree };
