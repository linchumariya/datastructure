
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++

    }

    append(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = newNode
        }
        this.size++
    }

    insert(value,index){
        if(index<0 || index> this.size){
            console.log("Enter valid index");
        }
        if(index===0){
            this.prepend(value)
        }else{
            const newNode = new Node(value)
            let prevNode = this.head
            for(let i=0;i<index-1 ; i++){
                prevNode =prevNode.next
            }
            let nextNode =prevNode.next
            newNode.next=nextNode
            prevNode.next = newNode
            this.size++
        
        }
    }
    removeFrom(index){
        if(index<0 || index >= this.size){
            return null
        }
        // if(index === 0){
        //    let curr = this.head
        //     this.head = curr.next
        //     curr.next = null
        // }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }
        else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }
        else{
           let prev = this.head
           while(prev.next && prev.next.value !==value) {
            prev = prev.next
           }
           if(prev.next){
            const removeNode = prev.next
            prev.next = removeNode.next
            this.size--
            return value
           }
           return null
        }
    }

    search(value){
        let index ;
        if(this.isEmpty()){
            return -1;
        }
        else{
            let prev = this.head
            for(let i=0;i<this.size;i++){
                if(prev.value!==value){
                    prev = prev.next;
                    index = i;
                }
            }
            console.log("index is",index+1);
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty");
        }else{
            let curr = this.head
            let listValues =''
            while(curr){
                listValues  += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList()
// console.log("List is empty?",list.isEmpty());
// console.log("List size",list.getSize());
// list.print();
// console.log("After adding some nodes ");
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.print();
// list.append(60)
// list.print();
// list.insert(78,2)
list.insert(10,0)
list.insert(20,0)
list.insert(30,0)
list.insert(40,2)
list.insert(50,1)
list.print();
list.search(50)
// console.log(list.removeFrom(2));
// list.print()
// console.log(list.removeValue(20));
// list.print()
