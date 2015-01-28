var _ = require('lodash');
var CartItem = require('./cart-item');
function Scanner() {

}

Scanner.scan = function(input, allItems) {

  var barcode = '';
  var amount = 1;

  for (var key in input) {
    barcode = key;
    amount = input[key];
  }
  var item = _.find(allItems, {'barcode' : barcode});

  return new CartItem(item, amount);

}

module.exports = Scanner;
