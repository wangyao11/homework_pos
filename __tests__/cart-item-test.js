jest.dontMock('../js/model/cart-item');
jest.dontMock('../js/model/item');


describe('CartItem', function() {

  describe('#calculateSubtotal()', function() {

    it('should return correct subtotal(3*20)', function() {

      var CartItem = require('../js/model/cart-item');
      var Item = require('../js/model/item');

      var itemTest = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
      var CartItemTest = new CartItem(itemTest, 20);

      var expectResult = 60;

      var result = CartItemTest.calculateSubtotal();

      expect(expectResult).toBe(result);
      
    });
  });
});
