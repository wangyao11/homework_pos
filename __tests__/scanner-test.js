jest.dontMock('../js/model/cart-item');
jest.dontMock('../js/model/item');
jest.dontMock('../js/model/scanner');
jest.dontMock('lodash');

describe('Scanner', function() {

  describe('.scan()', function() {

    it('should return CartItem object', function() {

      var CartItem = require('../js/model/cart-item');
      var Item = require('../js/model/item');
      var Scanner = require('../js/model/scanner');

      var itemTest = new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐');
      var input = { 'ITEM000000' : 20 };

      var result = Scanner.scan(input, Item.all());

      var expectResult = new CartItem(itemTest, 20);

      expect(expectResult).toEqual(result);

    });
  });
});
