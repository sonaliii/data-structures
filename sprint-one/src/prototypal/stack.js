var makeStack = function() {
  var instance = Object.create(makeStack.stackMethods);
  instance.height = 0;
  instance.storage = {};

  return instance;
};

makeStack.stackMethods = {
  push:function(value){this.storage[this.height++] = value;},
  pop:function(){if (this.height) {return this.storage[--this.height];}},
  size:function(){return this.height;}
};
var stackMethods = {};