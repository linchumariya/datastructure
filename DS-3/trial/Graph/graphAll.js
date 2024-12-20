class Graph{
    constructor(){
       this.list = {};
    }
    addVertex(vertex){
          if(!this.list[vertex]){
              this.list[vertex] = new Set()
          }
    }
    addEdge(vertex1, vertex2){
         if(!this.list[vertex1]){
            this.addVertex(vertex1);
         }
         if(!this.list[vertex2]){
            this.addVertex(vertex2);
        }
        this.list[vertex1].add(vertex2);
        this.list[vertex2].add(vertex1);
    }
    display(){
        for(let vertex in this.list){
             console.log(`${vertex} --> ${[...this.list[vertex]]}`)
        }
    }
    bfs(startNode){
        let q =[];
        let visited = new Set()
        q.push(startNode);
        visited.add(startNode);
        while(q.length > 0){
             let node = q.shift();
             console.log(node);
             for(let vertex of this.list[node]){
                  if(!visited.has(vertex)){
                     visited.add(vertex);
                     q.push(vertex);
                }
            }
        }
    }
    dfs(startNode,visited=new Set()){
        visited.add(startNode);
        console.log(startNode);
        for(let node of this.list[startNode]){
              if(!visited.has(node)){
                 this.dfs(node, visited);
              }
        }
    }
}

const graph = new Graph();
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','C');
graph.addEdge('C','D');
console.log('Graph is....');
graph.display();
console.log("Bfs ::");
graph.bfs('A')
console.log("dfs ....");
graph.dfs('B');