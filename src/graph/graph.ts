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
}

export default Graph;
