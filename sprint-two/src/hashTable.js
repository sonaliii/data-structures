var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined){
    this._storage.set(i,[[k,v]]);
  }
  else {
    var bucket = this._storage.get(i);
    var smallArr = [k,v];
    bucket.push(smallArr);
    this._storage.set(i, bucket);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  console.log(bucket);
  for (var j = 0; j < bucket.length; j++){
    if (bucket[j][0] === k){
      return bucket[j][1];
    }
  }
  //need to check zero-th index when it equals k
};

HashTable.prototype.remove = function (k){
  var j = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(val, key, collection){
    for (var i = 0; i < collection[j].length; i++) {
      if (collection[j][i][0] === k) {
        collection[j][i][1] = null;
      }
    }
  });
};