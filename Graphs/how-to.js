// recreating an undirected, unweighted graph using the adjacent list

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjecentList = {};
  }

  addVertex(node) {
    // this will add the node as the key in the object and when you first add a node it will not be connected to anything
    this.adjecentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjecentList[node1].push(node2);
    this.adjecentList[node2].push(node1);
  }

  showConnections() {
    // code
  }
}
