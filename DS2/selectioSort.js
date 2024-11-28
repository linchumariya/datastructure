// function selectionSort(arr){
//     for (let i=0;i<arr.length-1;i++){
//         let minIndex = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex = j;
//             }
//         }
//         [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
//     }
//     console.log(arr);
// }

// let arr = [64, 25, 12, 22, 11];
// selectionSort(arr)


// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//         let min =i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         [arr[i],arr[min]] = [arr[min],arr[i]]
//     }
//     console.log(arr);
// }


// let arr = [64, 25, 12, 22, 11,4,5,78];
// console.log(arr)
// // selection(arr)
// function selectionn(arr){
//     for(let i=0;i<arr.length;i++){
//         let min=i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//             }
//         }[arr[i],arr[min]]=[arr[min],arr[i]]
//     }
//     console.log(arr)
// }
// selectionn(arr)
// console.log(selectionn(arr))

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j].quantity<arr[min].quantity){
                min = j;
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    console.log(arr);
}

// let arr = ['mango','apple','grapes','plum','banana']

let arr=[{name:"mango",quantity:1},{name:"apple",quantity:4},{name:"kiwi",quantity:2}]
selectionSort(arr);