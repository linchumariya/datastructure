// heapify
function buildHeap(a){
    let n=a.length;
    for(let i=Math.floor(n/2)-1;i>=0;i++){
         heapify(a,n,i);
    }
}
function heapify(a,n,i){
    let largest=i;
    let left=2*i+1;
    let right=2*i+2;
    if(left<n && a[left]>a[largest]){
         largest=left;
    }
    if(right<n && a[right]>a[largest]){
         largest=right;
    }
    if(i!=largest){
         [a[i],a[largest]]=[a[largest],a[i]]
         heapify(a,n,largest)
    }
}

let arr=[3,5,1,2,7,8,9,10];
buildHeap(arr);
console.log("Max Heap ::"+arr);