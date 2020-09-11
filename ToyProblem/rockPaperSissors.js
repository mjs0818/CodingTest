const rockPaperScissors = function(count){
    let result = [];
    let n = count || 3;
    let rockPaperScissors = ['rock', 'paper', 'scissors'];
    let array = [];
    debugger;
    function recursion(arr, n, result){
        if(arr.length === n){
            result.push(arr.slice());
            return result;
        }

        for(let i = 0; i < 3; i++){
            arr.push(rockPaperScissors[i])
            result = recursion(arr, n, result);
            arr.pop();
        }
        return result;
    }

    result = recursion(array, n, result);
    return result;
}
console.log(rockPaperScissors(10));