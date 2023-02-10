/*                  Question-01. 
Write a program to take “city” name as input from user. If 
user enters “Karachi”, welcome the user like this: 
“Welcome to city of lights”*/

var cityName = prompt("Enter name of city.");
if (cityName == "Karachi") {
    document.write("Welcome to city of Lights." + "<br>" + "<br>");
}
else if (cityName == "Lahore") {
    document.write("Welcome to heart of Pakistan." + "<br>" + "<br>");
}
else if (cityName == "Peshawar") {
    document.write("Welcome to city of Flower." + "<br>" + "<br>");
}
else if (cityName == "Multan") {
    document.write("Welcome to city of Saints." + "<br>" + "<br>");
}
else if (cityName == "Skardu") {
    document.write("Welcome to the land of Piece, Beauty, Love and Mountain." + "<br>" + "<br>");
}
else {
    document.write("Welcome to " + cityName + "<br>" + "<br>");
}


/*                  Question-02. 
Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the 
user is female, give the message: Good Morning Ma’am..*/

var gender = prompt("Enter you gender.");
if (gender == "Male") {
    document.write("Good Morning Sir." + "<br>" + "<br>")
}
else if (gender == "Female") {
    document.write("Good Morining Ma'am" + "<br>" + "<br>");
}
else {
    document.write("Good Morning" + "<br>" + "<br>");
}


/*                  Question-03. 
Write a program to take input color of road traffic signal 
from the user & show the message according to this table:
Signal color Message
Red Must Stop
Yellow Ready to move
Green Move now*/

var traffic_Signal = prompt("Enter color of traffic signal.");
if (traffic_Signal == "Red") {
    document.write("Must Stop." + "<br>" + "<br>");
}
else if (traffic_Signal == "Yellow") {
    document.write("Ready to move" + "<br>" + "<br>");
}
else {
    document.write("Move Now" + "<br>" + "<br>");
}


/*                  Question-04. 
Write a program to take input remaining fuel in car (in 
litres) from user. If the current fuel is less than 0.25litres, 
show the message “Please refill the fuel in your car”*/

var petrol = prompt("Enter remaining fuel.");
if (petrol < "0.25") {
    document.write("Please refill the fuel in your car." + "<br>" + "<br>");
}
else{
    document.write("It's Okey" + "<br>" + "<br>");
}


/*                  Question-05. 
Run this script, & check whether alert message would be
displayed or not. Record the outputs.
a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
b. var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
c. var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
e. if (true){
alert("True");
}
if (false){
alert("False");
}
f. if("car" < "cat"){
alert("car is smaller than cat");
}*/

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}


/*                  Question-06. 
Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute 
grade as per following table:
Show the total marks, marks obtained, percentage, grade &
remarks like:*/

var english = prompt("Enter English's obtained marks");
var physics = prompt("Enter Physics's obtained marks");
var maths = prompt("Enter Math's obtained marks");
var total_obtained_marks = +english + +physics + +maths;
var marks_for_each_subject = 100;
var totalMarks = prompt("Enter total marks");
var percentage = (total_obtained_marks / totalMarks) * 100;
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + total_obtained_marks + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");

if (percentage >= "80") {
    var grade = "A1";
    document.write("Grade: " + grade + "<br>");

    var remarks = "Exceptional";
    document.write("Remarks: " + remarks + "<br>" + "<br>");
}
else if (percentage < "80" && percentage >= "70") {
    var grade = "A";
    document.write("Grade: " + grade + "<br>");

    var remarks = "Excellent";
    document.write("Remarks: " + remarks + "<br>" + "<br>");
}
else if (percentage < "70" && percentage >= "60") {
    var grade = "B";
    document.write("Grade: " + grade + "<br>");

    var remarks = "Very Good";
    document.write("Remarks: " + remarks + "<br>" + "<br>");
}
else if (percentage < "60" && percentage >= "50") {
    var grade = "C";
    document.write("Grade: " + grade + "<br>");

    var remarks = "Good";
    document.write("Remarks: " + remarks + "<br>" + "<br>");
}
else if (percentage < "50" && percentage >= "40") {
    var grade = "D";
    document.write("Grade: " + grade + "<br>");

    var remarks = "Very Fair";
    document.write("Remarks: " + remarks + "<br>" + "<br>");
}
else if (percentage < "40" && percentage >= "33") {
    var grade = "E";
    document.write("Grade: " + grade + "<br>");

    var remarks = "Fair";
    document.write("Remarks: " + remarks + "<br>" + "<br>");
}
else {
    var grade = "F";
    document.write("Grade: " + grade + "<br>");

    var remarks = "Fail";
    document.write("Remarks: " + remarks + "<br>" + "<br>");
}


/*                  Question-07. 
Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.*/

var num = 3;
var increment = num + 1;
var decrement = num - 1;
var gussNum = prompt("Enter a number");

if (num == gussNum) {
    document.write("Bingo! Correct answer" + "<br>" + "<br>");
}
else if (gussNum == increment) {
    document.write("Close enough to the correct answer" + "<br>" + "<br>");
}
else if (gussNum == decrement) {
    document.write("Close enough to correct answer" + "<br>" + "<br>");
}
else{
    document.write("OOP! incorrect answer" + "<br>" + "<br>");
}


/*                  Question-08. 
Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number 
is divisible by 3.*/

let number = prompt("Enter a number");
if (number % 3 == 0) {
    document.write("The given number is divisiable by 3." + "<br>" + "<br>");
}
else {
    document.write("The given number is not divisiable by 3." + "<br>" + "<br>");
}

/*                  Question-09. 
Write a program that checks whether the given input is an
even number or an odd number.*/

let num_ber = prompt("Enter a number");
if (num_ber % 2 == 0) {
    document.write("This is even number." + "<br>" + "<br>");
}
else {
    document.write("This odd number." + "<br>" + "<br>")
}


/*                  Question-10. 
Write a program that takes temperature as input and 
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/

let temp = prompt("Enter temperature");
if (temp > 40) {
    document.write("It is too hot outside." + "<br>" + "<br>")
}
else if (temp > 30) {
    document.write("The weather today is normal." + "<br>" + "<br>");
}
else if (temp > 20) {
    document.write("Today's weather is cool." + "<br>" + "<br>");
}
else {
    document.write("OMG! Today's weather is so cool." + "<br>" + "<br>");
}


/*                  Question-11. 
Write a program to create a calculator for +,-,*, / & % 
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user */

let first = prompt("Enter first number.");
let operator = prompt("Enter operator(+, -, *, /, %).");
let second = prompt("Enter second number.");

if (operator === '+') {
    let add = +first + +second;
    document.write(add);
}
else if (operator === '-') {
    let sub = first - second;
    document.write(sub);
}
else if (operator === '*') {
    let product = first * second;
    document.write(product);
}
else if (operator == '/') {
    let divide = first / second;
    document.write(divide);
}
else if (operator == '%') {
    let remainder = first % second;
    document.write(remainder);
}
else {
    document.write("You entered invalid operator.");
}