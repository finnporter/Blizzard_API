var getProductId = function(evt) {
  evt.preventDefault();

  var id = document.querySelector('#id').value;
  console.log(id)
  var products = [];
  products.push(id);
  //storeItems(products)
  getItemNumber(id);
};

var storeItems= function(products) {
  console.log(products)
  localStorage.setItem('product', JSON.stringify(products));
}