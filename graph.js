// vertex - node
//edge -connection

// underected and derected
//weighted graph when you sign values to adges

// 2 ways adjacency list, matrix or hash table

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdges(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].splice(vertex2, 1);
    this.adjacencyList[vertex2].splice(vertex1, 1);
  }

  removeVertex(vertex) {
    delete this.adjacencyList[vertex];
    for (let key in this.adjacencyList) {
      if (this.adjacencyList[key].includes(vertex)) {
        this.adjacencyList[key].splice(vertex, 1);
      }
    }
  }

  traverseDepth(start) {
    let arr = [];
    let visited = {};

    const list = this.adjacencyList;

    (function helper(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      arr.push(vertex);

      console.log(visited);

      //   list[vertex].forEach((element) => {
      //     if (!visited[element]) {
      //       return helper(element);
      //     }
      //   });

      for (let i = 0; i < list[vertex].length; i++) {
        if (!visited[list[vertex][i]]) {
          return helper(list[vertex][i]);
        }
      }
    })(start);

    //mark visited vertex
    return arr;
  }

  traverseIterative(vertex) {}
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addVertex("Moscow");
graph.addVertex("Paris");
graph.addEdges("Dallas", "Aspen");
graph.addEdges("Moscow", "Paris");
console.log(graph.traverseDepth("Aspen"));
