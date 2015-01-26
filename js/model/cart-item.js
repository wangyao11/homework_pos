function CartItem(item, amount) {

  this.item = item;
  this.amount = amount;

}

CartItem.prototype.calculateSubtotal = function () {
  return this.item.price * this.amount;
};

module.exports = CartItem;
