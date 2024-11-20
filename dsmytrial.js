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

class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class Linklist{
    constructor(value){
        this.head=null;
        this.size=0;
        
    }
    isEmpty(){
        return this.size===0
    }
    getsize(){
        return this.size
    }
    prepend(value){
const newNode=new Node(value);
if(this.isEmpty()){
    this.head=newNode
}else{
    newNode.next=this.head
    this.head=newNode

}this.size++

    }
append(value){
    const newNode=new Node;

    if(this.isEmpty()){
        this.head=newNode
    }else{curr=this.head
        while(curr.next){
            curr=curr.next
        }curr.next=newNode

    } this.size++
   
}
insert(value,index){
    if(index<0||index>this.size){
        console.log("enter proper index");
        
    }if(index===0){
        this.prepend(value)
    }else{
        const newNode=new Node(value)
        let prevNode=this.head
        for(let i=0;i<index-1;i++){
            prevNode=prevNode.next
        }
        let nextNode=prevNode.next
        prevNode.next=newNode
        newNode.next=newNode
        this.size++


    }
}

removeFrom(index){
    if(index<0||index>this.size){
        return null
    }
    let removeNode
    if(index===0){
        let curr =this.head;;
        this.head = curr.next;
        
    }else{
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        removeNode=prev.next
        prev.next=removeNode.next


    }

}



}