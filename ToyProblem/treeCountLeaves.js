const Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.countLeaves = function () {
  // TODO: implement me!

  var leaves;
  if (this.children.length === 0) {
    leaves = 1;
  } else {
    leaves = 0;
    for (var i = 0; i < this.children.length; i++) {
      leaves += this.children[i].countLeaves();
    }
  }
  return leaves;
};
/**
 * 이 밑의 코드들을 수정할 필요는 없습니다. 그러나 마음껏 참고하셔도 됩니다!
 */

/**
 * child를 추가합니다.
 * (Tree가 아닌 값이 들어올 경우, Tree 객체로 변환 후 추가합니다)
 */
Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // 편의를 위해 추가된 child node를 return합니다.
  return child;
};

/**
 * 주어진 tree가 이미 해당 tree 혹은 sub tree의 child인지 확인합니다.
 */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child`는 해당 트리와 연결된 하위 노드를 의미합니다.
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
    return false;
  }
};

/**
 * child를 삭제합니다.
 */
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // child를 삭제합니다.
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};