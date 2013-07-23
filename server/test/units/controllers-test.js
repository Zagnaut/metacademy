var controllers = require('../../controllers');

describe("Controllers", function() {

  describe("Champions", function() {
    it("should provide a list of all champions", function() {
      expect(controllers.getChampions()).not.toBe(undefined);
    });

    it("should return a chmapion by name", function() {
    });
  });

  describe("Protips", function() {
    beforeEach(Protips = controllers);

    it("should provide a list of all protips", function() {
      var protips = Protips.find();
    });
  });
});
