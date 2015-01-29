function CartItem(item, amount) {

  this.item = item;
  this.amount = amount;

}

CartItem.prototype.calculateSubtotal = function () {
  return this.item.getPrice() * this.amount;
};

CartItem.prototype.is = function () {
  return 0;
};

CartItem.prototype.promotionMoney = function () {
  return this.item.getPromotionMoney() * this.amount;
};

CartItem.prototype.promotionText = function () {
  return '';
};

CartItem.prototype.cartItemText = function () {
  return this.item.printText(this.calculateSubtotal(), this.amount);
};

CartItem.prototype.cartItemDiscountText= function () {
  return this.item.itemDiscountText(this.promotionMoney());
};

module.exports = CartItem;
