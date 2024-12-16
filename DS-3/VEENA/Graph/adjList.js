//Graph Adjacency List of undirected graph
class Graph{
    constructor(){
        this.adjacencyList={};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set();
        }
    }
    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
             this.addVertex(vertex1);
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    hasEdge(vertex1,vertex2){
         return(
             this.adjacencyList[vertex1].has(vertex2) &&
             this.adjacencyList[vertex2].has(vertex1)
         )
    }
    removeEdge(vertex1,vertex2){
         this.adjacencyList[vertex1].delete(vertex2);
         this.adjacencyList[vertex2].delete(vertex1);
    }

    display(){
        for(let vertex in this.adjacencyList){
             console.log(vertex +"--> " + [...this.adjacencyList[vertex]]);
        }
    }
    removeVertex(vertex){
         if(!this.adjacencyList[vertex]){
            return;
         }
         for(let adjVertex of this.adjacencyList[vertex]){
              this.removeEdge(vertex,adjVertex);
         }
         delete this.adjacencyList[vertex];
    }
}

let graph=new Graph();
graph.addVertex("A");
graph.addEdge('A','C');
graph.addEdge('B','C');
graph.addEdge('A','B');
graph.addEdge('B','D');
graph.addEdge('C','D');
graph.display();
console.log(graph.hasEdge('A','B'));
graph.removeEdge('A','B');
graph.display();
graph.removeVertex('A');
console.log("After REmoval of A");
graph.display();
