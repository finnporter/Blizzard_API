var getItemNumber = function(itemId) {
  var itemIds = [];
  itemIds.push(itemId);
  generateURL(itemIds)
}

var generateURL = function(itemIds) {
  itemIds.forEach(function(itemId) {
    var url = "https://eu.api.battle.net/wow/item/" + itemId + 
    "?locale=en_GB&apikey=4zjnbjyxkhpnwyhhf7xh7dagxkqu8vbd"
    makeRequest(url, requestComplete);
  })
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
  displayNames(item);
};

var app = function() {
  addTableHeads();
  getItemNumber(128862);
  getItemNumber(13937);
  getItemNumber(71466);
  getItemNumber(18348);
  getItemNumber(39769);
}

window.addEventListener('load', app);