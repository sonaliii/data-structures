var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v){
    var i = getIndexBelowMaxForKey(k, this._limit);
      if (this._storage.get(i) === undefined){
        this._storage.set(i,[[k,v]]);
        this._counter++;
      }
      else {
        var bucket = this._storage.get(i);
        var smallArr = [k,v];
        bucket.push(smallArr);
        this._storage.set(i, bucket);
        this._counter++;
      }
    if (this._counter > .75 * this._limit){
      var newStorage = makeLimitedArray(this._limit * 2);
      for (var storage_i = 0; storage_i < this._limit; storage_i++){
        if (this._storage.get(storage_i) !== undefined) {
          for (var bucket_i = 0; bucket_i < this._storage.get(storage_i).length; bucket_i++){
            var old_k = this._storage.get(storage_i)[bucket_i][0];
            var old_v = this._storage.get(storage_i)[bucket_i][1];
            i = getIndexBelowMaxForKey(old_k, this._limit * 2);
            newStorage.set(i, [[old_k, old_v]]);
          }
        }
      }
      this._storage = newStorage;
      this._limit *= 2;
    }
};


HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
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
  this._counter--;
  if (this._counter < 0.25 * this._limit){
    var newStorage = makeLimitedArray(this._limit / 2);
    for (var storage_i = 0; storage_i < this._limit; storage_i++){
      if (this._storage.get(storage_i) !== undefined) {
        for (var bucket_i = 0; bucket_i < this._storage.get(storage_i).length; bucket_i++){
          var old_k = this._storage.get(storage_i)[bucket_i][0];
          var old_v = this._storage.get(storage_i)[bucket_i][1];
          i = getIndexBelowMaxForKey(old_k, this._limit / 2);
          newStorage.set(i, [[old_k, old_v]]);
        }
      }
    }
    this._storage = newStorage;
    this._limit /= 2;
  }
}
