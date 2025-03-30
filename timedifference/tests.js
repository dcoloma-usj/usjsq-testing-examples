
const expect = chai.expect;

describe("Less than 1 hour", function() {
    it("TC-A1 less than 1 hour AM to PM", () => expect(getTimeDifference(11, 59, "AM", 12, 58, "PM")).to.equal("00:59"));
    it("TC-A2 less than 1 hour PM to AM", () => expect(getTimeDifference(11, 59, "PM", 12, 58, "AM")).to.equal("00:59"));
    it("TC-A3 less than 1 hour (different hour) AM to AM", () => expect(getTimeDifference(10, 59, "AM", 11, 0, "AM")).to.equal("00:01"));
    it("TC-A4 less than 1 hour (same hour) AM to AM", () => expect(getTimeDifference(10, 0, "AM", 10, 59, "AM")).to.equal("00:59"));
    it("TC-A5 less than 1 hour (different hour) PM to PM", () => expect(getTimeDifference(1, 59, "PM", 2, 1, "PM")).to.equal("00:02"));
    it("TC-A6 less than 1 hour (same hour) PM to PM", () => expect(getTimeDifference(11, 0, "PM", 11, 59, "PM")).to.equal("00:59"));

});
describe("More than 1 hour", function() {
    it("TC-B1 more than 1 hour AM to PM", () => expect(getTimeDifference(11, 59, "AM", 1, 58, "PM")).to.equal("01:59"));
    it("TC-B2 more than 1 hour PM to AM", () => expect(getTimeDifference(11, 59, "PM", 1, 30, "AM")).to.equal("01:31"));
    it("TC-B3 more than 1 hour AM to AM", () => expect(getTimeDifference(12, 0, "AM", 11, 59, "AM")).to.equal("11:59"));
    it("TC-B4 more than 1 hour PM to PM", () => expect(getTimeDifference(2, 0, "PM", 4, 0, "PM")).to.equal("02:00"));
});

describe("boundaries", function() {
    it("TC-C1 limit", () => expect(getTimeDifference(12, 0, "AM", 11, 59, "PM")).to.equal("23:59"));
    it("TC-C2 limit", () => expect(getTimeDifference(12, 0, "AM", 12, 0, "AM")).to.equal("24:00"));
});
