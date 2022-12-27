const readline=require("readline");
const readLine=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let arr=[1,2,3,4,5];
readLine.question("Enter Search value: ",function(x){
    let f=false;
    let start=0, end=arr.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(arr[mid]==x){
            f=true;
            break;
        }
        else if(arr[mid]<x){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    console.log(f);
    readLine.close();
});