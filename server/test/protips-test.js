var Protips = require('../protips');
var expect = require('expect.js');
var app = require('../server.js');

describe('Protips Provider', function(){

  describe('For', function(){

    describe('#get', function(){

      it('returns a list of "for" protips for a champion', function(done){
        Protips.getPlayer('Ahri', function(protips){
          expect(protips).to.be.an(Array);
          done();
        });
      });

    });

    describe('#post', function(){
      it('saves a for protip', function(done){
      });
    });
  });

//  describe('#getVersus', function() {
//    it('returns a list of protips between two champions', function(done) {
//      Protips.getVersus("Ahri", "Annie", function(protips) {
//        expect(protips).to.be(undefined);
//        done();
//      });
//    });
//  });
});
