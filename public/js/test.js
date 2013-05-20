$("#submit-button").on("click", function() {
    var playerChamp, opponentChamp;

    playerChamp   = $("#search-player").text();
    opponentChamp = $("#search-opponent").text();


    $.ajax("/api/champions" + playerChamp, function(){});

});
