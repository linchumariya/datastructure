// function insertion(arr){
// for(let i=0;i<arr.length;i++){
//     let numberToinsert=arr[i]
//     let j=i-1
//     while(j>=0&&arr[j]>numberToinsert){
//         arr[j+1]=arr[j]
//         j=j-1

//     }arr[j+1]=numberToinsert
// }


// }
// const arr=[-3,4,5,35,0,1,8]
// insertion(arr)
// console.log(arr)
function insertionn(arr){
    for(let i=1;i<arr.length;i++){
        let curr=arr[i]
        let prev=i-1
        while(prev>=0&&arr[prev]>curr){
            arr[prev+1]=arr[prev]
            prev--
        }
        arr[prev+1]=curr
    }

}
 const arr=[-3,4,5,35,0,1,8]
 insertionn(arr)
console.log(arr)