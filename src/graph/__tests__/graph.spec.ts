import Graph from '../graph';

let graph: Graph;
beforeEach(() => (graph = new Graph()));

it('creates a graph', () => {
  expect(graph).not.toBeNull();
});

it('adds a node to the graph', () => {
  graph.addNode(0);
  expect(graph.getNodes()).toEqual([0]);
});

it('adds a vertex between two nodes of the graph', () => {
  graph.addNode(0);
  graph.addNode(1);
  graph.addEdges(0, [1]);
  expect(graph.getNodes()).toEqual([0, 1]);
  expect(graph.getEdges(0)).toEqual([1]);
  expect(graph.getEdges(1)).toEqual([0]);
});

it('does not add a vertex if one of dest nodes does not exist', () => {
  graph.addNode(0);
  graph.addEdges(0, [1]);
  expect(graph.getEdges(0)).toEqual([]);
});

it('does not any a vertex if the source does not exist', () => {
  graph.addNode(1);
  graph.addNode(2);
  graph.addEdges(0, [1, 2]);
  expect(graph.getNodes()).toEqual([1, 2]);
  expect(graph.getEdges(1)).toEqual([]);
  expect(graph.getEdges(2)).toEqual([]);
});

it('traverses the tree in dfs', () => {
  graph.addNode(0);
  graph.addNode(1);
  graph.addNode(2);
  graph.addNode(3);
  graph.addEdges(0, [3, 2, 1]);
  graph.addEdges(1, [3]);
  expect(graph.dfs(0)).toEqual([0, 1, 3, 2]);
});

it('traverses the tree in bfs', () => {
  graph.addNode(0);
  graph.addNode(1);
  graph.addNode(2);
  graph.addNode(3);
  graph.addEdges(0, [1, 2]);
  graph.addEdges(1, [3]);
  expect(graph.bfs(0)).toEqual([0, 1, 2, 3]);
});
