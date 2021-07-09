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
      if (currentNode.value.key > data.key) {
        if (currentNode.getLeftChild() == null) {
          currentNode.setLeftChild(new Node(data));
          return;
        }

        currentNode = currentNode.getLeftChild() as Node;
        continue;
      }
      if (currentNode.value.key < data.key) {
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

      if (currentNode.value.key > key) {
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

  preOrder() {
    if (!this.root) return null;
    return this.preOrderRec(this.root);
  }

  private preOrderRec(node: Node): Array<unknown> {
    // 1st Node, 2nd Left, 3rd Right
    let elements = [node.value.data];
    if (node.getLeftChild()) {
      elements.push(...this.preOrderRec(node.getLeftChild() as Node));
    }
    if (node.getRightChild()) {
      elements.push(...this.preOrderRec(node.getRightChild() as Node));
    }
    return elements;
  }

  inOrder() {
    if (!this.root) return null;
    return this.inOrderRec(this.root);
  }

  private inOrderRec(node: Node): Array<unknown> {
    // 1st Left, 2nd Node, 3rd Right
    let elements = [];
    if (node.getLeftChild()) {
      elements.push(...this.preOrderRec(node.getLeftChild() as Node));
    }

    elements.push(node.value.data);

    if (node.getRightChild()) {
      elements.push(...this.preOrderRec(node.getRightChild() as Node));
    }
    return elements;
  }

  postOrder() {
    if (!this.root) return null;
    return this.postOrderRec(this.root);
  }

  private postOrderRec(node: Node): Array<unknown> {
    // 1st Left, 2nd Right, 3rd Node
    let elements = [];
    if (node.getLeftChild()) {
      elements.push(...this.preOrderRec(node.getLeftChild() as Node));
    }

    if (node.getRightChild()) {
      elements.push(...this.preOrderRec(node.getRightChild() as Node));
    }

    elements.push(node.value.data);
    return elements;
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
