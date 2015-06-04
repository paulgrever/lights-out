var expect = require('chai').expect;
describe("lights out in the dom", function(){
  describe("on initial page load", function(){
    it('displays five rows with corresponding row number ids', function() {
      // Return all row DOM nodes
      // assert that there are 5
      expect($('.gameboard .row').length).to.equal(5);
    });
  });
});