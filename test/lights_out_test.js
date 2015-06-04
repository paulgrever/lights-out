var expect = require('chai').expect;
describe("lights out in the dom", function(){
  it('displays five rows with corresponding row number ids', function() {
    expect($('.gameboard .row').length).to.equal(5);
  });
});