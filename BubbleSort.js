console.log('Sort Of Integer:');
const arr=[12,1,4,5,0,10,9,6];

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }

}

console.log('Sort Of New Array',arr);