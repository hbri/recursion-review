// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //console.log(document.children[0].children[0].length)
  // your code here
  var targetClasses = [];
  recurseTree(targetClasses, document.body, className);
  return targetClasses;
};

const recurseTree = (targetClasses, node, className) => {

  if (node.classList.contains(className)) {
    targetClasses.push(node);
  }

  if (node.children.length !== undefined) {
    console.log(node.children);
    for (let i = 0; i < node.children.length; i++) {
      let child = node.children[i];

      if (child.children) {
        recurseTree(targetClasses, child, className);
      }
    }
  }

};
