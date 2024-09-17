// <<<<<<<<<<<<<<<<<<<< Assignment 12_13>>>>>>>>>>>>>>
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var asciiCode= +prompt("Enter Input")
if (asciiCode >= 48 && asciiCode <= 57) {
    alert("The input is a number.");
}else if (asciiCode >= 65 && asciiCode <= 90) {
    alert("The input is an uppercase letter.");
}else if (asciiCode >= 97 && asciiCode <= 122) {
    alert("The input is a lowercase letter.");
}else {
    alert("The input is neither a number, uppercase letter, nor lowercase letter.");
}
  



// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var num1 = prompt('Enter first number')
num1 = Number.parseInt(num1)
var num2 = prompt('Enter first number')
num2 = Number.parseInt(num2)
if (num1==num2){
    alert("Both Numbers are equal")
}else if(num1>num2){
    alert(num1 + ' is larger')
}else if(num1<num2){
    alert(num2 + ' is larger')
}


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var num3 = prompt('Enter a Number')
num3 = Number.parseInt(num3)
if (num3==0){
    alert('Number is zero')
}else if (num3>0){
    alert('Number is Positive')
}else if (num3<0){
    alert('Number is Negative')
}


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
var vowel = ['a','e','i','o','u']
var value = prompt('Enter a character')
flag = false
for (var i=0; i<vowel.length;i++){
    if(value==vowel[i]){
        flag=true
        break
    }else{
        flag=false
    }
}
if (flag){
    alert('character is vowel')
}else{
    alert('character is not vowel')
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise
var pass = "helloworld"
var user_pass = prompt('Enter your Password')
if (user_pass==""){
    alert('Please enter your password')
}else if(pass==user_pass){
    alert('Correct!')
}else{
    alert('Incorrecrt password')
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var hour = prompt('enter hour')
hour = Number.parseInt(hour)
if (hour<18){
    alert('Good day')
}else {
    alert('Good evening')
}




// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = prompt('Enter time')
if (time>=0 & time<1200){
    alert('Good morning')
}else if (time>=1200 & time<1700){
    alert('Good Afternoon')
}else if (time>=1700 & time<2100){
    alert('Good Evening')
}else if (time>=2100 & time<2359){
    alert('Good night')
}



