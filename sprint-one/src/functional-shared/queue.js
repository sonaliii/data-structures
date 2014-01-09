var makeQueue = function(){
  var instance = {storage: {}, first: 0, last: 0};

  // Use an object with numeric keys to store values

    // Implement the methods below

  return _.extend(instance, queueMethods);
};

var queueMethods = {
  enqueue: function(value) {this.storage[this.last++] = value;},
  dequeue: function() {if(this.last > this.first) { return this.storage[this.first++];}},
  size: function() {return this.last - this.first;}
};