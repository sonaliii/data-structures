var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  return _.extend(newTree, treeMethods);
};


var treeMethods = {};

treeMethods.addChild = function(value){

  var subTree = this.makeTree(value);

  if (this.children !== undefined)
  this.children.push();
};

treeMethods.contains = function(target){

};





var theTree = makeTree(something)//create a new tree with empty '.children' array and a '.value'

theTree.addChild(somethingElse)//create a new tree; edit theTree's '.children' array to include this new tree

//create a new tree
//when you create the new tree, if it's the first tree, leave children undefined
//if it's not the first tree, change the parent's tree.children array to include this tree object
//