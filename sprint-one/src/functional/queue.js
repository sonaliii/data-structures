var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;
    // Implement the methods below

  instance.enqueue = function(value){
    storage[last++] = value;
  };

  instance.dequeue = function(){
    if (last - first > 0){
      return storage[first++];
    }
  };

  instance.size = function(){
    return last - first;
  };

  return instance;
};
