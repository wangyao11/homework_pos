jest.dontMock('../js/model/item');
jest.dontMock('../js/model/discount-item');

describe('DiscountText', function() {

  describe('#cartItemDiscountText()', function() {

    it('should return correct string', function(){

      var Item = require('../js/model/item');
      var DiscountItem = require('../js/model/discount-item');
      var itemTest = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');

      expectResult = '名称：可口可乐350ml单品打折，金额：14.00元';

      itemTest = new DiscountItem(itemTest, 0.9);

      result = itemTest.cartItemDiscountText(14);


      expect(expectResult).toBe(result);
    });
  });
});
