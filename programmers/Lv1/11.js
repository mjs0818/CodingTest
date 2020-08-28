function solution(a, b) {
  // 2016년 1월 1일 금요일 기준
  let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  dayOfMonth = [31,29,31,30,31,30,31,31,30,31,30,31],
  totalDays = 0;
  
  for(let i = 0; i < a - 1; i++){
    totalDays = dayOfMonth[i];
  }
  totalDays += b - 1;

  return day[(5 + totalDays) % 7];
}
