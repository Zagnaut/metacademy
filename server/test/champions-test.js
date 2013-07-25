var expect = require("expect.js");
var champions = require("../champions/");

describe('Champions', function() {
    describe('#getChampions', function() {
        it('should return a list of all champions', function() {
            var response = champions.getChampions();
            expect(response).to.be.an(Array);
        })
    });

    describe('#getChampion', function() {
        it('should return a single champion by name', function() {
            var response = champions.getChampion('Ahri');
            expect(response.name).to.eql('Ahri');
        });
    });
});
