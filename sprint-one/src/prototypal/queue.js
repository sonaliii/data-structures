var makeQueue = function() {

  // Use an object with numeric keys to store values

    // Implement the methods below

  var instance = Object.create(queueMethods);

  instance.storage = {};
  instance.first = 0;
  instance.last = 0;
  return instance;
};

var queueMethods = {
  enqueue: function(value) {this.storage[this.last++] = value;},
  dequeue: function() {if(this.last > this.first) { return this.storage[this.first++];}},
  size: function() {return this.last - this.first;}
};








// var maker = function(value){
//     var thingToBeMade = Object.create(maker.stuffAllThingsShouldHave);
//     thingToBeMade.ownValue = value;
//     return thingToBeMade;
// };

// maker.stuffAllThingsShouldHave = {};
// maker.stuffAllThingsShouldHave.shout = function() {console.log(this.ownValue);};

// var newThing = maker(4);
// newThing.shout();