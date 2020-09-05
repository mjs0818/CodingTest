function solution(n, arr1, arr2) {
    let answer = [];
    let map1 = arr1.map(el => {
        let binary = '';
        for (let i = 0; i < n; i++) {
            if (el === 0) {
                binary = 0 + binary;
                continue;
            }
            binary = el % 2 + binary;
            el = Math.floor(el / 2);
        }
        return binary.split('');
    });

    let map2 = arr2.map(el => {
        let binary = '';
        for (let i = 0; i < n; i++) {
            if (el === 0) {
                binary = 0 + binary;
                continue;
            }
            binary = el % 2 + binary;
            el = Math.floor(el / 2);
        }
        return binary.split('');
    });
    for (let i = 0; i < n; i++) {
        let wall = '';
        for (let j = 0; j < n; j++) {
            if (map1[i][j] === '1' || map2[i][j] === '1') {
                wall += '#'
            } else {
                wall += ' ';
            }
        }
        answer.push(wall);
    }
    return answer;
}
