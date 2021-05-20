function solution(skill, skill_trees) {
  let answer = 0;
  const aux = (skillTree) => {
    let check = Array(skill.length).fill(false);
    for (let i = 0; i < skillTree.length; i++) {
      let index = skill.indexOf(skillTree[i]);
      if (index === 0) {
        check[0] = true;
      } else if (index > 0) {
        if (!check[index - 1]) return false;
        check[index] = true;
      }
    }
    return true;
  };
  for (let i = 0; i < skill_trees.length; i++) {
    if (aux(skill_trees[i])) answer++;
  }
  return answer;
}
