function DiscountItem(item, discount){

  this.item = item;
  this.discount = discount;

}

DiscountItem.all = function() {

}

DiscountItem.prototype.printText = function (number, subtotal) {

  return this.item.printText(number, subtotal);
};

DiscountItem.prototype.getPrice = function () {
  return this.item.getPrice();
};

DiscountItem.prototype.getPromotionMoney = function () {
  return this.item.getPrice() * (1 - discount);
};

DiscountItem.prototype.cartItemDiscountText = function (PromotionMoney) {
  return '名称：' + this.item.name + '单品打折，金额：' + PromotionMoney.toFixed(2) + '元';
};

module.exports = DiscountItem;
