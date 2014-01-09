var Stack = function() {
  this.height = 0;
  this.storage = {};
};

var stackMethods = {};

Stack.prototype.push = function(value){this.storage[this.height++] = value;};
Stack.prototype.pop = function(){if (this.height) {return this.storage[--this.height];}};
Stack.prototype.size = function(){return this.height;};

var instance = new Stack();