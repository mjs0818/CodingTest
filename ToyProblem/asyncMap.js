const asyncMap = function (tasks, callback) {
    // TODO: 여기에 코드를 작성합니다.
  var resultsArray = [];
  var resultsCount = 0;

  for (let i = 0; i < tasks.length; i++) {
      tasks[i](function (val) {
        resultsArray[i] = val;
        resultsCount++;
        if (resultsCount === tasks.length) {
          callback(resultsArray);
        }
      });
    
  }
};


asyncMap([
    function (cb) {
      setTimeout(function () {
        cb('one');
      }, 200);
    },
    function (cb) {
      setTimeout(function () {
        cb('two');
      }, 100);
    },
  ],
  function (results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
  });