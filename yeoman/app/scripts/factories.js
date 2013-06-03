app.factory("Matchups", function() {
  return {};
})

app.factory("Protips", function() {
    // Protip descriptions should have an 80 character limit.

    var protips = [];
    protips = [
        {
            "user": "Zagnaut",
            "upvotes": "9999",
            "description": "Mundo goes where he pleases",
            "content": "He's a meat stick of course.",
            "comments": []
        },{
            "user": "Dyrus",
            "upvotes": "768",
            "description": "That's so DARIUS.",
            "content": "IF DEY BLEED, IMMA CLICK THEM AND THEY DIE. lol",
            "comments": []
        },{
            "user": "Scarra",
            "upvotes": "400",
            "description": "PRESS R TO KATARINA",
            "content": "Spin 2 win brosef.",
            "comments": []
        },{
            "user": "Froggen",
            "upvotes": "3",
            "description": "Spin to win to win to win to win lorem ipsum supercow aristcote meow meomw meow",
            "content": "Also works with, Garen, Darius, Karthus, and Kat.",
            "comments": []
        }
    ];
    return protips;
});
