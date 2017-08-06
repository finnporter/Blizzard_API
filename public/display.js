var addTableHeads = function() {
  var tableHeads = ["Product ID", "Product Name", "Buy Price", "Sell Price"];
  var table = document.querySelector('#table');
  var tr = document.createElement('tr');
  table.appendChild(tr);
  tableHeads.forEach(function(tableHead) {
    var theads = document.createElement('th');
    theads.innerText = tableHead;
    tr.appendChild(theads);
  })
};

var displayNames = function(item) {
  //console.log("display item:", item)

  var table = document.querySelector('#table');
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var tdId = document.createElement('td');
  var tdName = document.createElement('td');
  var tdBuyPrice = document.createElement('td');
  var tdSellPrice = document.createElement('td');
  tdId.innerText = item.id;
  tdName.innerText = item.name;
  tdBuyPrice.innerText = item.buyPrice;
  tdSellPrice.innerText = item.sellPrice;
  tr.appendChild(tdId);
  tr.appendChild(tdName);
  tr.appendChild(tdBuyPrice);
  tr.appendChild(tdSellPrice);
};