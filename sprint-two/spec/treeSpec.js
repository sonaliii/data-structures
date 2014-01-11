var expect = chai.expect;
var assert = chai.assert;

describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree(5);
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    assert.isTrue('value' in tree);
  });

  it("should add children to the tree", function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it("should check that a subtree has a reference to its parent", function(){
    tree.addChild(5);
    tree.children[0].addChild(4);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
    expect(tree.children[0].children[0].parent).to.equal(tree.children[0]);
  });

  it("should return true for a value that the tree contains", function(){
    tree.addChild(5);
    assert.isTrue(tree.contains(5));
  });

  it("should return false for a value that was not added", function(){
    tree.addChild(5);
    assert.isFalse(tree.contains(6));
  });

  it("should remove a tree from its parent", function() {
    tree.addChild(5);
    tree.children[0].addChild(4);
    tree.removeFromParent(tree.children[0].children[0]);
    assert.isFalse(tree.contains(4));
  });

  it("should be able to add children to a tree's child", function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it("should traverse and use the callback function on all tree nodes", function() {
    tree.addChild(5);
    tree.addChild(2);
    tree.addChild(3);
    tree.addChild(4);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    var str = '';
    tree.traverse(function(node){
      str += node.value;
    });
    expect(str).to.equal('5572834');
  });

  it("should correctly detect nested children", function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    assert.isTrue(tree.contains(7));
    assert.isTrue(tree.contains(8));
  });

});
