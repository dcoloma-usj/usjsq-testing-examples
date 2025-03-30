const expect = chai.expect;

describe("First Step", function() {
    it("TC1: getIRPF(0, false) = 0", () => expect(getIRPF(0, false)).to.equal(0));
    it("TC2: getIRPF(0, true) = 0", () => expect(getIRPF(0, true)).to.equal(0));
    it("TC3: getIRPF(13000, false) = 2470", () => expect(getIRPF(13000, false)).to.equal(2470));
    it("TC4: getIRPF(13000, true) = 0", () => expect(getIRPF(13000, true)).to.equal(0));
    it("TC5: getIRPF(6500, false) = 1235", () => expect(getIRPF(6500, false)).to.equal(1235));
});
describe("Second Step", function() {
    it("TC6: getIRPF(13001, false) = 2470.24", () => expect(getIRPF(13001, false)).to.equal(2470.24));
    it("TC7: getIRPF(13001, true) = 0", () => expect(getIRPF(13001, true)).to.equal(0));
    it("TC8: getIRPF(30000, false) = 6550", () => expect(getIRPF(30000, false)).to.equal(6550));
    it("TC9: getIRPF(30000, true) = 4050", () => expect(getIRPF(30000, true)).to.equal(4050));
    it("TC10: getIRPF(14000, false) = 2710", () => expect(getIRPF(14000, false)).to.equal(2710));
    it("TC11: getIRPF(13125, false) = 2500", () => expect(getIRPF(13125, false)).to.equal(2500));
    it("TC12: getIRPF(13125, true) = 0", () => expect(getIRPF(13125, true)).to.equal(0));
    it("TC13: getIRPF(13126, false) = 2500.24", () => expect(getIRPF(13126, false)).to.equal(2500.24));
    it("TC14: getIRPF(13126, true) = 0.24", () => expect(getIRPF(13126, true)).to.equal(0.24));
});
describe("Third Step", function() {
    it("TC15: getIRPF(30001, false) = 6550.3", () => expect(getIRPF(30001, false)).to.equal(6550.3));
    it("TC16: getIRPF(30001, true) = 4050.3", () => expect(getIRPF(30001, true)).to.equal(4050.3));
    it("TC17: getIRPF(2147483647, false) = 644242644.1", () => expect(getIRPF(2147483647, false)).to.equal(644242644.1));
    it("TC18: getIRPF(2147483647, true) = 644240144.1", () => expect(getIRPF(2147483647, true)).to.equal(644240144.1));
    it("TC19: getIRPF(32000, false) = 7150", () => expect(getIRPF(32000, false)).to.equal(7150));
});
