var expect = require("expect.js"),
    Champion = require("../champions/"),
    app = require('../server.js');

describe('Champions Provider', function() {

    describe('#getAll', function() {
        it('returns a list of all champions', function(done) {
            Champion.getAll(function (data){
                expect(data).to.be.an(Array);
                done();
            });
        });
    });

    describe('#getByName', function() {
        it('returns a single champion by name', function(done) {
            Champion.getByName('Ahri', function (data){
                expect(data).to.be.an(Object);
                expect(data.name).to.eql('Ahri');
                done();
            });
        });
    });
});
