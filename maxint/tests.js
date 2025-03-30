const expect = chai.expect;

describe("maxint(value, maxint)", function() {
  it("TC1: sum (55) higher than maxint (54) by 1 returns ERROR", function() {
    expect(maxint(10, 54)).to.equal("ERROR");
  });
  it("TC2: if maxint is 0 and value is different to 0 it returns ERROR", function() {
    expect(maxint(1, 0)).to.equal("ERROR");
  });
  it("TC3: if maxint is negative it returns ERROR", function() {
    expect(maxint(10, -10)).to.equal("ERROR");
  });
  it("TC4: sum (55) equal to maxint (55) returns sum 55", function() {
    expect(maxint(10, 55)).to.equal(55);
  });
  it("TC5: sum (55) smaller to maxint (56) by 1 returns sum (55)", function() {
    expect(maxint(10, 56)).to.equal(55);
  });
  it("TC6: value negative and sum (55) equal to maxint (55) returns sum (55)", function() {
    expect(maxint(-10, 55)).to.equal(55);
  });
  it("TC7: value negative and sum (55) smaller than maxint (56) by 1 returns sum (55)", function() {
    expect(maxint(-10, 56)).to.equal(55);
  });
  it("TC8: value and maxint both equal to 0 return 0", function() {
    expect(maxint(0, 0)).to.equal(0);
  });
});