var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = undefined;

  return $.extend(newTree, treeMethods);;
};


var treeMethods = {};

treeMethods.addChild = function(value){
//set value as the target of the node
//add that node as the child of the tree
  var subTree = makeTree(value);
  subTree.parent = this;

  if (this.children === undefined) {
    this.children = [];
  }
  this.children.push(subTree);
};

treeMethods.removeFromParent = function(subTree) {
  for (var i = 0; i < subTree.parent.children.length; i++){
    if (subTree.parent.children[i] === subTree){
      subTree.parent.children.splice(i,1);
    }
  }
}

treeMethods.contains = function(target){
// returns true if the target can be found as the value of the target node OR any descendants
  var found = false;

  var search = function(treeNode){
    if (treeNode !== undefined && treeNode.value === target){
      found = true;
      return true;
    }
    if (treeNode.children){
      for (var i = 0; i < treeNode.children.length; i++){
         search(treeNode.children[i]);
      }
    }
  }
  search(this);
  return found;
};





//var theTree = makeTree(something)//create a new tree with empty '.children' array and a '.value'

//theTree.addChild(somethingElse)//create a new tree; edit theTree's '.children' array to include this new tree

//create a new tree
//when you create the new tree, if it's the first tree, leave children undefined
//if it's not the first tree, change the parent's tree.children array to include this tree object
//