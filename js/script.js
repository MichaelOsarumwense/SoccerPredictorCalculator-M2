function CalculateChances() {
  check_Team_Selection();

 var oppTeam = document.getElementById("oppTeam").value;
  var myTeam = document.getElementById("myTeam").value;

  var barcelona = {
    gamesWon: 4,
    gamesLost: 1,
    goalsScored: 9,
    goalsReceived: 2,
  };
  var bayernmunich = {
    gamesWon: 5,
    gamesLost: 0,
    goalsScored: 5,
    goalsReceived: 0,
  };

  var juventus = {
    gamesWon: 4,
    gamesLost:1,
    goalsScored: 5,
    goalsReceived: 10,
  };
  if (myTeam === "barcelona" && oppTeam === "bayernmunich") {
    if (
      barcelona.gamesWon >= bayernmunich.gamesWon ||
      barcelona.gamesLost <= bayernmunich.gamesLost
    ) {
      if (
        barcelona.goalsScored > bayernmunich.goalsScored ||
        barcelona.goalsReceived < bayernmunich.goalsReceived
      ) {
        $("#my-Chances").text("Barcelona is Most likely to Win!");
        $("#opp-Chances").text("Bayern is Less likely to Win!");
        $("#circle-cover-bg").css(
          "background-image",
          "url('css/images/barcelona.jpg')"
        );
      }
    } else if (
      bayernmunich.gamesWon >= barcelona.gamesWon ||
      bayernmunich.gamesLost <= barcelona.gamesLost
    ) {
      if (
        bayernmunich.goalsScored > barcelona.goalsScored ||
        bayernmunich.goalsReceived < barcelona.goalsReceived
      ) {
        $("#my-Chances").text("Barcelona is Less likely to Win!");
        $("#opp-Chances").text("Bayern is Most likely to Win!");
        $("#circle-cover-bg").css(
          "background-image",
          "url('/images/bayernmunich.jpg')"
        );
      }
    } else {
      $("#my-Chances").text("It is a Tie");
      $("#opp-Chances").text("It is a Tie");
      $("#circle-cover-bg").css("background-image", "url('/images/2.jpg')");
    }
  }

  if (myTeam === "barcelona" && oppTeam === "juventus") {
    if (
      barcelona.gamesWon >= juventus.gamesWon ||
      barcelona.gamesLost <= juventus.gamesLost
    ) {
      if (
        barcelona.goalsScored > juventus.goalsScored ||
        barcelona.goalsReceived < juventus.goalsReceived
      ) {
        $("#my-Chances").text("Barcelona is Most likely to Win!");
        $("#opp-Chances").text("juventus is Less likely to Win!");
        $("#circle-cover-bg").css(
          "background-image",
          "url('/images/barcelona.jpg')"
        );
      }
    } else if (
      juventus.gamesWon >= barcelona.gamesWon ||
      juventus.gamesLost <= barcelona.gamesLost
    ) {
      if (
        juventus.goalsScored > barcelona.goalsScored ||
        juventus.goalsReceived < barcelona.goalsReceived
      ) {
        $("#my-Chances").text("Barcelona is Less likely to Win!");
        $("#opp-Chances").text("juventus is Most likely to Win!");
        $("#circle-cover-bg").css(
          "background-image",
          "url('/images/Juventus.jpg')"
        );
      }
    } else {
      $("#my-Chances").text("It is a Tie");
      $("#opp-Chances").text("It is a Tie");
      $("#circle-cover-bg").css("background-image", "url('/images/2.jpg')");
    }
  } else if (myTeam === "barcelona" && oppTeam === "juventus") {
    if (
      barcelona.gamesWon >= juventus.gamesWon ||
      barcelona.gamesLost <= juventus.gamesLost
    ) {
      if (
        barcelona.goalsScored > juventus.goalsScored ||
        barcelona.goalsReceived < juventus.goalsReceived
      ) {
        $("#my-Chances").text("Barcelona is Most likely to Win!");
        $("#opp-Chances").text("Bayern is Less likely to Win!");
        $("#circle-cover-bg").css(
          "background-image",
          "url('/images/barcelona.jpg')"
        );
      }
    } else if (
      juventus.gamesWon >= barcelona.gamesWon ||
      juventus.gamesLost <= barcelona.gamesLost
    ) {
      if (
        juventus.goalsScored > barcelona.goalsScored ||
        juventus.goalsReceived < barcelona.goalsReceived
      ) {
        $("#my-Chances").text("Barcelona is Less likely to Win!");
        $("#opp-Chances").text("Bayern is Most likely to Win!");
        $("#circle-cover-bg").css(
          "background-image",
          "url('/images/bayernmunich.jpg')"
        );
      }
    } else {
      $("#my-Chances").text("It is a Tie");
      $("#opp-Chances").text("It is a Tie");
      $("#circle-cover-bg").css("background-image", "url('/images/2.jpg')");
    }
  }
  if((myTeam === oppTeam) && ((oppTeam !== "" && myTeam !== ""))){
       $("#my-Chances").text("It is a Tie");
      $("#opp-Chances").text("It is a Tie");
      $("#circle-cover-bg").css("background-image", "url('/images/2.jpg')");
  }
}
//Calculate chances
function check_Team_Selection() {
  var oppTeam = document.getElementById("oppTeam").value;
  var myTeam = document.getElementById("myTeam").value;
  //Check to see if team selection is empty or incomplete
  if (oppTeam === "" && myTeam === "") {
    alert("Please select Teams");
    return;
  } else if (
    (oppTeam !== "" && myTeam === "") ||
    (oppTeam === "" && myTeam !== "")
  ) {
    alert("You must select Teams for Both Own and Rival");
    return;
  }
}

//Calculate

//click to call function
document.getElementById("calculate").onclick = function () {
  CalculateChances();
};
