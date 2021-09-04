// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  //If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
  it("should return false if the shift value is not present", () => {
    const actual = caesar("thinkful");
    expect(actual).to.be.false;
  });
  it("should return false if the shift value is equal to zero", () => {
    const actual = caesar("thinkful", 0);
    expect(actual).to.be.false;
  });
  it("should return false if the shift value is less than -25", () => {
    const actual = caesar("thinkful", -26);
    expect(actual).to.be.false;
  });
  it("should return false if the shift value is greater than 25", () => {
    const actual = caesar("thinkful", 99);
    expect(actual).to.be.false;
  });
  it("should return numbers, spaces and other non letter characters", () => {
    const actual = caesar("9! ()9", 24);
    expect(actual).to.eql("9! ()9");
  });
  //need to test for wrap around
  it("should wrap around to the front of the alphabet if a letter is shifted off by postive number", () => {
    const actual = caesar("zzzzyyy", 3);
    expect(actual).to.equal("ccccbbb");
  });
  it("should wrap around to the back of the alphabet if a letter is shifted off by negative number", () => {
    const actual = caesar("ccccbbb", -3);
    expect(actual).to.equal("zzzzyyy");
  });
  it("should reverse the shift from negative to positive or vice versa when encode is false", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal("this is a secret message!");
  });
});
