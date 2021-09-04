// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");
describe("polybius", () => {
  //ENCODING
  it("should convert i/j to 42 and have a string as an output while encoding", () => {
    const actual = polybius("thinkful");
    expect(actual).to.equal("4432423352125413");
  });
  it("should ignore capital letters and maintain spaces while encoding", () => {
    const actual = polybius("Hello world");
    expect(actual).to.equal("3251131343 2543241341");
  });

  //DECODING

  it("should return false if the number of characters in the input excluding spaces is odd", () => {
    const actual = polybius("44324233521254134", false);
    expect(actual).to.be.false;
  });
  it("should maintain spaces while decoding", () => {
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.equal("hello world");
  });
});
