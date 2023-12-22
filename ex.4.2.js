let N, arr=[];
do{
   N=Number(prompt("Введите четное число элементов массива:", 0))
}while (N % 2 != 0)

for (let i=0; i< N; i++){   
    arr[i] = Math.floor(Math.random() * 10);
}
alert(arr)
for (let i=0; i < N; i = i+2){
    let temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp
}
alert(arr);