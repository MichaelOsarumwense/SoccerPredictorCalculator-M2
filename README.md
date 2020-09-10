# **Soccer Predictor Calculator** 
<img src="https://imgur.com/w95rzIK.jpg" style="margin: 0;">

Soccer Predictor Calculator is a web app that allows football lovers predict the chances of their favourite team winning its next match.
Chances are calculated on the basis of games won, games lost, goals scored and goals recieved in the last 5 matches.
<a href="https://soccerpredictorcalculator-m2.herokuapp.com/" target="_blank">click to visit Soccer Predictor website.</a>
## User Experience

The user experience is simple and easy to navigate. Soccer Predictor calculator is a one page application with four sections, background image, header with logo and a button to share the application, a section to select teams and calculate chances and finally the footer containing the copy right.

*User stories include:*
<ul>
<li>As a user i will like to have a landing/home page.</li>
<li>As a user i will like to be able to share the application with my friends.</li>
<li>As a user i will like to be able to select from a drop down of teams.</li>
<li>As a user i will like to be able to be able to see the % chances of selected teams by clicking calculate</li>
<li>As a user i will like the center image to change to the image of the winning team when i click calculate</li>
<li>As a user if i select the same team on both side i will like the center image to change to the logo of the selected team</li>
<li>As a user if i select the same team on both side i will like the chances field to display it is a tie</li>
<li>As a user if the result of my chances is a Tie from two different teams then i want the center image to show equal scores</li>
<li>As a user i will like to be prompted to select teams if i click calculate without selecting teams for both own and rival.</li>
<li>As a user i will like to be prompted with a success alert message after succesfully sharing application with friends</li>
<li>As a user i will like to be prompted with a fail alert message if sharing the app was unsuccesful</li>
<li>As a user i will like to be prompted with a fail alert message if sharing the app was unsuccesful</li>
<li>As a user i will like to have a clear button so i can clear the results of my initial prediction</li>
<li>As a user i will like the clear button to clear all fields including chances caluclated, teams selected and center image.</li>
<li>As a user i will like to see a text that informs of the variables used in calculating chances</li>
</ul>

## **Mocks**
### Web
**As a basic layout <a href="WireFrame/web-mock.PNG" target="_blank">here is a link </a> to the web wireFrame and Mock up used in creating Soccer Predictor Calculator.**
### Mobile
**For the mobile devices, <a href="WireFrame/mobile-mock.PNG" target="_blank">here is a link </a> to the wireFrame and Mock up used in creating Soccer Predictor Calculator.**

## **Features**
### Existing Features
<li>Team Select: The application has a select drop down where users can select own and rival teams</li>
<li>Calculate Chance: The application allows users to predict chances of winnng soccer matches by selecting teams and clicking calculate</li>
<li>Center Image: The Center image helps visualize the outcome by displaying the image or logo of the winning team</li>
<li>Loader gif: The loader image is displayed on the result field of each team until a calculation takes place</li>
<li>Share App: The Application has a share button that allows user share the application with friends.</li>
<li>Clear Option: The Application has a clear button that allows users conveiniently clear input fields as well as calculated results in one click.</li>
<li>Alert: The Application has an alert feature that gives users meaningful feedback on actions being performed.</li>
</ul>

### Features Left to Implement
<ul>
<li>Intergrate with actual champions league Api to retrieve real time statistics (currently a paid service.)</li>
</ul>

## **Technologies used**
<ul>
<li>HTML5</li>
<li>CSS3</li>
<li>Javascript: The Project uses javascript to make the application interactive as well as to define busines logic</li>
<li>JQuery: The project uses JQuery to simplify DOM manipulation.</li>
<li>Bootstrap: Bootstrap was used to implement stylings and create reuseable components.</li>
<li>Heroku: The Project uses Heroku for deployment</li>
<li>Flask</li>
<li>Python: A run.py file was created to aid deployment to heroku and render html template</li> 

</ul>

## **Testing**
<hr>
Testing on Soccer Predictor Calculator Website was carried out **manually** and by Atutomation using **Cypress**. The test approach was to test every user story individually by creating 
user journies and scenarios required to navigate through the entire site. While testing, a few bugs were found and fixed and these are are all listed below. **Devtool** and **light house** was also used to debug and test the application.

The link to the test automation repo used for this project can be found <a href="https://github.com/MichaelOsarumwense/Cypress-e2e-SoccerPredictor-m2.git" target="_blank">here.</a>

### **Home Page**
<ul>
<h3>Scenarios/Cases</h3>
<li>Calculate Chances: Navigate to team selections, select own and rival teams and click calculate. </li>
<li>See Chances: 
<ol>
<li>Chances for own and rival team should be displayed on **Your Chances** and **Rival Chances** fields upon clicking caluclate.</li>
<li>Chances for own and rival team displayed should contain percentage chances such as <strong><em>Bayernmunich has a 87.50% winning chance</em></strong></li>
<li>If the same team is selected on both sides then chances displayed should read "It is a tie"</li>
<li>If user click on calculate without selecting own or rival team then user gets an alert saying <strong><em>plese select teams</strong></em></li>
<li>If user click on calculate and selects just one team either own or rival team then user gets an alert saying <strong><em>You must select Teams for Both Own and Rival</em></strong></li>
</ol> 
</li>
<li>Center Image Change: 
<ol>
<li>The Centre image changes to the winning teams amongst the two teams selected.</li>
<li>The Centre image changes to a score bored displaying equals scores if both teams have an equal % chance..</li>
<li>The Centre image changes to teams logo if the same teams are selected is slected on both own and rival teams.</li>
</ol>
</li>
<li>Share App: On the header navigate to share app and click on button, fill in name and email and click send</li>
<li>Manually verify email is recieved: Naviage to the email addressed sent and verify email was recieved from Soccer Predictor Calculator (milestone2project@gmail.com)</li>
<li>Responsiveness: UX is responsive on small and medium devices like mobile phones and tablets.</li>
<li>Modal: 
<ol>
<li>Navigate to header and click share app, a modal form should be displayed containig input fields for name, email and link to website along with two buttons for share and close</li>
<li>Click on close and the Modal should be closed</li>
<li>Click on share without inputing name and email and user should be prompted to enter name and email</li>
<li>Upon entering details, when user click share user should get an alert that tells the user if the share was a success or failure</li>
</ol>
</li>
<li>Mobile Resolutions:
<ol>
<li>In a mobile resolution Centre Image should not be displayed.</li>
<li>In a mobile resolution share app button should be hidden in a toggle menu button.</li>
<li>On a mobile screen background image should cover and not repeat.</li>
<li>On a mobile screen there should be no centre display of winner, just results displayed on the right andleft fields.</li>
</ol>
</li>
</ul>
<hr>

### **Bugs**
<ul>
<li>Fixed bug with the business logic where chances were not being calculated if the selected teams had equal statistics.</li>
<li>Fixed a bug where images were not displaying across all pages due to moving the images folder into static directory.</li>
<li>Fixed a bug where modal was not being displayed on click due to a missing css closing curly braces</li>
<li>Fixed a bug where matches calculated with Paris was throwing a warning notification to select teams because the values for paris was empty</li>
</ul>

## **Deployment**
Soccer Predictor Calculator is deployed to Heroku and hosted on Heroku. The deployed branch is the master branch and can be found below: 
<ul>
<li>Deployed git Branch: <a href="https://github.com/MichaelOsarumwense/SoccerPredictorCalculator-M2.git">Github Repo</a> </li>
<li>To run the code locally, clone the repo with the above link, open project with gitpod and in the terminal run the following command: <strong><em>python3 run.py</strong></em></li>
</ul>


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
