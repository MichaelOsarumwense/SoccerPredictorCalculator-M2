function calculateChances() {
  checkTeamSelection();
  clearValue();
  let oppTeam = document.getElementById("oppTeam").value;
  let myTeam = document.getElementById("myTeam").value;

  let trophy = function (name) {
    return `<h4>${name} <i class="fas fa-trophy"></i></h4>`;
  };
  let tie = function (message) {
    return `<h4>${message} <i class="fas fa-american-sign-language-interpreting"></i></h4>`;
  };

  let container = document.getElementById("winner");

  const teams = [
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

  const X = teams.find((x) => {
    if (x.name == myTeam) {
      return x;
    }
  });
  const Y = teams.find((y) => {
    if (y.name == oppTeam) {
      return y;
    }
  });

  let xChances =
    ((X.gamesWon / 5) * 100 +
      ((5 - X.gamesLost) / 5) * 100 +
      (X.goalsScored / 10) * 100 +
      ((10 - X.goalsReceived) / 10) * 100) /
    4;
  let yChances =
    ((Y.gamesWon / 5) * 100 +
      ((5 - Y.gamesLost) / 5) * 100 +
      (Y.goalsScored / 10) * 100 +
      ((10 - Y.goalsReceived) / 10) * 100) /
    4;

  if (X.name === myTeam && Y.name === oppTeam) {
    if (xChances > yChances) {
      $("#my_Chances").text(
        `${X.name} has a ${xChances.toFixed(2)}% winning chance`
      );
      $("#opp_Chances").text(
        `${Y.name} has a ${yChances.toFixed(2)}% winning chance`
      );
      $("#circle-cover-bg").css("background-image", `url(${X.url})`);
      container.innerHTML = trophy(X.name);
    } else if (xChances < yChances) {
      $("#opp_Chances").text(
        `${Y.name} has a ${yChances.toFixed(2)}% winning chance`
      );
      $("#my_Chances").text(
        `${X.name} has a ${xChances.toFixed(2)}% winning chance`
      );
      $("#circle-cover-bg").css("background-image", `url(${Y.url})`);
      container.innerHTML = trophy(Y.name);
    } else {
      $("#my_Chances").text(
        `${X.name} has a ${xChances.toFixed(2)}% winning chance`
      );
      $("#opp_Chances").text(
        `${Y.name} has a ${yChances.toFixed(2)}% winning chance`
      );
      $("#circle-cover-bg").css(
        "background-image",
        "url('/static/images/draw.jpg')"
      );
      container.innerHTML = tie("It's A Tie");
    }
  }
  if (myTeam === oppTeam && oppTeam !== "" && myTeam !== "") {
    $("#my_Chances").text("It is a Tie");
    $("#opp_Chances").text("It is a Tie");
    $("#circle-cover-bg").css("background-image", `url(${Y.url})`);
    container.innerHTML = tie("It's A Tie");
  }
}
//Calculate chances
function checkTeamSelection() {
  let oppTeam = document.getElementById("oppTeam").value;
  let myTeam = document.getElementById("myTeam").value;

  //Check to see if team selection is empty or incomplete
  if (oppTeam === "" && myTeam === "") {
    toastr.info("Please Select Teams");

    return;
  } else if (
    (oppTeam !== "" && myTeam === "") ||
    (oppTeam === "" && myTeam !== "")
  ) {
    toastr.warning("You must select Teams for Both Own and Rival");

    return;
  }
}

function sendMail(contactForm) {
  emailjs
    .send("gmail", "milestone2", {
      user_message: contactForm.message.value,
      user_name: contactForm.name.value,
      user_email: contactForm.email.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        let frm = document.getElementsByName("contact-form")[0];
        frm.reset();
        return toastr.success("Message Sent: Thanks for sharing");
      },
      function (error) {
        console.log("FAILED", error);
        let frm = document.getElementsByName("contact-form")[0];
        frm.reset();
        return toastr.error("Message Not Sent: Please Try Again.");
      }
    );
  return false; // To block from loading a new page
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

let header = document.getElementById("nav-bar"),
  sticky = header.offsetTop;

function onScrollHandler() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = onScrollHandler;

$(document).ready(function () {
  //click to call function
  document.getElementById("calculateButton").onclick = function () {
    calculateChances();
  };

  document.getElementById("cleareButton").onclick = function () {
    currentQuery = "";
    let t1 = (document.getElementById("oppTeam").value = currentQuery);
    let t2 = (document.getElementById("myTeam").value = currentQuery);
    clearValue();
  };

  //open share form Modal
  document.getElementById("shareButton").onclick = function () {
    openForm();
  };

  onScrollHandler();
});

function clearValue() {
  currentQuery = `<img src="/static/images/loader2.gif" alt="waiting..." />`;
  let chance_x = (document.getElementById(
    "my_Chances"
  ).innerHTML = currentQuery);
  let chance_y = (document.getElementById(
    "opp_Chances"
  ).innerHTML = currentQuery);
  $("#circle-cover-bg").css("background-image", "url('/static/images/2.jpg')");
  $("#winner").text("");
}
