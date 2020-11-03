const evenOccurrence = function (arr) {
    // Your code here.
  
    let hash = {},
      i;
    // hash of not-even characters
    for (i = 0; i < arr.length; i++) {
      hash[arr[i]] = !hash[arr[i]];
    }
    // return the first even occurrence
    for (i = 0; i < arr.length; i++) {
      if (!hash[arr[i]]) return arr[i];
    }
    return null;
  };