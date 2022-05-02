const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      //setup
      const expected = "cock-a-doodle-doo!";

      //  exercise
      const actual = Rooster.announceDawn();

      //verify
      assert.equal(actual, expected);
    });
  });
  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      const inputNumber = 14;
      const expected = "14";

      //  exercise
      const actual = Rooster.timeAtDawn(inputNumber);

      //verify
      assert.equal(actual, expected);
    });
    it("throws an error if passed a number less than 0", () => {
      const inputNumber = -1;
      const expected = RangeError;

      //verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
    it("throws an error if passed a number greater than 23", () => {
      const inputNumber = 24;
      const expected = RangeError;

      //verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
  });
});
