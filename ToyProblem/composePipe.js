var compose = function () {
  /* START SOLUTION */
  var args = Array.prototype.slice.call(arguments);

  return function (val) {
    return args.reduceRight(function (memo, fn) {
      return fn(memo);
    }, val);
  };
  /* END SOLUTION */
};

var pipe = function () {
  /* START SOLUTION */
  var args = Array.prototype.slice.call(arguments);

  return function (val) {
    return args.reduce(function (memo, fn) {
      return fn(memo);
    }, val);
  };
  /* END SOLUTION */
};


  let greet = function (name) {
    return 'hi: ' + name;
  };
  let exclaim = function (statement) {
    return statement.toUpperCase() + '!';
  };

  let welcome = compose(greet, exclaim) 
  console.log(welcome('phillip'));
  