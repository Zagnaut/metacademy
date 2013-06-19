describe "Service:Champions", ->
  beforeEach module('metacademy')

  beforeEach(inject(($service) ->
    Champions = $service '$champions'
    )
  )

  it "should provide a list of all champions", ->
    champions = Champions.getChampions()
    expect(champions.length).not.toBe null
