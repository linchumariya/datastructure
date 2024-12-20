class Tree{
    constructor(value){
        this.data=value;
        this.left=null;
        this.right=null;
    }
}
function bfs(node){
    let queue=[];
    queue.push(node);
    while(queue.length>0){
        node=queue.shift();
        console.log(node.data);
        if(node.right!==null)queue.push(node.left);
        if(node.left!==null)queue.push(node.right);
   }
}
let tree=new Tree(20);
tree.left=new Tree(1);
tree.right=new Tree(5);
tree.left.left=new Tree(4);
tree.left.right=new Tree(10);
tree.right.left=new Tree(8);
tree.right.right=new Tree(15);
console.log(bfs(tree));