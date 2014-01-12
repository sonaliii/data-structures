var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for (var j = 0; j < bucket.length; j++) {
    var pair = bucket[j];
    if (pair[0] === k) {
      pair[1] = v;
    }
  }
  console.log(this._counter, this._limit);
  if (this._counter >= .75 * this._limit){
    console.log("call resize");
    this.resize(this._limit * 2);
  }
  bucket.push([k,v]);
  this._counter++;
  this._storage.set(i, bucket);
};


HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for (var j = 0; j < bucket.length; j++){
    if (bucket[j][0] === k){
      return bucket[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function (k){
  var j = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(j) || [];
    for (var i = 0; i < bucket.length; i++) {
      console.log(bucket);
      var pair = bucket[i];
      if (bucket) {
        if (pair[0] === k) {
          bucket.splice(i, 1);
          this._counter--;
          console.log(this._limit, this._counter);
          if (this._counter < 0.25 * this._limit){
            this.resize(this._limit / 2);
          }
        }
      }
      return pair[1];
    }
};





HashTable.prototype.resize = function (newLimit) {
  console.log("HELLO????");
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(newLimit);
  this._limit = newLimit;
  this._counter = 0;
  
  var that = this;
  oldStorage.each(function(bucket) {
    if (!bucket) {return};
    for (var j = 0; j < bucket.length; j++) {
      var pair = bucket[j];
      that.insert(pair[0], pair[1]);
  }
});
};