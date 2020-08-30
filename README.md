# **Soccer Predictor Calculator** 
<img src="https://imgur.com/MFMsTu7.jpg" style="margin: 0;">

Soccer Predictor Calculator is a web app that allows football lovers predict the chances of their favourite team winning its next match.
Chances are calculated on the basis of games won, games lost, goals scored and goals recieved in the last 5 matches.
<a href="https://soccerpredictorcalculator-m2.herokuapp.com/" target="_blank">click to visit ready food website.</a>
## User Experience

The user experience is simple and easy to navigate. Soccer Predictor calculator is a one page application with four sections, background image, header with logo and a button to share the application, a section to select teams and calculate chances and finally the footer containing the copy right.

On the Footer the user is able to navigate to a section that reveals the variables by which the teams chances are calculated.

*User stories include:*
<ul>
<li>As a user i will like to have a landing/home page.</li>
<li>As a user i will like to be able to share the application with my friends.</li>
<li>As a user i will like to be able to select from a drop down of teams.</li>
<li>As a user i will like to be able to be able to see the chances of selected teams by clicking calculate</li>
<li>As a user i will like the center image to change to the logo of the winning team when i click calculate</li>
<li>As a user if i select the same team on both side i will like the center image to reflect the selected team logo and display its a tie</li>
<li>As a user i will like to have a link on the footer that navigates me to the variable inputs used in calculaing chances.</li>
</ul>

**As a basic layout <a href="WireFrame/M2Wireframe.PNG" target="_blank">here is a link </a> to the wireFrame and Mock up used in creating Ready food restaurant.**

## **Features**

### Existing Features
<ul>ce.
<li>Team Select: The application has a select drop down where a user can select own and rival teams</li>
<li>Center Image: The Center image displays helps visualize the outcome by displaying the image or logo of the winning team</li>
<li>Loader: The loader feature is displayed on the result field of each team until a calculation takes place</li>
</ul>

### Features Left to Implement
<ul>
<li>Intergrate with actual champions league Api</li>
</ul>

## **Technologies used**
<ul>
<li>HTML5</li>
<li>CSS3</li>
<li>JQuery: The project uses JQuery to simplify DOM manipulation.</li>
<li>Bootstrap: Bootstrap was used to implement stylings and create reuseable components.</li>
<li>Heroku</li>
<li>Flask</li>


</ul>

## **Testing**
Testing on Soccer Predictor Calculator Website was carried out **manually** and by Atutomation using **Cypress**. The test approach was to test every user story individually by creating 
user journies and scenarios required to navigate through the entire site. While testing, a few bugs were found and fixed and these are are all listed below. **Devtool** and **light house** was also used to debug and test the application.

### **Home Page**
<ul>
<h3>Scenarios</h3>
<li>Calculate Chances: Navigate to team selections, select own and rival teams and click calculate. </li>
<li>See Chances: Chances for own and rival team are displayed Your-Rival chances fields.</li>
<li>Center Image Change: The image on the center image changes to the logo of the team with the best chance</li>
<li>Share App: On the header navigate to share app and clcik on button, fill in name and email and click semnd</li>
<li>See Chances Statistics: Navigate to footer click on Chances statistics and modal is displayed showing how chances were calculated</li>
</ul>


### **Bugs**
<ul>
<li>Fixed bug with the business logic where chances were not being calculated if selected teams had equal stats.</li>
<li>Fixed a bug where images were not displaying across all pages due to wrong href.</li>
</ul>

## **Deployment**
Soccer Predictor Calculator is deployed to Heroku and hosted on Heroku. The deployed branch is the master branch and can be found below: 
<ul>
<li>Deployed git Branch: <a href="https://github.com/MichaelOsarumwense/SoccerPredictorCalculator-M2.git">Github Repo</a> </li>
</ul>
To run the code locally, clone the repo with the above link, open the project folder with Visual studio code, right click on the index.html file and select run with live server.

## **Credit**
### **Content**
<ul>
<li>Teams used in this application were gotten from https://www.uefa.com/uefachampionsleague/</li>
</ul>

### **Media**
<ul>
<li>The photos used in this site were obtained from https://www.shutterstock.com/</li>
</ul>

### **Acknowledgements**
<ul>
<li>I received inspiration for this project from my love for football.</li>
<li>Many thanks to my mentor Guido Cecilio Garcia Bernal for his guidiance.</li>
</ul>

--------

Michael Osarumwense.
