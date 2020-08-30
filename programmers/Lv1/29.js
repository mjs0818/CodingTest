function solution(arr) {
    let length = arr.length;
    let sum = arr.reduce((acc, cur)=>{
        return acc + cur;
    });
    return sum/length;
}