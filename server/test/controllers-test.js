var expect = require("expect.js");
var controllers = require('../controllers');

describe("Controllers", function() {

  describe("Champions", function() {
    it("should provide a list of all champions", function() {
        var response = controllers.getChampions();
        expect(response).to.be.an(Array);
    });

    it("should return a chmapion by name", function() {
        var response = controllers.getChampion("Ahri");
        expect(response).to.be.an(Object);
        expect(response.name).to.eql("Ahri");
    });
  });

  describe("Protips", function() {
    it("should provide a list of all protips", function() {
      var protips = controller.getProtips();
    });
  });
});
