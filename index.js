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
<<<<<<< HEAD

  var list = document.querySelectorAll('.ranked-list');
=======
  var list = document.querySelectorAll("ranked-list")
>>>>>>> 4990112918dc3e40b7e2a262fa47cbecf7fd5e73
  
  for (let i = 0; i < list.length; i++) 
  {
    var child = list[i].children
<<<<<<< HEAD
    for (let j = 0; j < child.length; j++) {
      child[j].innerHTML = parseInt(child[j].innerHTML) + n
    }
  }
}
=======
    for (let j = 0; j <  child.length; j++) {
      child[j].innerHTML = parseInt(child[j].innerHTML) + n
    }
  }
>>>>>>> 4990112918dc3e40b7e2a262fa47cbecf7fd5e73


function deepestChild()
{
<<<<<<< HEAD
  var node = document.getElementById('grand-node').querySelectorAll('div')
  
    var subNode = 0
  for(let i=0; i< node.length-1;i++) {
      subNode = node[i].querySelector("div");
    }
  return subNode;

=======
  
  
>>>>>>> 4990112918dc3e40b7e2a262fa47cbecf7fd5e73
}