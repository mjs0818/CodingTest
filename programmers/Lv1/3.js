function solution(s) {
    var regex = /^\d{6}$|^\d{4}$/; 
    return regex.test(s);
}
