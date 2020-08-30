function solution(phone_number) {
    let length = phone_number.length;
    let substring = phone_number.slice(length-4, length);
    
    return '*'.repeat(length-4) + substring;
}