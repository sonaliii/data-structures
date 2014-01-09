var makeStack = function(){
  var instance = {};

  var storage = {};
  var size = 0;

  instance.push = function(value){
    storage[size++] = value;
  };

  instance.pop = function(){
    if (size) {
      return storage[--size];
    }


  };

  instance.size = function(){
    return size;
  };

  return instance;
};