var expect = require("expect.js"),
    Champions = require("../champions"),
    app = require('../server.js');

describe('Champions Provider', function() {

    describe('#getAll', function() {
        it('returns a list of all champions', function(done) {
            Champions.getAll(function(data) {
                expect(data).to.not.be.empty();
                done();
            });
        });
    });

    describe('#getByName', function() {
        it('returns a single champion by name', function(done) {
            Champions.getByName('Ahri', function(data) {
                expect(data).to.not.be.empty();
                done();
            });
        });
    });
});
