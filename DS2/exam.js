// class Hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             const same=bucket.find(item=>item[0]===key)
//             if(same){
//                 same[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         const index=this.hash(key)
        
//         const bucket=this.table[index]
//         if(bucket){
//             const same=bucket.find(item=>item[0]===key)
            
//             if(same){
//                 return same[1];
//             }
//         }return undefined
//     }

//     remove(key){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             const same=bucket.find(item=>item[0]===key)
//             if(same){
//                 bucket.splice(bucket.indexOf(same),1)
//             }
//         }
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//             console.log(i,this.table[i])
//         }}
//     }
// }

// const table=new Hashtable(50)
// table.set("name","lINCHU")
// table.set("life","fine")
// // table.display()
// console.log(table.get("name"))
// table.remove('name')
// table.display()



// class Que{
//     constructor(){
//         this.items=[]
//     }
//     enque(data){
//         this.items.push(data)
//     }
//     deque(){
//         if(this.isEmpty()){
//             return "underflow"

//         }
//             return this.items.shift()
        
//     }
//     isEmpty(){
//        return this.items.length===0
//     }
//     front(){
//         if(this.isEmpty()){
//             return "underflow"

//         }
//         return this.items[0]
//     }
//     print(){
//         let str=''
//         for(let i=0;i<this.items.length;i++){
//             str+=this.items[i]+" "
//         }return str
//     }
// }
// const queue=new Que()
// queue.enque(10)
// queue.enque(30)
// queue.deque()
// console.log(queue.print())
// console.log(queue.front());

// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(data){
//         this.items.push(data)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     print(){
//         let str=''
//         for(let i=0;i<this.items.length;i++){
//             str+=this.items[i]+" "
//         }return str
//     }
// }

// const stack=new Stack()
// stack.push(10)
// stack.push(39)
// console.log(stack.print())
// console.log(stack.peek())
// stack.pop()

// console.log(stack.print())


// function Quicksort(arr){
//     let piviot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     if(arr.length<2){
//         return arr
//     }
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<piviot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...Quicksort(left),piviot,...Quicksort(right)]
// }
// const arr=[2,3,5,9,0,1,6,8]
// console.log(Quicksort(arr))
// function QuickDec(arr){
//     let piviot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     if(arr.length<2){
//         return arr
//     }
    
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>piviot){
//             left.push(arr[i])
            
//         }else{
//             right.push(arr[i])
//         }
//     }return [...QuickDec(left),piviot,...QuickDec(right)]

// }

// console.log(QuickDec(arr))

// function Bubblesort(arr){
// let swapped
// do{
//     swapped=false
// for(let i=0;i<arr.length-1;i++){
    
//     if(arr[i]>arr[i+1]){

//        let temp=arr[i]
//        arr[i]=arr[i+1]
//        arr[i+1]=temp
//        swapped=true
//     }
    
// }}while(swapped)
//     return arr

// }
// console.log(Bubblesort(arr))

// function ins(arrr){
//     for(let i=1;i<arrr.length;i++){
//     let num=arrr[i]
//     let j=i-1
//     while(j>=0&&arrr[j]>num){
//         arrr[j+1]=arrr[j]
//         j--

//     } arrr[j+1]=num
// }


// }
// const arrr=[-3,4,5,35,0,1,8]
// ins(arrr)
// console.log(arrr)

// function sele(arr){
//   for(let i=0;i<arr.length;i++){
//     let min=i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[min]){
//             min=j
//         }

//     }[arr[i],arr[min]]=[arr[min],arr[i]]
//   }
//     return arr
// }
// const arr=[-1,3,-5,6,9,56,4]
// console.log(sele(arr))

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
// let mid=Math.floor(arr.length/2)
// let leftArr=arr.slice(0,mid)
// let rightArr=arr.slice(mid)
// return merge(mergeSort(leftArr),mergeSort(rightArr))


// }
// function merge(leftArr,rightArr){
// const sortArr=[]
// while(leftArr.length&&rightArr.length){
//     if(leftArr[0]<=rightArr[0]){
//         sortArr.push(leftArr.shift())
//     }else{
//         sortArr.push(rightArr.shift())
//     }
// }return [...sortArr,...leftArr,...rightArr]

// }

// console.log(mergeSort(arr))


// class hashtable{
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
//             let same=bucket.find(item=>item[0]===key)
//             if(same){
//                 same[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let same=bucket.find(item=>item[0]===key)
//             if(same){
//                 return same[1]
//             }
//         }return undefined
//     }

//     remove(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let same=bucket.find(item=>item[0]===key)
//             if(same){
//                 bucket.splice(bucket.indexOf(same),1)
//             }
//         }
//     }
//     print(){
        
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }
// const tablee=new hashtable(50)
// tablee.set("name","lin")
// tablee.set("age",50)
// tablee.print()





// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class que{
//     constructor(){
//         this.front=null
//         this.rear=null
//     }
// enque(data){
//     const node=new Node(data)
//     if(this.front===null){
//         this.front=this.rear=node
//         return
//     }
//     this.rear.next=node
//     this.rear=node
// }
// deque(){
//     if(this.front===null){
//         return "underflow"
//     }
//     let poped=this.front
//     this.front=this.front.next
//     if(this.front===null){
//         this.rear=null
//     }
//     return poped.data
// }
// peek(){
//     if(this.top===null){
//         return "underflow"
//     }

//     return this.front.data
// }
// isEm(){
//     return this.front===null
// }
// pr(){
//     let curr=this.front
//     let str=""
//     console.log(str)
//     while(curr){
//         str+=curr.data+" "
//         curr=curr.next
//     }
//     return str.trim()
// }

// }
// const sta=new que()
// sta.enque(10)
// sta.enque(15)
// sta.enque(30)
// console.log(sta.pr())
// console.log(sta.peek())
// console.log(sta.deque());
// console.log(sta.peek())

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
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             const same=bucket.find(item=>item[0]===key)
//             if(same){
//                 same[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             const same=bucket.find(item=>item[0]===key)
//             if(same){
//                 return same[1]
//             }
//         }return undefined
//     }
//     remove(key){
//         const index=this.hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             const same=bucket.find(item=>item[0]===key)
//             if(same){
//                 bucket.splice(bucket.indexOf(same),1)
//             }
//         }

//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }
// const table = new Hashtable(50)


// table.set("name","linchu")
// table.set("age",23)
// table.display()
// console.log(table.get("name"));
// table.set("mane","Meera")
// table.set("name","janaki")
// table.display()
// table.remove("name")
// table.display()
// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid=Math.floor(arr.length/2)
//     const leftarr=arr.slice(0,mid)
//     let rigtharr=arr.slice(mid)
//     return merge(mergeSort(leftarr),mergeSort(rigtharr))
// }
// function merge(leftarr,rigtharr){
//     const sortArr=[]
//     while(leftarr.length&&rigtharr.length){
//         if(leftarr[0]<=rigtharr[0]){
//             sortArr.push(leftarr.shift())
//         }else{
//             sortArr.push(rigtharr.shift())
//         }
//     }return [...sortArr,...leftarr,...rigtharr]
// }
// const arr=[8,-6,4,2,0,1,9]
// console.log(mergeSort(arr))


// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//             let min=i
//             for(let j=i+1;j<arr.length;j++){
//                 if(arr[j]<arr[min]){
//                     min=j
//                 }
//             }[arr[i],arr[min]]=[arr[min],arr[i]]
//     }
//     // console.log(arr)
//     return arr
// }
//  let arr = [64, 25, 12, 22, 11,4,5,78];
// // selection(arr)
//  console.log(selection(arr))

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let key=arr[i]
//     let j=i-1
//     while(j>=0&&arr[j]>key){
//         arr[j+1]=arr[j]
//         j--
//     }arr[j+1]=key
// }return arr
// }
// let arr = [64, 25, 12, 22, 11,4,5,78];
// console.log(insertionSort(arr))


// function Bubblesort(arr){
//    let swapped 
//    do{
//     swapped=false
   
   
   
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//     }}while(swapped)
//         return arr
// }
// const arr=[1,2,6,9,7,5,3,4]
// Bubblesort(arr)
// console.log(arr)