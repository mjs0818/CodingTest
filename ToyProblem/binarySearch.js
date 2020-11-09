const binarySearch = function (array, target) {
    // TODO: Your code here!
    let first = 0, last = array.length -1, middle = Math.floor((last + first)/2);
    if(array[first] === target){
        return first;
    }
    if(array[last]===target){
        return last;
    }
    while(true) {
        if(array[middle] === target){
            return middle;
        }else{
            if(first === middle || middle === last){
                return null;
            }
        }

        if(array[middle] > target){
            last = middle;
            middle = Math.floor((last + first)/2);
        }else{
            first = middle;
            middle = Math.floor((last + first)/2);
        }

    };
};

console.log(binarySearch([1,2,3,4,5],5));