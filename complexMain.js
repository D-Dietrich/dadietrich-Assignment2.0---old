/*
Daniel Dietrich - Assignment 2 - INF 651
This is an interactive version of the questions that I created before the clarification video was released.
I realize this isn't needed, but thought it would be a shame to throw away
*/
//Question 1:
let myNumber;
//Question 2:
myNumber = window.prompt("Enter the number 5: " );

while(myNumber != 5)
{
    myNumber = window.prompt("You did not enter the number 5. Please try again: ")
}
console.log("Q1 & Q2: myNumber now equals " + myNumber + ".");

//Question 3:
let myOtherNumber;
myOtherNumber = window.prompt("Enter the number 5 again: " );

while(myOtherNumber != 5)
{
    myOtherNumber = window.prompt("You did not enter the number 5. Please try again: ")
}
console.log("Q3: myOtherNumber now equals " + myOtherNumber + ".");

//Question 4:
let myTotal;
myTotal = myNumber * myOtherNumber;

console.log("Q4: myTotal is equal to " + myTotal + ".");

//Question 5:
let myName = "";
let myCombo = "";
let temp = Number(myNumber) + Number(myOtherNumber);
myCombo = temp; //Number converted to string

//myCombo = myNumber + myOtherNumber; 
//**This is in the event that we were supposed to observe that the two numbers are converted to strings before adding, giving us "55"
console.log("Q5: myCombo is equal to " + myCombo + ".");

//Question 6:
let myOtherCombo;
myOtherCombo = Number(myNumber) + Number(myOtherNumber);
console.log("Q6: myOtherCombo is equal to " + myOtherCombo + ".");

//Question 7:
let myRemainder = myNumber % 5;
console.log("Q7: myRemainder is equal to " + myRemainder + ".");

//Question 8:
let i;
i = window.prompt("Enter the number 2: " );

while(i != 2)
{
    i = window.prompt("You did not enter the number 2. Please try again: ")
}
console.log("Q8: i now equals " + i + ".");

//Question 9:
let int;
int = window.prompt("Enter the number 4: " );

while(int != 4)
{
    int = window.prompt("You did not enter the number 4. Please try again: ")
}
console.log("Q9: int now equals " + int + ".");

//Question 10:
let myBoolean = false;
if(myBoolean)
console.log("Q10: myBoolean now equals true.");
else
console.log("Q10: myBoolean now equals false.");