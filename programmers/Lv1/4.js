function solution(s) {
    let arr = s.split('');
    let answer = arr.sort((a,b)=>{
        return b.charCodeAt() - a.charCodeAt();
    });
    answer = answer.join('');
    return answer;
}

console.log(solution('aHFSAJyfwabhjwgeHUGDHKafiJFS'));

