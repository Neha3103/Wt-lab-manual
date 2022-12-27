function swap(arr,f_i,s_i){
    var temp=arr[f_i];
    arr[f_i]=arr[s_i];
    arr[s_i]=temp;
}
function bubble_sort(arr){
    var len=arr.length,i,j,stop;
    for(var i=0;i<len;i++){
        for(var j=0,stop=len-i;j<stop;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}
marr=[1,3,4,2,7,6,3];
var soarr=bubble_sort(marr);
console.log(soarr);