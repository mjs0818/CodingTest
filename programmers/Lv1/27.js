function solution(n, m) {
    let answer = [];
    let gcd = 1, lcm = 1, min = Math.min(n,m);
    for(let i = 1; i <= min; i++){
        if(n % i === 0 && m % i === 0){
            gcd = i;
        }
    }
    lcm = (n * m) / gcd;
    answer = [gcd, lcm];
    return answer;
}