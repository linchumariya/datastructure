// Dfs
class Graph {
    constructor() {
        this.list = {};
    }
    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = new Set();
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.list[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.list[vertex2]) {
            this.addVertex(vertex2);
        }
        this.list[vertex1].add(vertex2);
        this.list[vertex2].add(vertex1);
    }
    display() {
        for (let vertex in this.list) {
            console.log(vertex + " --> " + [...this.list[vertex]]);
        }
    }
    dfs(startNode, visited = new Set()) {
        visited.add(startNode);
        console.log(startNode);

        for (let neighbor of this.list[startNode]) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited);
            }
        }
    }
}
let graph = new Graph();
graph.addVertex('A');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('C', 'D');
graph.addEdge('B', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.display();
graph.dfs('A');