const expect = chai.expect;

describe("Valid PIN", function() {
  it("TC1: 0000 vs 0000 → VALID PIN", function() {
    savePINFromInput("0000");
    expect(validatePIN("0000")).to.equal("VALID PIN");
  });
  it("TC2: 9999 vs 9999 → VALID PIN", function() {
    savePINFromInput("9999");
    expect(validatePIN("9999")).to.equal("VALID PIN");
  });
  it("TC3: 1234 vs 1234 → VALID PIN", function() {
    savePINFromInput("1234");
    expect(validatePIN("1234")).to.equal("VALID PIN");
  });
  it("TC4: 5678 vs 5678 → VALID PIN", function() {
    savePINFromInput("5678");
    expect(validatePIN("5678")).to.equal("VALID PIN");
  });
});

describe("Invalid PIN", function() {
  it("TC5: 0123 vs 0124 → INVALID PIN", function() {
    savePINFromInput("0123");
    expect(validatePIN("0124")).to.equal("INVALID PIN");
  });
  it("TC6: 4567 vs 4576 → INVALID PIN", function() {
    savePINFromInput("4567");
    expect(validatePIN("4576")).to.equal("INVALID PIN");
  });
  it("TC7: 8901 vs 8190 → INVALID PIN", function() {
    savePINFromInput("8901");
    expect(validatePIN("8190")).to.equal("INVALID PIN");
  });
});