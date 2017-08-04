var displayNames = function(item) {
  console.log("display item:", item)

  var divNames = document.querySelector('#item-names');

  var pName = document.createElement('p');
  pName.innerText = item.name;
  divNames.appendChild(pName);
};