var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    var newNode = makeNode(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.previous = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }

  }

  list.addToTail = function(value){
    var newNode = makeNode(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.previous = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    if (list.head !== null) {
      list.head = list.head.next;
      list.head.previous = null;
    }
  };

  list.removeTail = function(){
    if (list.tail !== null){
      list.tail = list.tail.previous;
      list.tail.next = null;
    }
  }

  list.contains = function(target, node){
    var node = node || list.head;

    if (node.value === target) {
      return true;
    } else if (node.next !== null){
      return list.contains(target, node.next);
    } else {
      return false;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
