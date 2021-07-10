// Simple graph with an adjadcency list
class Graph {
  private nodes: Map<number, number[]> = new Map();

  addNode(node: number) {
    if (this.nodes.has(node)) {
      return;
    }

    this.nodes.set(node, []);
  }

  addEdges(node: number, edges: number[]) {
    if (!this.nodes.has(node)) {
      return;
    }
    const nodeEdges = this.nodes.get(node) as number[];
    for (let edge of edges) {
      if (!this.nodes.has(edge)) continue;
      nodeEdges.push(edge);
      this.nodes.get(edge)?.push(node);
    }
  }

  getNodes() {
    return [...this.nodes.keys()];
  }

  getEdges(node: number) {
    if (!this.nodes.has(node)) {
      return null;
    }
    return this.nodes.get(node) as number[];
  }

  dfs(node: number): number[] | null {
    if (!this.nodes.has(node)) {
      return null;
    }

    const visitedNodes = new Set([node]);
    const nodesStack = this.getEdges(node) as number[];

    while (nodesStack.length > 0) {
      const currentNode = nodesStack.pop() as number;
      if (visitedNodes.has(currentNode)) {
        continue;
      }
      visitedNodes.add(currentNode);
      const edges = this.getEdges(currentNode) as number[];
      nodesStack.push(...edges);
    }
    return [...visitedNodes.keys()];
  }

  bfs(node: number): number[] | null {
    if (!this.nodes.has(node)) {
      return null;
    }

    const visitedNodes = new Set([node]);
    const nodesQueue = this.getEdges(node) as number[];

    while (nodesQueue.length > 0) {
      const currentNode = nodesQueue.shift() as number;
      if (visitedNodes.has(currentNode)) {
        continue;
      }
      visitedNodes.add(currentNode);
      const edges = this.getEdges(currentNode) as number[];
      nodesQueue.push(...edges);
    }
    return [...visitedNodes.keys()];
  }
}

export default Graph;
