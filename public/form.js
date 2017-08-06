var getProductId = function(evt) {
  evt.preventDefault();

  var id = document.querySelector('#id').value;
  storeItems(id)
};

var storeItems= function(id) {
  var productsArray = [];
  console.log(productsArray)
  productsArray.push(id);

  productsArray.forEach(function(productId) {
  localStorage.setItem('products', JSON.stringify(productId));
  generateURL(productId);
  })
}