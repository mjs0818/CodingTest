const characterFrequency = function (string) {
    // TODO: 코드를 여기에 작성합니다.
    string = string.split('');
    let result = [];
    let obj = {};
    console.log(string);
    string.forEach(el => {

        if(!obj[el]){
            obj[el] = 1; 
        }else {
            obj[el] = obj[el] + 1;
        }
    });

    for(prop in obj) {
        result.push([prop, obj[prop]]);
    }

    result.sort((a,b) => {
        if(a[1] !== b[1]){
            return b[1] - a[1];
        }else {
            if(b[0] > a[0]){
                return -1;
            }
        }
    })
    return result;
};
  
console.log(characterFrequency('popopo'));