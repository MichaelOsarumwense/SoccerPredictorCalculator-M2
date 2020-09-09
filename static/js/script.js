//Function to calculate winning chances after user selects Team
function calculateChances() {
    //Checks to see if teams are selected and if not prompts user to select team
    checkTeamSelection();

    //clears all input and result fields to ensure calculations are made strictly on the users recent input, also it ensures if there is a bug and chances can not be calculated, the previous result will be cleared.
    clearValue();

    //defining variables to represent each teams
    let oppTeam = document.getElementById("oppTeam").value;
    let myTeam = document.getElementById("myTeam").value;

    // setting up a field that displays the winning team at the middle and an Icon
    let trophy = function(result, fontIcon) {
        return `<h4>${result} ${fontIcon}</h4>`;
    };

    //defining the middle div that contains the trophy h4 tag
    let container = document.getElementById("winner");

    //Setting up static teams, this approach was used because the available Apis to retrieve the needed statistics all required a paid subscriptions.
    const teams = [{
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

    // retrieving individual team an object based on uuser selections
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

    /** Defining the business logic/algorithm. Here we add the percentage of games won and lost in a total of five games,
     * plus the percentage of goals scored and recieved in a threshold of 10 goals divided by four*/
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

    //checking the user selections and displaying results accordingly as well as changing the center images
    if (X.name === myTeam && Y.name === oppTeam) {
        if (xChances > yChances) {
            $("#my_Chances").text(
                `${X.name} has a ${xChances.toFixed(2)}% winning chance`
            );
            $("#opp_Chances").text(
                `${Y.name} has a ${yChances.toFixed(2)}% winning chance`
            );
            $("#circle-cover-bg").css("background-image", `url(${X.url})`);
            container.innerHTML = trophy(X.name, `<i class="fas fa-trophy"></i>`);
        } else if (xChances < yChances) {
            $("#opp_Chances").text(
                `${Y.name} has a ${yChances.toFixed(2)}% winning chance`
            );
            $("#my_Chances").text(
                `${X.name} has a ${xChances.toFixed(2)}% winning chance`
            );
            $("#circle-cover-bg").css("background-image", `url(${Y.url})`);
            container.innerHTML = trophy(Y.name, `<i class="fas fa-trophy"></i>`);
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
            container.innerHTML = trophy(
                "It's A Tie",
                `<i class="fas fa-american-sign-language-interpreting"></i>`
            );
        }
    }
    if (myTeam === oppTeam && oppTeam !== "" && myTeam !== "") {
        $("#my_Chances").text("It is a Tie");
        $("#opp_Chances").text("It is a Tie");
        $("#circle-cover-bg").css("background-image", `url(${Y.url})`);
        container.innerHTML = trophy(
            "It's A Tie",
            `<i class="fas fa-american-sign-language-interpreting"></i>`
        );
    }
}
//function to check team selection and return a toast notofocation
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
// send email function using email.js Api
function sendMail(contactForm) {
    emailjs
        .send("gmail", "milestone2", {
            user_message: contactForm.message.value,
            user_name: contactForm.name.value,
            user_email: contactForm.email.value,
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                let frm = document.getElementsByName("contact-form")[0];
                frm.reset();

                $("#share").buttonLoader("stop");
                return toastr.success("Message Sent: Thanks for sharing");
            },
            function(error) {
                console.log("FAILED", error);
                let frm = document.getElementsByName("contact-form")[0];
                frm.reset();
                $("#share").buttonLoader("stop");
                return toastr.error("Message Not Sent: Please Try Again.");
            }
        );
    return false; // To block from loading a new page
}

//open share app modal form function
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

//close share app modal form function
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//definig varibles for sticky header
let header = document.getElementById("nav-bar"),
    sticky = header.offsetTop;

//on scroll handler function
function onScrollHandler() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.onscroll = onScrollHandler;

$(document).ready(function() {
    //click to call calculate chances function
    document.getElementById("calculateButton").onclick = function() {
        calculateChances();
    };

    //clears every input (teams) and result fields on click
    document.getElementById("cleareButton").onclick = function() {
        currentQuery = "";
        let t1 = (document.getElementById("oppTeam").value = currentQuery);
        let t2 = (document.getElementById("myTeam").value = currentQuery);
        clearValue();
    };

    //open share form Modal
    document.getElementById("shareButton").onclick = function() {
        openForm();
    };

    //start loader on click share
    document.getElementById("share").onclick = function() {
        let friendsName = document.getElementById("name").value;
        let friendsEmail = document.getElementById("email").value;
        let btn = $(this);
        if (friendsName && friendsEmail !== "") {
            $(btn).buttonLoader("start");
            name;
        }
    };
    //calling the onscroll handler function for the sticky header
    onScrollHandler();
});

//function to clear center image, and the chances display fields
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