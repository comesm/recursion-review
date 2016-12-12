// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  
  var getNodesWithClassName = function(targetNode, targetClassName) {
    
    var results = [];
    
    if(targetNode.className !== undefined)
    {
      if (targetNode.className.includes(targetClassName)) {
        results.push(targetNode);
      }
    }

    for (var i = 0; i < targetNode.childNodes.length; i++) {
      results = results.concat(getNodesWithClassName(targetNode.childNodes[i], targetClassName));
    }

    return results;
  };


  return getNodesWithClassName(document.body, className);
    
//body element 
//check body and all its children for className
//if body className is equal to our parameter
  //add to results array
//check the children --class name

  //return results;

  // your code here
};
