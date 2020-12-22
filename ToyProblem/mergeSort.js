
const mergeSort = function (array) {
    // TODO: 코드를 여기에 작성합니다.
    if(array.length === 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);
    
    return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid,array.length)));

    function merge(arr1, arr2) {
        let array = [];
        while(arr1 || arr2) {
            if(arr1[0] === undefined) {
                array = array.concat(arr2);
                break;
            }else if(arr2[0] === undefined){
                array = array.concat(arr1);
                break;
            }else{
                if(arr1[0] >= arr2[0]){
                    array.push(arr2.shift());
                }else{
                    array.push(arr1.shift());
                }
            }
        }
        return array;
    }
};

console.log(mergeSort([4,3,2,1]));