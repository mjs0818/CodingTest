function solution(n) {
    return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? Math.pow(n+1,2) : -1;
}