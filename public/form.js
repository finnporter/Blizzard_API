var getProductId = function(evt) {
  evt.preventDefault();

  var product = document.querySelector('#id').value;
  localStorage.setItem('product', JSON.stringify(product));
  console.log(product)
  getItemNumber(product);
};