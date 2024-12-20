// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null

//     }
   
// }
// class BinarySearch{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.root=node
//         }else{
//             this.insertnode(this.root,node)
//         }
//     }
//     insertnode(root,node){
//         if(node.value<root.value){
//             if(root.left===null){
//                 root.left=node
//             }else{
//                 this.insertnode(root.left,node)
//             }}else{
//                 if(root.right===null){
//                     root.rigth=node
//                 }else{
//                     this.insertnode(this.right,node)
//                 }
//             }
//         }

//         search(root,value){
//             if(root==null){
//                 return false
//             }else {if(root.value===value){
//                 return true
//             }else if(value<root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }

//     }
//     preOrder(root)
// {
// if(root){
//     console.log(root.value)
//     this.preOrder(root.left)
//     this.preOrder(root.right)
// }
// }

// inorder(root){
//     if(root){
//         this.inorder(root.left)
//         console.log(root.value)
//         this.inorder(root.right)
//     }
// }
// postorder(root){
//     if(root){
//         root.postorder(root.left)
//         root.postorder(root.right)
//         console.log(root.value)
//     }
// }
// levelorder(){
//     const queue=[]
//     queue.push(this.root)
//     while(queue.lenght){
//         let curr=queue.shift()
//         console.log(curr.value)
//         if(curr.left){
//             queue.push(curr.left)
//         }if(curr.right){
//             queue.push(curr.right)
//         }
//     }
// }
// min(root)
// {
//     if(!root.left){
//         return root.value
//     }else{
//         return this.min(root.left)
//     }
// }
// max(root){
//     if(!root.right){
//         return root.value
//     }else{
//         return this.max(root.right)
//     }
// }
// delete(value){
//     this.root=this.deletenode(this.root,value)
// }
// deletenode(root,value){
//     if(root===null){
//         return root
//     }
//     if(value<root.value){
//         root.left=this.deletenode(root.left,value)
//     }else if(value>root.value){
//         root.value=this.deletenode(root.right,value)
//     }else{
//         if(!root.left && !root.right){
//             return null
//         }if(!root.left){
//             return root.right
//         }else if(!root.right){
//             return root.left
//         }
//         root.value=this.min(root.right)
//         root.right=this.deletenode(root.right,value)
//     }
//     return root
// }
// dfsiteration(){
//     const stack=[]
//     if(this.root===null) return this.root
//     stack.push(this.root)
//     while(stack.length>0){
//         const curr=stack.pop()
//         console.log(curr.value)
//         if(curr.right!==null){
//             MediaStreamTrack.push(curr.right)
//         }if(curr.left!==null){
//             stack.push(curr.left)
//         }
//     }
    
// }
// findclose(target){
//     return this.findd(this.root,target,this.root.value)
// }
// findd(root,target,closest){
//     if(root===null) return closest
//     if(Math.abs(target-closest)>Math.abs(target-root.value)){
//         closest=root.value
//     }
//     if(target<root.value){
//         return this.findd(root.left.target,closest)
//     }else if(target>root.value){
//         return this.findd(root.right,target,closest)
//     }else return closest
// }

// }


// class Graph{
//     constructor(){
//         this.adjacencyList={};
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex]=new Set();
//         }
//     }
//     addEdge(vertex1, vertex2){
//         if(!this.adjacencyList[vertex1]){
//              this.addVertex(vertex1);
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2);
//         }
//         this.adjacencyList[vertex1].add(vertex2);
//         this.adjacencyList[vertex2].add(vertex1);
//     }
//     hasEdge(vertex1,vertex2){
//          return(
//              this.adjacencyList[vertex1].has(vertex2) &&
//              this.adjacencyList[vertex2].has(vertex1)
//          )
//     }
//     removeEdge(vertex1,vertex2){
//          this.adjacencyList[vertex1].delete(vertex2);
//          this.adjacencyList[vertex2].delete(vertex1);
//     }

//     display(){
//         for(let vertex in this.adjacencyList){
//              console.log(vertex +"--> " + [...this.adjacencyList[vertex]]);
//         }
//     }
//     removeVertex(vertex){
//          if(!this.adjacencyList[vertex]){
//             return;
//          }
//          for(let adjVertex of this.adjacencyList[vertex]){
//               this.removeEdge(vertex,adjVertex);
//          }
//          delete this.adjacencyList[vertex];
//     }

// bfs(start){
//     const que=[start]
//     const visited=new Set()
//     visited.add(start)
// while(que.length>0){
//     const node=que.shift()
//     console.log(node)
//     for(let neigh of this.adjacencyList[node]){
//         if(!visited.has(neigh)){
//             visited.add(neigh)
//             que.push(neigh)
//         }
//     }
// }
// }
// dfs(start){
//     const stack=[start]
//     const visited=new Set()
//     visited.add(start)
//     while(stack.length>0){
//         const vertex=stack.pop()
//         console.log(vertex)
//         for(let neigh of this.adjacencyList[vertex]){
//             if(!visited.has(neigh)){
//                 visited.add(neigh)
//                 stack.push(neigh)
//             }
//         }


//     }
// }

// }

// let graph=new Graph();
// graph.addVertex("A");
// graph.addEdge('A','C');
// graph.addEdge('B','C');
// graph.addEdge('A','B');
// graph.addEdge('B','D');
// graph.addEdge('C','D');
// graph.display();
// console.log(graph.hasEdge('A','B'));
// graph.removeEdge('A','B');
// graph.display();
// graph.removeVertex('A');
// console.log("After REmoval of A");
// graph.display();
// // graph.bfs('B')
// graph.dfs('C')



function heapsort(arr){
    let n=arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }for(let i=n-1;i>=0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}
function heapify(arr,n,i){
    let largest=i
    let left=2*i+1
    let right=2*i+2
    if(left<n && arr[left]<arr[largest]){
        largest=left
    }
    if(right<n && arr[right]<arr[largest]){
        largest=right
    }
    if(largest!==i){
        [arr[largest],arr[i]]=[arr[i],arr[largest]]
        heapify(arr,n,largest)
    }
}
const arr=[12,3,4,61,71,1,2]
console.log(heapsort(arr))

function  insert(a,item){
    a.push(item);
    let i=a.length-1;
    while(i>0){
    let parent=Math.floor((i-1)/2);
    if(a[i]>a[parent]){
             [a[i],a[parent]]=[a[parent],a[i]];
             i=parent;
     }else{
         break;
     }
   }
 }
 
 let heap=[50,30,20,15,10,8,16];
 insert(heap,31);
 console.log("Heap ::"+heap);

 class Graphh{
    constructor(){
        this.list={}
    }
    addv(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Set
        }
    }
    adde(vertex1,vertex2){
        if(!this.list[vertex1]){
            this.addv(vertex1)
        }
        if(!this.list[vertex2]){
            this.addv(vertex2)
        }
        this.list[vertex1].add(vertex2)
        this.list[vertex2].add(vertex1)
    }

    hased(vertex1,vertex2){
       return(
        this.list[vertex1].has(vertex2) &&
        this.list[vertex2].has(vertex1)
       ) 
    }
    remE(vertex1,verttex2){
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }
    display(){
        for(let vertex in this.list){
            console.log(vertex+" "+[...this.list[vertex]])
        }
    }
    removeV(vertex){
        if(!this.list[verttex]){
            return 
        }
        for(let ver in this.list[vertex]){
            this.removeV(vertex,ver)
        }
        delete this.list[vertex]
    }
 }