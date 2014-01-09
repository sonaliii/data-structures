var makeStack = function() {
  var instance = Object.create(stackMethods);
  instance.height = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {};

// makeStack.stackMethods.push


stackMethods.push = function(value){this.storage[this.height++] = value;};
stackMethods.pop = function(){if (this.height) {return this.storage[--this.height];}};
stackMethods.size = function(){return this.height;};
