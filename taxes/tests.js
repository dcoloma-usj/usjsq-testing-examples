const expect = chai.expect;
describe("Invalid Values", function() {
    it("If amount is -1 it should return invalid", () => expect(getIRPF(-1)).to.equal("INVALID"));
});
describe("Valid Values", function() {
    describe("First Bracket", function() {
        it("If amount is 0 it should return 0", () => expect(getIRPF(0)).to.equal(0));
        it("If amount is 6500 it should return 1235", () => expect(getIRPF(6500)).to.equal(1235));
        it("If amount is 12999 it should return 2469.81", () => expect(getIRPF(12999)).to.equal(2469.81));
        it("If amount is 13000 it should return 2470.0", () => expect(getIRPF(13000)).to.equal(2470.0));
    });
    describe("Second Bracket", function() {
        it("If amount is 13001 it should return 2,470.24", () => expect(getIRPF(13001)).to.equal(2470.24));
        it("If amount is 20000 it should return 4150.0", () => expect(getIRPF(20000)).to.equal(4150.0));
        it("If amount is 29999 it should return 6549.76", () => expect(getIRPF(29999)).to.equal(6549.76));
    });

        describe("Third Bracket", function() {
        it("If amount is 30000 it should return 6550", () => expect(getIRPF(30000)).to.equal(6550));
        it("If amount is 30001 it should return 6550.30", () => expect(getIRPF(30001)).to.equal(6550.30));
        it("If amount is 50000 it should return 12550.0", () => expect(getIRPF(50000)).to.equal(12550.0));
        it("If amount is 2147483647 it should return 644242644.1", () => expect(getIRPF(2147483647)).to.equal(644242644.1));
    });
});