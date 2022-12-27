var arr1=[3,2,'a','a',8,'f',5];
var mf=1;
var m=0;
var item;
for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr1.length;j++){
        if(arr1[i]==arr1[j]){
            m++;
        }
        if(m>mf){
            mf=m;
            item=arr1[i];
        }
    }
    m=0;
}
console.log(item+" "+mf);
