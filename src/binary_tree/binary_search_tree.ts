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
      if (currentNode.getValue().key > data.key) {
        if (currentNode.getLeftChild() == null) {
          currentNode.setLeftChild(new Node(data));
          return;
        }

        currentNode = currentNode.getLeftChild() as Node;
        continue;
      }
      if (currentNode.getValue().key < data.key) {
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
      if (currentNode.getValue().key === key) return currentNode.getValue();

      if (currentNode.getValue().key > key) {
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
      if (currentNode.getValue().key === key) return true;

      if (currentNode.getValue().key > key) {
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
    let elements = [node.getValue().data];
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

    elements.push(node.getValue().data);

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

    elements.push(node.getValue().data);
    return elements;
  }

  delete(key: number) {
    this.root = this.deleteRec(key, this.root);
  }

  private deleteRec(key: number, node: Node | null): Node | null {
    if (node == null) return node;
    if (node?.getValue().key < key) {
      node.setLeftChild(this.deleteRec(key, node.getLeftChild()));
    } else if (node?.getValue().key > key) {
      node.setRightChild(this.deleteRec(key, node.getRightChild()));
    } else {
      if (node.getRightChild() && node.getLeftChild()) {
        // Node with 2 children
        // Replace node with maximum element of left subtree and trigger delete on the left subtree
        node.setValue(this.findMax(node.getLeftChild() as Node).getValue());
        // Delete the node that has replaced the deleted one
        node.setLeftChild(
          this.deleteRec(node.getValue().key, node.getLeftChild())
        );
      } else {
        // Node with 1 or 0 children
        node = node.getLeftChild() || node.getRightChild();
      }
    }
    return node;
  }

  private findMax(node: Node): Node {
    let currentNode = node;
    while (currentNode && currentNode.getRightChild()) {
      currentNode = currentNode.getRightChild() as Node;
    }
    return currentNode;
  }
}

class Node {
  private value: NodeData;
  private left: Node | null;
  private right: Node | null;

  constructor(data: NodeData) {
    this.value = data;
    this.left = null;
    this.right = null;
  }

  setRightChild(node: Node | null) {
    this.right = node;
  }

  getRightChild() {
    return this.right;
  }

  setLeftChild(node: Node | null) {
    this.left = node;
  }

  getLeftChild() {
    return this.left;
  }

  setValue(value: NodeData) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

export { Node, BinaryTree };
