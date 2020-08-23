// $("#opp-Chances").text("20%");
// $("#my-Chances").text("80%");

//Calculate chances
function CalculateChances() {
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
