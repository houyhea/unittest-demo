describe('add unit test.', function () {
  var expect = chai.expect;
  it('2 + 3 应该等于5', function () {
    var result = add(2, 3);
    expect(result).to.equal(5);
  });
  it('2 - 3 应该等于 -1', function () {
    var result = sub(2, 3);
    expect(result).to.equal(-1);
  });
});