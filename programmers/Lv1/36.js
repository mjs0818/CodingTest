function solution(numbers, hand) {
    let answer = '';
    let leftHand = 10, rightHand = 12, leftDistance, rightDistance;
    numbers.forEach(el =>{
        if(el % 3 === 1){
            leftHand = el;
            answer += 'L';
        }else if(el % 3 === 0 && el !== 0){
            rightHand = el;
            answer += 'R';
        }else{
            if(el === 0){
                el = 11;
            }

            leftDistance = Math.abs((leftHand - el) % 3) + Math.abs(parseInt((leftHand - el)/3));
            rightDistance =  Math.abs((rightHand - el) % 3) + Math.abs(parseInt((rightHand - el)/3));
            if(rightDistance > leftDistance){
                answer += 'L';
                leftHand = el;
            }else if(rightHand < leftDistance){
                answer += 'R';
                rightHand = el;
            }else{
                hand === 'right' ? answer += 'R' : answer += 'L';
            }
        }
    })
    return answer;
}