function CalculateChances() {
  check_Team_Selection();
     clearValue();
  var oppTeam = document.getElementById("oppTeam").value;
  var myTeam = document.getElementById("myTeam").value;

  var Teams = [
    {
      name: "Barcelona",
      gamesWon: 3,
      gamesLost: 2,
      goalsScored: 9,
      goalsReceived: 2,
      url: "/static/images/barcelona.jpg",
    },
    {
      name: "Bayernmunich",
      gamesWon: 5,
      gamesLost: 0,
      goalsScored: 5,
      goalsReceived: 0,
      url: "/static/images/bayernmunich.jpg",
    },
    {
      name: "Juventus",
    gamesWon: 3,
      gamesLost: 1,
      goalsScored: 4,
      goalsReceived: 1,
      url: "/static/images/Juventus.jpg",
    },
    {
      name: "Liverpool",
    gamesWon: 2,
      gamesLost: 2,
      goalsScored: 2,
      goalsReceived: 1,
      url: "/static/images/Liverpool.jpg",
    },
    {
      name: "Paris",
    gamesWon: 3,
      gamesLost: 1,
      goalsScored: 3,
      goalsReceived: 0,
      url: "/static/images/Paris.jpg",
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

        var xChances = (((X.gamesWon/5 * (100))) + (((5 - X.gamesLost)/5 * (100))) + ((X.goalsScored/10 * (100))) + (((10 - X.goalsReceived)/10 * (100))))/4
        var yChances = (((Y.gamesWon/5 * (100))) + (((5 - Y.gamesLost)/5 * (100))) + ((Y.goalsScored/10 * (100))) + (((10 - Y.goalsReceived)/10 * (100))))/4

  if (X.name === myTeam && Y.name === oppTeam) {
    if (xChances > yChances) {
        $("#my_Chances").text(`${X.name} has a ${xChances.toFixed(2)}% winning chance`);
        $("#opp_Chances").text(`${Y.name} has a ${yChances.toFixed(2)}% winning chance`);
        $("#circle-cover-bg").css("background-image", `url(${X.url})`);
    } 
    else if (xChances < yChances) {
        $("#opp_Chances").text(`${Y.name} has a ${yChances.toFixed(2)}% winning chance`);
        $("#my_Chances").text(`${X.name} has a ${xChances.toFixed(2)}% winning chance`);
        $("#circle-cover-bg").css("background-image", `url(${Y.url})`);
    }
    else {
        $("#my_Chances").text(`${X.name} has a ${xChances.toFixed(2)}% winning chance`);
        $("#opp_Chances").text(`${Y.name} has a ${yChances.toFixed(2)}% winning chance`);
        $("#circle-cover-bg").css("background-image", "url('/static/images/draw.jpg')");
        }
  }
  if (myTeam === oppTeam && oppTeam !== "" && myTeam !== "") {
    $("#my_Chances").text("It is a Tie");
    $("#opp_Chances").text("It is a Tie");
    $("#circle-cover-bg").css("background-image", `url(${Y.url})`);
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

//open share form Modal
document.getElementById("shareButton").onclick = function () {
 openForm();
};


function sendMail(contactForm) {
    emailjs.send("gmail", "milestone2", {
        "user_message": contactForm.message.value,      
        "user_name": contactForm.name.value,
        "user_email": contactForm.email.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
              frm = document.getElementsByName('contact-form')[0]
            frm.reset();
            return alert('Thanks for sharing.');
        },
        function(error) {
            console.log("FAILED", error);
              frm = document.getElementsByName('contact-form')[0]
            frm.reset();
            return alert('Unknown error please try again');
        }
    );
    return false;  // To block from loading a new page
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var header = document.getElementById("nav-bar"),
    sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.onscroll = myFunction;

$(document).ready(function() {
    myFunction();
});

function clearValue() {
    currentQuery = `<img src="/static/images/loader2.gif" alt="waiting..." />`;
    var t1 = document.getElementById("my_Chances").innerHTML = currentQuery;
  var t2 = document.getElementById("opp_Chances").innerHTML = currentQuery;
 $("#circle-cover-bg").css("background-image", "url('/static/images/2.jpg')");

}