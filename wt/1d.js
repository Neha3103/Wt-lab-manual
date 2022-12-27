//we need to sort function
function binary(arr,x){
    let start=0,end=arr.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(arr[mid]==x)
            return true;
        else if(arr[mid]>x)
            end=mid-1;
        else
            start=mid+1;
    }
    return false;
}
let a=[1,2,3,5,6,7];
let x=5;
console.log(binary(a,x));