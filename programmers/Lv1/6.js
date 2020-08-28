    function solution(strings, n) {
        return strings.sort((a, b) => {
            if (a[n] === b[n]) {
                return a.charCodeAt() - b.charCodeAt();
            } else {
                return a[n].charCodeAt() - b[n].charCodeAt();
            }
        })
    }