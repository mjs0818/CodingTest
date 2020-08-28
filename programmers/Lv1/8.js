function solution(arr, divisor) {
    arr = arr.filter(el =>{
        return el%divisor === 0;
    }).sort((a,b)=>{
        return a-b;
    });

    return arr.length === 0 ? [-1] : arr;
}
