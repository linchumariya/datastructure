bfs(node){
    let queue=[];
    let visited=new Set();
    queue.push(node);
    while(queue.length>0){
        console.log(node);
        if(!visited.has(node)){
            visited.add(node);
            queue.push(node);
            node=queue.shift();  
           
        }
    }
}