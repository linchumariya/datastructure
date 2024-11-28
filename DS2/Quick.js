function quick(arr){
    if(arr.length<2){
        return arr
    }
    let piviot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<piviot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...quick(left),piviot,...quick(right)]
}
const arr=[0,20,-2,4,-6]
console.log(quick(arr))