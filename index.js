function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n)
{

  var list = document.querySelectorAll('.ranked-list');
  
  for (let i = 0; i < list.length; i++) 
  {
    var child = list[i].children
    for (let j = 0; j < child.length; j++) {
      child[j].innerHTML = parseInt(child[j].innerHTML) + n
    }
  }
}


function deepestChild()
{
  var node = document.getElementById('grand-node').querySelectorAll('div')
  
    var subNode = 0
  for(let i=0; i< node.length-1;i++) {
      subNode = node[i].querySelector("div");
    }
  return subNode;

}