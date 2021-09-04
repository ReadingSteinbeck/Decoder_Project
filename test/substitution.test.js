// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should return false if there is no alphabet provided", () => {
    const actual = substitution("thinkful");
    expect(actual).to.be.false;
  });
  it("should return false if the given alphabet isn't exactly 26 characters long.", () => {
    const actual = substitution("thinkful", "short");
    expect(actual).to.be.false;
  });
  it("should return false if the given alphabet contains any duplicate characters", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });
  it("should ignore capital letters and maintain spaces", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(actual).to.equal("elp xhm xf mbymwwmfj dne");
  });
  it("should decode the message if encode is set to false", () => {
    const actual = substitution(
      "elp xhm xf mbymwwmfj dne",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    expect(actual).to.equal("you are an excellent spy");
  });
  it("should work if the input and/or output to contain #,$ or *", () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.equal("message");
  });
});
