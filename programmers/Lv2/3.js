function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let totalWeight = 0;
    let bridge = Array.from({length : bridge_length}, ()=> 0);
    debugger;
    while(true){
        if(totalWeight + truck_weights[0] <= weight){
            totalWeight += truck_weights[0];
            bridge.push(truck_weights.shift());
            if(bridge[0] !== 0){
                totalWeight -= bridge[0];
            }
            bridge.shift();
            answer++;
        }else{
        if(bridge[0] !== 0){
            totalWeight -= bridge[0];
            bridge.shift();
            if(totalWeight + truck_weights[0] <= weight){
                totalWeight += truck_weights[0];
                bridge.push(truck_weights.shift());
            }else{
                bridge.push(0);
            }
            answer++;
        }else{
            bridge.push(bridge.shift());
            answer++;
        }
        }

        if(bridge.every(el=>el===0) && truck_weights.length === 0){
            break;
        }

    }
    return answer;
}

console.log(solution(2, 10,[7,4,5,6]));
