expect = require "expect.js"
champions = require "../champions/"

describe 'Champions', ->
    describe '#getChampions', ->
        it 'should return a list of all champions', ->
            response = champions.getChampions
            expect(response).to.be.an Array

    describe '#getChampion', ->
        it 'should return a single champion by name', ->
            response = champions.getChampion 'Ahri'
            expect(response).to.be.an Object
            expect(response.name).to.eql 'Ahri'
