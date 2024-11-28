class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }

}

class LinkedList{
constructor(){
    this.head=null;
    this.size=0
}

isEmpty(){
    return this.size===0
}
getsize(){
    return this.size
}

prepend(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
        node.next=this.head
        this.head=node
    }
    this.size++
}

append(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
       let prev=this.head
        while(prev.next){
            prev=prev.next
        }
        prev.next=node

    }
    this.size++
}
insert(value,index){
    if(index<0||index>this.size){
        console.log("enter valid index")
    }
    if(index===0){
        this.prepend(value)
    }else{
        const node=new Node(value)
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        node.next=prev.next
        prev.next=node
        this.size++
    }
    
}

remove(index){
    let removenode
    if(index<0||index>this.size){
        return null
        
    }
    if(index===0){
        this.head=this.head.next

}else{
    let prev=this.head
    for(let i=0;i<index-1;i++){
        prev=prev.next
    }
    removenode=prev.next
    prev.next=removenode.next

}this.size--
return removenode.value

}

removeValue(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value===value){
        this.head=this.head.next
        this.size--
        return value
    }
    else{
        let prev=this.head
        while(prev.next&&prev.next.value!==value){
            prev=prev.next
        }if(prev.next){
            const removenode=prev.next
            prev.next=removenode.next
            this.size--
            return value
        }return null
    }
}

search(value){
    let index
    if(this.isEmpty()){
        return -1
    }else{
        let prev=this.head
        for(let i=0;i<this.size;i++){
            if(prev.value!==value){
                prev=prev.next
                index=i
            }
        }console.log(`${value} val is on index`,index+1)
    }

}




print(){
    if(this.isEmpty()){
        console.log("its empty")
    }else{
        let curr=this.head
        let listvalue=''
        while(curr){
            // console.log(`the list is ${curr.value}`)
            listvalue+=`${curr.value} `
            curr=curr.next
        }
        console.log("list is",listvalue)
    }

}

reverselinked(value){
    // const node=new Node(value)
    if(this.isEmpty()){
        return null
    }else{
        let prev=null
        let curr=this.head
        while(curr){
            let next=curr.next
            
        }
        

    }

}


}

const list=new LinkedList()
list.prepend(10)
list.prepend(20)
list.append(50)
console.log(list)
console.log(list.isEmpty())
console.log(list.getsize())
list.print()
list.search(10)
list.insert(80,1)
list.print()
list.removeValue(80)
list.print()
list.remove(2)
list.print()