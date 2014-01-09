var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var newNode = makeNode(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){

  };

  list.contains = function(target, node){
    if (list) {
      return true;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
