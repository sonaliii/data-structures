var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
// add a string to the object
  if (!this._storage){
    this._storage = {};
  }
  this._storage[item] = item;
};

setPrototype.contains = function(item){
//loop through object to find string
  for (var key in this._storage) {
    if (this._storage[key] === item){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
//remove string from object if present
  if (this._storage[item]) {
    delete this._storage[item];
  }
};
