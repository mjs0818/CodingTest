function solution(arr, divisor) {
    return arr.filter(el =>{
        return el%divisor === 0;
    });
}
console.log(solution([1,5,7,10],5));