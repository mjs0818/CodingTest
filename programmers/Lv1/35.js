function solution(board, moves) {
    var answer = 0;
    let bucket = [];
    moves.forEach(el=>{
        for(let i = 0; i < board.length; i++){
            if(board[i][el-1] !== 0){
                if(bucket.length !== 0 && bucket[bucket.length - 1] === board[i][el-1]){
                    bucket.pop();
                    board[i][el-1] = 0;
                    answer += 2;
                }else{
                    bucket.push(board[i][el-1]);
                    board[i][el-1] = 0;
                }
                break;
            }
        }
    })
    return answer;
}