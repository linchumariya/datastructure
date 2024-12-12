// function fibinocii(n){
//     const fib=[0,1]
//     for(let i=2;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }
// console.log(fibinocii(7))

// function factorial(n){
//     const fact=1;
//     for(let i=2;i<n;i++){
//         fact*=i
//     }
// }return fact
// console.log(factorial(5))

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getsize(){
//         return this.size
//     }
//     prepend(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.next=node

//         }
//         this.size++
//     }

//     append(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node

//         }this.size++
//     }
// }
// insert(value,index){
//     const node=new Node(value)
//     let prev=this.head
//     for(let i=0;i<index-1;i++){
//         prev=prev.next
//     }
//     // let nextt=prev.next
//     node.next=prev.next
//     prev.next=node


// }



// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }
// class Linklist{
//     constructor(value){
//         this.head=null;
//         this.size=0;
        
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getsize(){
//         return this.size
//     }
//     prepend(value){
// const newNode=new Node(value);
// if(this.isEmpty()){
//     this.head=newNode
// }else{
//     newNode.next=this.head
//     this.head=newNode

// }this.size++

//     }
// append(value){
//     const newNode=new Node;

//     if(this.isEmpty()){
//         this.head=newNode
//     }else{curr=this.head
//         while(curr.next){
//             curr=curr.next
//         }curr.next=newNode

//     } this.size++
   
// }
// insert(value,index){
//     if(index<0||index>this.size){
//         console.log("enter proper index");
        
//     }if(index===0){
//         this.prepend(value)
//     }else{
//         const newNode=new Node(value)
//         let prevNode=this.head
//         for(let i=0;i<index-1;i++){
//             prevNode=prevNode.next
//         }
//         let nextNode=prevNode.next
//         prevNode.next=newNode
//         newNode.next=newNode
//         this.size++


//     }
// }

// removeFrom(index){
//     if(index<0||index>this.size){
//         return null
//     }
//     let removeNode
//     if(index===0){
//         let curr =this.head;;
//         this.head = curr.next;
        
//     }else{
//         let prev=this.head
//         for(let i=0;i<index-1;i++){
//             prev=prev.next
//         }
//         removeNode=prev.next
//         prev.next=removeNode.next


//     }

// }



// }


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
   
}
class Linklist{
    constructor(){
        this.head=null
        this.size=0

    }
    isEm(){
        this.size===0
    }
    getsize(){
        return this.size
    }

    prepend(value){
        const node=new Node(value)
        if(this.isEm()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node=new Node(value)
        if(this.isEm()){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next!=null){
                curr=curr.next
                
            }
            curr.next=node
        }
        this.size++
    }
    insertAt(value,index){
        if(index===0){
            this.prepend(value)
        }else if(index=this.getsize()-1){
            this.append(value)
        }
        else{
            const node=new Node(value)
            let curr=this.head
            for(let i=1;i<index-1;i++){
                curr=curr.next
            }
            node.next=curr.next
            curr.next=node
        }this.size++


    }
    insertBefore(target,value){
        const node=new Node(value)
        let curr=this.head
        let prev
        if(this.head.value===target){
            this.prepend(value)
        }else{
            while(curr.next!==target){
                prev=curr
                curr=curr.next
            }
            node.next=curr
            prev.next=node
        }
        this.size++

    }
insertAfter(target,value){
    let node=new Node(value)
    let curr=this.head
    while(curr.value!==target){
        curr=curr.next
    }
    node.next=curr.next
    curr.next=node
    this.size++
}


reverse(){
    let prev=null
    let curr=this.head
    while(curr){
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    this.head=prev
}

midvalue(){
    let mid=Math.floor((this.getsize())/2)
    let curr=this.head  
    for(let i=0;i<mid;i++){
        curr=curr.next
    }
    console.log(curr.value)

}

}