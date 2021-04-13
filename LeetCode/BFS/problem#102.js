/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const Q = [[root, 0]];
  const tree = {};
  const answer = [];
  while (Q.length) {
    const [node, depth] = Q.shift();
    if (tree[depth]) tree[depth].push(node.val);
    else tree[depth] = [node.val];
    if (node.left) Q.push([node.left, depth + 1]);
    if (node.right) Q.push([node.right, depth + 1]);
  }

  for (prop in tree) {
    answer.push(tree[prop]);
  }
  return answer;
};
