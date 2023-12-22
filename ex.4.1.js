let N, arr=[],  MainArr = [];
do{
   N=Number(prompt("Введите нечетное число элементов массива:", 0))
}while (N % 2 == 0)

for (let i=0; i< N; i++){   
    arr[i] = Math.floor(Math.random() * 10);
}
alert(arr);
while (N >= 1) {
    MainArr.push(arr[N-1]);
    N = N - 2;
}
alert(MainArr)