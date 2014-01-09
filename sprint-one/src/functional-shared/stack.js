var makeStack = function() {
  var instance = {height:0,storage:{}};

  return _.extend(instance, stackMethods);
};

var stackMethods = {
  push:function(value){this.storage[this.height++] = value;},
  pop:function(){if (this.height) {return this.storage[--this.height];}},
  size:function(){return this.height;}
};