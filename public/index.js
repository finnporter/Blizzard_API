var generateURL = function(itemId) {
  var url = "https://eu.api.battle.net/wow/item/" + itemId + 
  "?locale=en_GB&apikey=4zjnbjyxkhpnwyhhf7xh7dagxkqu8vbd"
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();

  request.addEventListener('load', callback);

  request.open('GET', url);
  request.send();
};

var requestComplete = function() {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  item = JSON.parse(jsonString);

  displayProduct(item);
};

var app = function() {

  var productIds = localStorage.getItem('product');
  if (productIds !== null) {
    productIds.forEach(function(productId) {
      productId = JSON.parse(productId)
      getItemNumber(productId);
    })
  }

  addTableHeads();
  generateURL(128862);

  var form = document.getElementById('form');
  form.addEventListener('submit', getProductId);
  //why does getProductId not get called?
}

window.addEventListener('load', app);