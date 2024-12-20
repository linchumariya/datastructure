//Descending Order Sort
function heapify(arr, n, i) {
    let smallest = i;          
    let left = 2 * i + 1;     
    let right = 2 * i + 2;   
    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }
    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }
    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]]; 
        heapify(arr, n, smallest);
    }
}

function heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}
let arr = [34, 12, 3, 10, 16, 17, 6, 5, 65];
heapSort(arr);
console.log("Sorted array:", arr);
