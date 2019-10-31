$("#select-player").on("click", function() {


    var playerName = $("#player-search").val().trim();


    var playerName = $(this).attr("data-name");
    var queryURL = "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2019&format=json"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var playerName = $("#player-search").val().trim();
        console.log(playerName);
        for (var i = 0; i < response.players.length; i++) {
            if (response.players[i].name == playerName) {
                console.log("i'm in the if statement");
                playerName = response.players[i].name;
                console.log(response.players[i].position);

                $(".name").html("<h3>" + response.players[i].name + "</h3>");
                $(".position").html("<h3>" + "Position: " + response.players[i].position + "</h3>");
                $(".team").html("<h3>" + "Team: " + response.players[i].teamAbbr + "</h3>");
                $(".weekly-projected").html("<h3>" + "Weekly Projected Points: " + response.players[i].weekProjectedPts + "</h3>");
                $(".season-projected").html("<h3>" + "Season Projected Points: " + response.players[i].seasonProjectedPts + "</h3>");
                $(".season-points").html("<h3>" + "Points Scored this Season: " + response.players[i].seasonPts + "</h3>");
            }
        }


    })

})