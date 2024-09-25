console.log('Sort Of Integer:');
const arr=[12,1,4,5,0,10,9,6];
for(let i=0;i<arr.length;i++){
    let key=arr[i];
    let j;
for( j=i-1;j>=0 && arr[j] >key;j--){
     arr[j+1]=arr[j];
}
arr[j+1]=key;
}
console.log(arr);