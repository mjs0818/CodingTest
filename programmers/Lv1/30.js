function solution(x) {
    let sum = String(x).split('').reduce((acc,cur)=>{
        return Number(acc) + Number(cur);
    })
    return x%sum === 0 ? true : false;
}