function buildMaxHeap(arr){
     let n= arr.length;
     for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i);
    }
    
}
function heapify(arr,n,i){
     let left= 2*i+1;
     let right = 2*i+2;
     let largest = i;
     if(left<n && arr[left]>arr[largest]){
           largest=left;
     }
     if(right<n && arr[right]>arr[largest]){
            largest = right;
     }
     if(largest!=i){
        [ arr[i],arr[largest]] = [ arr[largest], arr[i]] ;
        heapify(arr,n,largest);
     }
}

let arr = [ 45, 67, 89,12, 10,3, 4,11,34];
buildMaxHeap(arr);
console.log("Result = ",arr);