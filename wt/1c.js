function dup(arr){
    let rarr=[];
    for(let i of arr){
        if(rarr.indexOf(i) === -1) {
            rarr.push(i);
        }
    }
    console.log(rarr);
}
const arr=[1,2,3,1,2];
dup(arr);