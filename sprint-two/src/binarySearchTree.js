var makeBinarySearchTree = function(value){
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

makeBinarySearchTree.prototype = {

  insert: function(value) {
    var subTree = new makeBinarySearchTree(value);
    if (value < this.value){
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = subTree;
      }
    }
    else if (value > this.value){
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = subTree;
      }
    }
  },

  contains: function(value) {
    var isContained = false;

    if (this.value === value){
      isContained = true;
      return true;
    }

    if (value < this.value){
      if (this.left){
        isContained = this.left.contains(value);
      }
    }
    else if (value > this.value){
      if (this.right){
        isContained = this.right.contains(value);
      }
    }
    return isContained;
    //returns boolean - loop through tree
  },

  depthFirstLog: function(callback) {
    //loop through entire tree and execute callback function on every value
    var traverse = function(subTree){
      callback(subTree.value);
      if (subTree.left){
        traverse(subTree.left);
      }
      if (subTree.right){
        traverse(subTree.right);
      }
    };
    traverse(this);
  },

  breadthFirstLog: function(callback) {
    var storage = {};
    var first = 0;
    var last = 0;
    var enqueue = function(value) {storage[last++] = value;};
    var dequeue = function() {if(last > first) { return storage[first++];}};
    var size = function() {return last - first;};

    var traverse = function(subTree) {
      // get the head node and add to queue
      // get the left then right child to add to queue
      enqueue(subTree);
      
      var first = dequeue();

      callback(first);
    };

    traverse(this);
  }
};



// A .value property, which is a number
// A .left property, a binary search tree (BST) where all values are lower than than it
//    the current value.
// A .right property, a BST where all values are higher than than at the current value.
// A .insert() method, which accepts a value and places in the tree in the correct 
//    position.
// A .contains() method, which accepts a value and returns a boolean reflecting whether 
//    or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value 
//    contained in the tree.
// Use case: Given a list of a million numbers, write a function that takes a new number 
//  and returns the closest number in the list using your BST. Profile this against the 
//  same operation using an array.
