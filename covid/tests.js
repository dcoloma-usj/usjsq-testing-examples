const expect = chai.expect;

describe("Positive", function() {
  it("breath problems, fever, cough, contact, over 20 -> true", () => expect(diagnose([true, true, true, true, true])).to.equal(true));
  it("breath problems, fever, cough, no contact, no over 20 -> true", () => expect(diagnose([true, true, true, true, false])).to.equal(true));
  it("breath problems, fever, cough, no contact, over 20 -> true", () => expect(diagnose([true, true, true, false, true])).to.equal(true));
  it("breath problems, fever, cough, no contact, no over 20 -> true", () => expect(diagnose([true, true, true, false, false])).to.equal(true));
  it("breath problems, fever, no cough, contact, over 20 -> true", () => expect(diagnose([true, true, false, true, true])).to.equal(true));
  it("breath problems, fever, no cough, contact, no over 20 -> true", () => expect(diagnose([true, true, false, true, false])).to.equal(true));
  it("breath problems, fever, no cough, no contact, over 20 -> true", () => expect(diagnose([true, true, false, false, true])).to.equal(true));
  it("breath problems, fever, no cough, no contact, no over 20 -> true", () => expect(diagnose([true, true, false, false, false])).to.equal(true));
  it("breath problems, no fever, cough, contact, over 20 -> true", () => expect(diagnose([true, false, true, true, true])).to.equal(true));
  it("breath problems, no fever, cough, contact, no over 20 -> true", () => expect(diagnose([true, false, true, true, false])).to.equal(true));
  it("breath problems, no fever, cough, no contact, no over 20 -> true", () => expect(diagnose([true, false, true, false, false])).to.equal(true));
  it("breath problems, no fever, no cough, contact, no over 20 -> true", () => expect(diagnose([true, false, false, true, false])).to.equal(true));
  it("No breath problems, fever, cough, contact, over 20 -> true", () => expect(diagnose([false, true, true, true, true])).to.equal(true));
  it("No breath problems, fever, cough, contact, no over 20 -> true", () => expect(diagnose([false, true, true, true, false])).to.equal(true));
  it("No breath problems, fever, cough, no contact, over 20 -> true", () => expect(diagnose([false, true, true, false, true])).to.equal(true));
  it("No breath problems, fever, cough, no contact, no over 20 -> true", () => expect(diagnose([false, true, true, false, false])).to.equal(true));
  it("No breath problems, fever, no cough, contact, over 20 -> true", () => expect(diagnose([false, true, false, true, true])).to.equal(true));
  it("No breath problems, fever, no cough, contact, no over 20 -> true", () => expect(diagnose([false, true, false, true, false])).to.equal(true));
  it("No breath problems, fever, no cough, no contact, over 20 -> true", () => expect(diagnose([false, true, false, false, true])).to.equal(true));
  it("No breath problems, fever, no cough, no contact, no over 20 -> true", () => expect(diagnose([false, true, false, false, false])).to.equal(true));
  it("No breath problems, no fever, cough, contact, no over 20 -> true", () => expect(diagnose([false, false, true, true, false])).to.equal(true));
});

describe("Negative", function() {
  it("breath problems, no fever, cough, no contact, over 20 -> false", () => expect(diagnose([true, false, true, false, true])).to.equal(false));
  it("breath problems, no fever, no cough, contact, over 20 -> false", () => expect(diagnose([true, false, false, true, true])).to.equal(false));
  it("breath problems, no fever, no cough, no contact, over 20 -> false", () => expect(diagnose([true, false, false, false, true])).to.equal(false));
  it("breath problems, no fever, no cough, no contact, no over 20 -> false", () => expect(diagnose([true, false, false, false, false])).to.equal(false));
  it("no breath problems, no fever, cough, contact, over 20 -> false", () => expect(diagnose([false, false, true, true, true])).to.equal(false));
  it("no breath problems, no fever, cough, no contact, over 20 -> false", () => expect(diagnose([false, false, true, false, true])).to.equal(false));
  it("no breath problems, no fever, no cough, contact, over 20 -> false", () => expect(diagnose([false, false, true, false, false])).to.equal(false));
  it("no breath problems, no fever, no cough, contact, over 20 -> false", () => expect(diagnose([false, false, false, true, true])).to.equal(false));
  it("no breath problems, no fever, no cough, contact, no over 20 -> false", () => expect(diagnose([false, false, false, true, false])).to.equal(false));
  it("no breath problems, no fever, no cough, no contact, over 20 -> false", () => expect(diagnose([false, false, false, false, true])).to.equal(false));
  it("no breath problems, no fever, no cough, contact, no over 20 -> false", () => expect(diagnose([false, false, false, false, false])).to.equal(false));
});