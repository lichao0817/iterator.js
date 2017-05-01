(function() {
  this._ = Object.create(null);

  _.forEach = function(arr, fn) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(
        fn(arr[i])
      );
    }
    return newArr;
  };
  _.reverse = function(arr) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    for (let i = 0; i < arr.length / 2; i++) {
      var temp = newArr[i];
      newArr[i] = newArr[arr.length - 1 - i];
      newArr[arr.length - 1 - i] = temp;
    }
    return newArr;
  }

  _.select = function(arr, fn) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  _.min = function(arr) {
    var min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      min = min > arr[i] ? arr[i] : min;
    }
    return min;
  }

  _.max = function(arr) {
    var max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      max = max < arr[i] ? arr[i] : max;
    }
    return max;
  }

}).call(this);
