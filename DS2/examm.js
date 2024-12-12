// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let min=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//             }
//         }[arr[i],arr[min]]=[arr[min],arr[i]]
//     }
//     return arr
// }

// let arr=[-2,4,6,1,-3,8]
// console.log(selectionSort(arr))


// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid=(arr.length/2)
//     let leftArr=arr.slice(0,mid)
//     let rightArr=arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }
// function merge(leftArr,rightArr){
//     let sortArr=[]

//     while(leftArr.length&&rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sortArr.push(leftArr.shift())
//         }
//         sortArr.push(rightArr.shift())
//     }
// return [...sortArr,...leftArr,...rightArr]

// }
// let arr=[-2,4,6,1,-3,8]
// console.log(mergeSort(arr))

// 

// class Hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }return total%this.size
//     }
//     set(key,value){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let sameindex=bucket.find(item=>item[0]===key)
//             if(sameindex){
//                 sameindex[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let sameindex=bucket.find(item=>item[0]===key)
//             if(sameindex){
//                 return sameindex[1]
//             }
//             return undefined
//         }
//     }


// }

class Node {
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Function to perform preorder traversal
function preorderTraversal(node)
{
    // Base case
    if (node === null)
        return;

    // Visit the current node
    console.log(node.data + " ");

    // Recur on the left subtree
    preorderTraversal(node.left);

    // Recur on the right subtree
    preorderTraversal(node.right);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
preorderTraversal(root);