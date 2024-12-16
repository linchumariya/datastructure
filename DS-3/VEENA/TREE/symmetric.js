// Symmetric Tree
class Tree{
    constructor(value){
        this.data=value;
        this.left=null;
        this.right=null
    }
}
function areMirror(t1,t2){
   if(t1===null && t2===null) return true;
   if(t1===null || t2===null) return false;
   else{
      return t1.data === t2.data && areMirror(t1.left, t2.right) && areMirror(t1.right, t2.left);
   }
}

let tree=new Tree(1);
tree.left=new Tree(2);
tree.right=new Tree(3);
tree.left.left=new Tree(4);
tree.left.right=new Tree(5);
//Tree2
let tree1=new Tree(1);
tree1.left=new Tree(3);
tree1.right=new Tree(2);
tree1.right.left=new Tree(4);
tree1.right.left=new Tree(5)

console.log(areMirror(tree,tree1));