Array.prototype.isSubsetOf = function(array) {
    let isSubset = true;
    this.forEach(element => {
        if(!array.includes(element)){
            isSubset = false;
        }
    });
    return isSubset;
}