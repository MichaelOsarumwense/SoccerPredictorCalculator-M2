function CalculateChances() {
  check_Team_Selection();

  var oppTeam = document.getElementById("oppTeam").value;
  var myTeam = document.getElementById("myTeam").value;

  var Teams = [
    {
      name: "Barcelona",
      gamesWon: 4,
      gamesLost: 1,
      goalsScored: 9,
      goalsReceived: 2,
      url: "/images/barcelona.jpg",
    },
    {
      name: "Bayernmunich",
      gamesWon: 5,
      gamesLost: 0,
      goalsScored: 5,
      goalsReceived: 0,
      url: "/images/bayernmunich.jpg",
    },
    {
      name: "Juventus",
      gamesWon: 4,
      gamesLost: 1,
      goalsScored: 5,
      goalsReceived: 10,
      url: "/images/Juventus.jpg",
    },
  ];

  const X = Teams.find((x) => {
    if (x.name == myTeam) {
      return x;
    }
  });
  const Y = Teams.find((y) => {
    if (y.name == oppTeam) {
      return y;
    }
  });

  if (X.name === myTeam && Y.name === oppTeam) {
    if (X.gamesWon >= Y.gamesWon || X.gamesLost <= Y.gamesLost) {
      if (X.goalsScored > Y.goalsScored || X.goalsReceived < Y.goalsReceived) {
        $("#my-Chances").text(`${X.name} is Most likely to Win!`);
        $("#opp-Chances").text(`${Y.name} is Less likely to Win!`);
        $("#circle-cover-bg").css("background-image", `url(${X.url})`);
      }
    } else if (Y.gamesWon >= X.gamesWon || Y.gamesLost <= X.gamesLost) {
      if (Y.goalsScored > X.goalsScored || Y.goalsReceived < X.goalsReceived) {
        $("#opp-Chances").text(`${Y.name} is Most likely to Win!`);
        $("#my-Chances").text(`${X.name} is Less likely to Win!`);
        $("#circle-cover-bg").css("background-image", `url(${Y.url})`);
      }
    } else {
      $("#my-Chances").text("It is a Tie");
      $("#opp-Chances").text("It is a Tie");
      $("#circle-cover-bg").css("background-image", "url('/images/2.jpg')");
    }
  }
  if (myTeam === oppTeam && oppTeam !== "" && myTeam !== "") {
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

//click to call function
document.getElementById("calculate").onclick = function () {
  CalculateChances();
};
