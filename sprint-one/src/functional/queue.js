var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    size++;
    storage[size] = value;
  };

  instance.dequeue = function(){
    if(size) {
      size--;  
      return storage[0];   
    }

  };

  instance.size = function(){
    return size;
  };

  return instance;
};
