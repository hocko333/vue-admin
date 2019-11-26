/**
 * 将一维的扁平数组转换为多层级对象
 * @param {Array} list 一维数组，数组中每一个元素需包含id和pId两个属性
 * @return {Array} tree 多层级树状结构
 */
function toTree(list) {
  let temp = {}
  let tree = {}
  for (let i in list) {
    temp[list[i].id] = list[i]
  }
  for (let i in temp) {
    if (temp[i].pId) {
      if (!temp[temp[i].pId].children) {
        temp[temp[i].pId].children = new Object()
      }
      temp[temp[i].pId].children[temp[i].id] = temp[i]
    } else {
      tree[temp[i].id] = temp[i]
    }
  }
  return tree
}

export default toTree
