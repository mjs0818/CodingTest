const deepEquals = function (apple, orange) {
  // TODO: Your code here!
  let equal = true

  function deep(obj1, obj2) {
    if (!equal) {
      return
    }

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      equal = false
    }
    for (prop in obj1) {
      if (!obj2[prop]) {
        equal = false
      } else {
        if (typeof obj1[prop] === "object" && typeof obj2[prop] === "object") {
          deep(obj1[prop], obj2[prop])
        } else {
          if (obj1[prop] !== obj2[prop]) {
            equal = false
          }
        }
      }
    }
  }
  deep(apple, orange)
  return equal
}
