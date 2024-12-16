class Graph{
    constructor(){
        this.adjacencyMatrix = {};
    }
    addVertex(vertex){
        if(!this.adjacencyMatrix[vertex]){
            this.adjacencyMatrix[vertex] = new Set();
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyMatrix[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacencyMatrix[vertex2]){
             this.addVertex(vertex2);
        }
        this.adjacencyMatrix[vertex1].add(vertex2);
        this.adjacencyMatrix[vertex2].add(vertex1);
    }
    dfs(startNode, visited = new Set()){
         visited.add(startNode);
         console.log(startNode);
         for(let neighbor of this.adjacencyMatrix[startNode]){
            if(!visited.has(neighbor)){
                 this.dfs(neighbor, visited);
            }
        }
    }
    display(){
        for(let vertex in this.adjacencyMatrix){
             console.log(`${vertex} --> ${[...this.adjacencyMatrix[vertex]]}`);
        }
    }
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','D');
graph.addEdge('A','D');
graph.display();
graph.dfs('A');