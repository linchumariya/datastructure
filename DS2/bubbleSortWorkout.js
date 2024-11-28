//Question 1: Bubble sort - Sorting elements in ascending array

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<(arr.length-i)-1;j++){
//             if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1]=temp
//         }
//         }
//     }
//     console.log(arr);
// }
// let arr = [43, 56, 23, 87, 12, 9, 3, 7]
// bubbleSort(arr)


//Question 2: Bubble sort using while loop

// function bubbleSort(arr){
//     let i=0;
//     while(i<arr.length){
//         let j=0;
//         while(j<(arr.length-i)-1){
//             if(arr[j]<arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] =arr[j+1]
//                 arr[j+1] = temp
//             }
//             j++;
//         }
//         i++
//     }
//     console.log(arr);
// }


// let arr = [43, 56, 23, 87, 12, 9, 3, 7];
// bubbleSort(arr)


//Question 3:  BubbleSort in descending order

function bubble(arr){
    for(i=0;i<arr.length;i++){
        for(j=0;j<(arr.length-i)-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    console.log(arr);
}

let array = [17, 5, 21, 8, 13, 3, 11, 2];
bubble(array)
