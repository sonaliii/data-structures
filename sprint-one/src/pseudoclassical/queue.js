var Queue = function() {
this.storage = {};
this.first = 0;
this.last = 0;
};

Queue.prototype.enqueue = function(value) {this.storage[this.last++] = value;};
Queue.prototype.dequeue = function() {if(this.last > this.first) { return this.storage[this.first++];}};
Queue.prototype.size = function() {return this.last - this.first;};

var instance = new Queue();